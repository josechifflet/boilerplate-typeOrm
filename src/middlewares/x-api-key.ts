import { Request, Response, NextFunction } from 'express';
import config from '../config/config';
import { errorHandlerAsync } from '../utils/errorHandler';

export const apiKeyMiddleware = errorHandlerAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    if (!req.headers['x-api-key']) return res.status(404).send();
    const token = req.headers['x-api-key'] as string;
    return token === config.X_API_KEY ? next() : res.status(404).send();
  },
);
