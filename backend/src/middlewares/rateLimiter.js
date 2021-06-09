const redis = require('redis');
const { RateLimiterRedis } = require('rate-limiter-flexible');
require('dotenv/config');

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  no_ready_check: true,
  port: Number(process.env.REDIS_PORT),
  auth_pass: process.env.REDIS_PASSWORD
})

const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'ratelimit',
  points: 15,
  duration: 10,
});

async function rateLimiterMiddleware(req, res, next) {
  try {
    await rateLimiter.consume(req.ip);

    return next();
  } catch (err) {
    return res.status(429).json({
      message: 'Too many requests'
    })
  }
}

module.exports = rateLimiterMiddleware;
