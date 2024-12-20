import Tile from "./Tile";
declare class Parser {
    private idx;
    private seq;
    private static readonly restChar;
    private static readonly spaceChar;
    private static readonly maxLength;
    private static readonly prefixChar;
    private static readonly postfixChar;
    constructor();
    private get token();
    private shift;
    private eof;
    parse(seq: string, river: boolean): Tile[];
    private parseSeq;
    private parseRiver;
    private parseSpace;
    private parseSet;
}
export default Parser;
