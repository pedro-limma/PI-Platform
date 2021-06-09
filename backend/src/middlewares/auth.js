const apiKeys = new Map();

apiKeys.set('f981d14', true);
apiKeys.set('d5b0e90', true);
apiKeys.set('2f9b8a8', true);

module.exports = async (req, res, next) => {
  const key = req.header('X-API-KEY');

  if (apiKeys.has(key)) {
    next();
  } else {
    return res.status(401).json({
      status: 401,
      message: 'Request not authorized'
    })
  }
}
