const server = require('./app');

const port = process.env.PORT || 8085;
server.listen(port, () => console.log(`Running on port ${port}`))
