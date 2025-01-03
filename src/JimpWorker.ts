import Jimp from 'jimp/browser/lib/jimp';

interface MsgPack {
    images: string[],
    cutters: boolean[],
    river: boolean,
    scale: number, // 新增 scale 参数
}

self.onmessage = async (e: MessageEvent<MsgPack>) => {
    let width = 0;
    let height = 0;
    let single = 0;

    const pack = e.data;
    const scale = pack.scale || 1; // 使用 scale，默认值为 1
    const promises = [];

    for (const str of pack.images) {
        const buffer = Buffer.from(str, 'base64');
        const promise = Jimp.read(buffer);
        promises.push(promise);
    }

    const images = await Promise.all(promises);

    if (pack.river) {
        let lineWidth = 0;
        let lineHeight = 0;
        for (let i = 1; i <= images.length; ++i) {
            const image = images[i - 1];

            // 按比例缩放图像
            const scaledWidth = Math.round(image.getWidth() * scale);
            const scaledHeight = Math.round(image.getHeight() * scale);
            image.resize(scaledWidth, scaledHeight);

            lineHeight = Math.max(lineHeight, image.getHeight());
            lineWidth += image.getWidth();
            single = Math.max(single, lineHeight);

            if (i % 6 === 0) {
                width = Math.max(width, lineWidth);
                height += lineHeight;
                lineWidth = 0;
                lineHeight = 0;
            }
        }
        width = Math.max(width, lineWidth);
        height += lineHeight;
    } else {
        for (const image of images) {
            // 按比例缩放图像
            const scaledWidth = Math.round(image.getWidth() * scale);
            const scaledHeight = Math.round(image.getHeight() * scale);
            image.resize(scaledWidth, scaledHeight);

            width += image.getWidth();
            height = Math.max(height, image.getHeight());
        }
    }

    const result = await Jimp.create(width, height, 0x00000000);
    if (pack.river) {
        let px = 0;
        let py = 0;
        for (let i = 1; i <= images.length; ++i) {
            const image = images[i - 1];
            const cutter = pack.cutters[i - 1];
            if (cutter) {
                image.color([
                    {
                        apply: 'shade',
                        params: [50],
                    },
                ]);
            }

            result.blit(image, px, py + single - image.getHeight());
            px += image.getWidth();
            if (i % 6 === 0) {
                px = 0;
                py += single;
            }
        }
    } else {
        let pos = 0;
        for (const image of images) {
            result.blit(image, pos, height - image.getHeight());
            pos += image.getWidth();
        }
    }

    const base64 = await result.getBase64Async(Jimp.MIME_PNG);
    self.postMessage(base64);
    self.close();
};
