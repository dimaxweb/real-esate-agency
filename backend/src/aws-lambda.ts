import serverless from 'serverless-http';
import app from './server';


// Wrap the Express app in the Lambda handler function
module.exports.handler = serverless(app);
