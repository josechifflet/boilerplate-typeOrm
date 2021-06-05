import jsonwebtoken from 'jsonwebtoken';
import config from '../config/config';
import { UnauthorizedError } from '../errors';
import { JWTTokenHeader, JWTPayload } from '../types';
import { v4 as uuidv4 } from 'uuid';

const decodeTokenHeader = (token: string): JWTTokenHeader => {
  const [headerEncoded] = token.split('.');
  const buff = Buffer.from(headerEncoded, 'base64');
  const text = buff.toString('ascii');
  return JSON.parse(text) as JWTTokenHeader;
};

const verifyJsonWebTokenSignature = (token: string) => {
  return jsonwebtoken.verify(token, config.JWT_PUBLIC_KEY, {
    algorithms: [config.JWT_ALG as any],
    issuer: config.JWT_ISSUER,
  }) as JWTPayload;
};

export const validateToken = (token: string) => {
  try {
    const header: JWTTokenHeader = decodeTokenHeader(token);
    if (header.kid !== config.JWT_KID || header.alg !== config.JWT_ALG) throw new UnauthorizedError('Invalid token');
    const decodedToken = verifyJsonWebTokenSignature(token);
    if (
      !decodedToken ||
      decodedToken.iss !== config.JWT_ISSUER ||
      decodedToken.token_use !== config.JWT_TOKEN_USE ||
      !config.JWT_AUDIENCE!.includes(decodedToken.aud as string)
    )
      throw new UnauthorizedError('Invalid token');

    return decodedToken;
  } catch (error) {
    if ((error.name as string) === 'TokenExpiredError') {
      throw new UnauthorizedError('Token expired');
    } else throw new UnauthorizedError('Invalid token');
  }
};

export const createToken = (userId: number): { jwt: string; jwtid: string } => {
  const jwtid = uuidv4();
  return {
    jwtid,
    jwt: jsonwebtoken.sign(
      { userId },
      { key: config.JWT_PRIVATE_KEY, passphrase: config.JWT_PASSPHRASE },
      {
        expiresIn: config.JWT_EXPIRATION,
        algorithm: config.JWT_ALG as any,
        issuer: config.JWT_ISSUER,
        keyid: config.JWT_KID,
        audience: config.JWT_AUDIENCE,
        jwtid,
      },
    ),
  };
};
