import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '../errors';
import { validateToken } from '../utils/jwt';
import { userRepository } from '../db/repositories';
import { errorHandlerAsync } from '../utils/errorHandler';

export const authMiddleware = errorHandlerAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    if (!req.headers.authorization) throw new UnauthorizedError('Token not found');
    const token = req.headers.authorization as string;

    const decodedPayload = validateToken(token);
    if (!decodedPayload)
      throw new UnauthorizedError('Invalid token');

    const { userId, auth_time } = decodedPayload;
    const user = await userRepository().findOne({ where: { id:userId } });
    if (!user) throw new UnauthorizedError('Invalid token');

    if (auth_time !== user.authTime.getMilliseconds()) throw new UnauthorizedError('Token expired');

    res.locals.user = user;
    res.locals.jwtPayload = decodedPayload;
    next();
  },
);
