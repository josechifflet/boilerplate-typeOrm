import { Request, Response, NextFunction } from 'express';
import { BaseError } from '../errors/BaseError';

export const errorCatch = (err: BaseError, req: Request, res: Response, next: NextFunction) => {
  res.status(500)
  res.end()
}

export const handleErrorAsync = (func: any) => async (
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
