const {
  createLogger,
  transports,
  format,
} = require('winston');

const addAppFormat = format(info => {
  return info;
});

const winstonLogger = createLogger({
  transports: [
    new transports.File({
      level: 'error',
      filename: './logs/all-logs.log',
      handleExceptions: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
    }),
  ],
  format: format.combine(addAppFormat(), format.json()),
  exitOnError: false,
});

const formatMessage = (message) => {
  return `${message}`;
};

const logger = {
  log(level, message) {
    winstonLogger.log(level, formatMessage(message));
  },
  error(message) {
    winstonLogger.error(formatMessage(message));
  },
  warn(message) {
    winstonLogger.warn(formatMessage(message));n 
  },
  verbose(message) {
    winstonLogger.verbose(formatMessage(message));
  },
  info(message) {
    winstonLogger.info(formatMessage(message));
  },
  debug(message) {
    winstonLogger.debug(formatMessage(message));
  },
  silly(message) {
    winstonLogger.silly(formatMessage(message));
  },
};

const stream = {
  write(message) {
    winstonLogger.debug(formatMessage(message));
  },
};

module.exports.logger = logger
module.exports.stream = stream