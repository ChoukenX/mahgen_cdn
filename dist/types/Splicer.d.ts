import Tile from "./Tile";
declare class Splicer {
    private static readonly imageDict;
    private static readonly stateChar;
    private static readonly suitChar;
    private static readonly spaceName;
    static loadRes(): void;
    splice(tiles: ReadonlyArray<Tile>, river: boolean, scale?: number): Promise<string>;
    private getImage;
}
export default Splicer;
