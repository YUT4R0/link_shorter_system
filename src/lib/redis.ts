import { createClient } from 'redis';

const url = "redis://:docker@localhost:6379"
export const redis = createClient({ url })
  
redis
.on("error", err => console.log(`Redis client error: ${err}`))
.connect()