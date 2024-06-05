import {createRequire} from 'node:module'
const require = createRequire(import.meta.url)
export default require

/*
Позволяет использовать require() в ECMAScript модулях
В серверном файле просто импортировать
import require from "./require-in-es-modules.mjs";
*/
