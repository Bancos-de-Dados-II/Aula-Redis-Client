const redis = require('redis');
require('dotenv').config();

const client = redis.createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

async function conectar(){
    await client.connect();
    console.log(await client.ping());
}

conectar();

async function set(key, value){
    console.log(await client.set(key, value));
}  

// set('abc','teste');

async function get(key){
    console.log(await client.get(key));
}

get('abc');