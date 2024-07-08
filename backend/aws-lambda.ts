import serverless from 'serverless-http';
import app from './server.js'; 


// Wrap the Express app in the Lambda handler function
module.exports.handler = serverless(app);
