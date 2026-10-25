const logger = (req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const time = new Date().toLocaleString();
    const duration = Date.now() - start;
    console.log(`[${time}] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`);
  });

  next();
};

module.exports = logger;
