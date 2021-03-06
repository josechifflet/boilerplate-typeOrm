import { ErrorCode } from '../types/enums';
import { BaseError } from './BaseError';

export class UnauthorizedError extends BaseError {
  constructor(message: any, errorPlace?: string) {
    super(ErrorCode.UNAUTHORIZED, message, 401, errorPlace);
  }
}
