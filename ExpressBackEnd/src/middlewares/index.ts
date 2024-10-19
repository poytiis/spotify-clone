import { Request, Response, NextFunction  } from "express";
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { HTTPError } from "../utils/errors";

type Midelware = (req: Request, res: Response, next: NextFunction) => void;

export const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session.userId) {
    next();
  } else {
    res.sendStatus(401);
  }
}

export const allowCORS = (req: Request, res: Response, next: NextFunction): void => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
}

export const validateHTTPBody = (dtoClass: any): Midelware => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const instance = plainToInstance(dtoClass, req.body);
    validate(instance).then(errors => {
      if (errors.length > 0) {
        const errorMessages = errors.map(error =>
          Object.values(error.constraints || {})
        ).flat();

        res.status(400).json({
          message: 'Validation failed',
          errors: errorMessages,
        });
      } else {
        req.body = instance; 
        next();
      }
    }).catch(err => {
      res.status(500).json({
        message: 'Internal Server Error during validation'
      });
    });
  };
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let statusCode = 500;
  let message = 'An unexpected error occurred';

  if (err instanceof HTTPError) {
    statusCode = err.statusCode;
    message = err.message;
  } else {
    console.error('Error:', err);
  }

  res.status(statusCode).json({
    message
  });
};
