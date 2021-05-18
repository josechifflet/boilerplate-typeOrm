import { ErrorCode } from 'types';
import { BaseError } from './BaseError';

export class InvalidParamError extends BaseError {
  constructor(message: any, errorPlace?: string) {
    super(ErrorCode.INVALID_PARAM, message, 400, errorPlace);
  }
}
