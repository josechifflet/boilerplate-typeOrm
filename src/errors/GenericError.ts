import { ErrorCode } from 'types';
import { BaseError } from './BaseError';

export class GenericError extends BaseError {
  constructor(message: any, errorPlace?: string) {
    super(ErrorCode.GENERIC, message, 400, errorPlace);
  }
}
