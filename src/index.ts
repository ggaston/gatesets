import { redis } from "./server/redis";

async function main(){
    const result = await redis();

    console.log(result);
}

main();
