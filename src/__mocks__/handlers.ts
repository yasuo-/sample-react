import { PathParams, rest } from "msw";

const DEBUG_LOG = false;
const log = (...args: string[]) => DEBUG_LOG && console.warn(...args);

export const handlers = []