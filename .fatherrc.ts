import {defineConfig} from 'father';
// @ts-ignore
import * as path from "node:path";

export default defineConfig({
    cjs: {},
    prebundle: {
        deps: {}
    },
    alias: {
        '@': path.resolve(__dirname, './src'),
    }
});
