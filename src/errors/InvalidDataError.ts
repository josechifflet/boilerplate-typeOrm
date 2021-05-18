import { ErrorCode } from 'types';
import { BaseError } from './BaseError';

export class InvalidDataError extends BaseError {
  constructor(message: any, errorPlace?: string) {
    super(ErrorCode.INVALID_DATA, message, 400, errorPlace);
  }
}
