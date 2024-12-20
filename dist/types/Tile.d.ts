import TileState from "./TileState";
import TileSuit from "./TileSuit";
declare class Tile {
    readonly num: number;
    readonly suit: TileSuit;
    readonly state: TileState;
    constructor(num: number, suit: TileSuit, state: TileState);
}
export default Tile;
