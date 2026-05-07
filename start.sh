#!/bin/sh
echo "Running Payload migrations..."
node -e "
const { getPayload } = require('payload');
const config = require('./payload.config.js');
getPayload({ config }).then(async (payload) => {
  await payload.db.migrate();
  console.log('Migration done!');
  process.exit(0);
}).catch((err) => {
  console.error('Migration failed or already done:', err.message);
  process.exit(0);
});
"
 
echo "Starting Next.js server..."
exec env HOSTNAME="0.0.0.0" node server.js