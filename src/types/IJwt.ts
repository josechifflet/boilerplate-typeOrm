export interface JWTTokenHeader {
  alg: string;
  kid: string;
}
export interface JWTPayload {
  userId: string;
  aud: string;
  exp: number;
  iat: number;
  iss: string;
  auth_time: number;
  token_use: string;
}
