declare class Mahgen {
    private static readonly parser;
    private static readonly splicer;
    private constructor();
    static render(seq: string, river: boolean, scale?: number): Promise<string>;
}
export default Mahgen;
