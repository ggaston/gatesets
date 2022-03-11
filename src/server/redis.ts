import {createClient} from "redis";

export async function redis() {
  const client = createClient({
    url: process.env.REDIS_HOST ||'redis://127.0.0.1:6379'
  });

  client.on("error", (e) => {
    console.log(`Error: ${e}`);
  });
  
  await client.connect()

  await client.set('GateKey', 'gate value 1');
  const value = await client.get('GateKey');
  const scan = await client.scan(0)
  console.log(value)
  console.log(`Scan: ${JSON.stringify(scan)}`)

  client.disconnect();

  return value;
}
