const Redis = require("ioredis").default


const redis = new Redis({
    host:process.env.REDIS_HOST,
    port:process.env.REDIS_PORT,
    password:process.env.REDIS_PASSWORD,
   
     maxRetriesPerRequest: 1,
  retryStrategy: (times) => {
    if (times > 3) return null; // 3 tries ke baad band ho jaao
    return 1000;
  }

})


redis.on("connect", ()=>{
    console.log("Server is connected to redis")
})
redis.on('error', (err) => console.error('Redis Error:', JSON.stringify(err), err));

module.exports = redis