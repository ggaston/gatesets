import redis from "redis";

export async function connect() {
  const client = redis.createClient({
    url: 'redis://127.0.0.1:8088'
  });

  client.on("error", (e) => {
    console.log(`Error: ${e}`);
  });
  
  await client.connect()

  //await client.set('GateKey1', 'gate value 1');
  const value = await client.get('GateKey');

  console.log(value)
}

connect();
