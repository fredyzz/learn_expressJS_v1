import * as dotenv from 'dotenv'
dotenv.config()

import app from './server';

// Error handling outside of the controllers
// This is a global error handler
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
})

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
})

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
