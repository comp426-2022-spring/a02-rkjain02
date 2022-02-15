import minimist from "minimist";
import { flipACoin } from "./modules/coin.mjs";


const args = minimist(process.argv.slice(2))

if(args.call == "tails" || args.call == "heads") {
    const call = args.call
    console.log(flipACoin(call))
}
else {
    process.exit(1)
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")  
}

