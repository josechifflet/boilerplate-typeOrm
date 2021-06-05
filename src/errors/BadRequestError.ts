import { ErrorCode } from '../types/enums';
import { BaseError } from './BaseError';

export class BadRequestError extends BaseError {
  constructor(message: any, errorPlace?: string) {
    super(ErrorCode.BAD_REQUEST, message, 400, errorPlace);
  }
}
