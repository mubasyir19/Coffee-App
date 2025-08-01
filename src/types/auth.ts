export interface JWTPayload {
  user_id: string;
  fullname: string;
  username: string;
  email: string;
  phoneNumber: string;
  exp: number;
  iat: number;
  nbf: number;
}

export interface Customer {
  id: string;
  fullname: string;
  username: string;
  email: string;
  phoneNumber: string;
  address: string;
}
