const customLogger = (message) => (req, res, next) => {
    console.log(`Hello from  ${message}`);
    next();
}

export default customLogger;