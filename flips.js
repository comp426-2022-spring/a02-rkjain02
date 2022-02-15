import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
console.log(args)
const number = args.number || 1;

var flips = coinFlips(number)

console.log(flips)
console.log(countFlips(flips))

