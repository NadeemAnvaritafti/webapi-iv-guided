require('dotenv').config();

const server = require('./api/server.js');

// reading an environment variable
const port = process.env.PORT || 4000;  // <<<< secret sauce -- makes our port dynamic

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
