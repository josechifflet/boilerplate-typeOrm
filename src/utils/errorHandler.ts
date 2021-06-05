import { Request, Response, NextFunction } from 'express';
import config from '../config/config';
import { BaseError } from '../errors/BaseError';

export const errorHandler = (err: BaseError, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof BaseError)
  res.status(err.status).json({
    type: err.name,
    message: err.message,
    ...(config.NODE_ENV !== 'production' && { err }),
  });
else res.status(500).send();
}

export const errorHandlerAsync = (func: any) => async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await func(req, res, next);
  } catch (error) {
    next(error);
  }
};
