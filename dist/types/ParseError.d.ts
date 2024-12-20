import ErrorCode from "./ErrorCode";
declare class ParseError extends Error {
    readonly code: ErrorCode;
    readonly index: number;
    constructor(code: ErrorCode, index: number);
}
export default ParseError;
