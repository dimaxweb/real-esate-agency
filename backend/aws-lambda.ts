import serverless from 'serverless-http';
import app from './server.ts';


// Wrap the Express app in the Lambda handler function
module.exports.handler = serverless(app);
