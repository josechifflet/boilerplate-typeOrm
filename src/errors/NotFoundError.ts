import { ErrorCode } from 'types';
import { BaseError } from './BaseError';

export class NotFoundError extends BaseError {
  constructor(message?: any, errorPlace?: string) {
    super(ErrorCode.NOT_FOUND, message || 'Resource not found', 404, errorPlace);
  }
}
