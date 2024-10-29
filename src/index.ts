import * as dotenv from 'dotenv'
dotenv.config()
import config from './config';
import app from './server';

// Error handling outside of the controllers
// This is a global error handler
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
})

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
})

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
