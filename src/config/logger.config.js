import  { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, printf } = format;

const customFromat =printf(({level,message,timestamp})=>{
    return `${timestamp} ${level}: ${message}`;
});

const logger=createLogger({
    format:combine(
    timestamp({
        format:'YYYY-MM-DD HH:mm:ss'
    }),
    customFromat
  ), 
  transports:[
    new transports.Console(),
    new transports.File({filename:'combine.logs'}),
  ],
})

export default logger;