
export type CreateClientConfigType = {
  api_url: string,
  api_key: string, 
  options?:object|null
}

export type CreateClientType = {
  dispatch: Function,
  collection: "CollectionService",
  auth: "AuthService",
  storage: "StorageService"
}

export type ResponseType = {
  ok:boolean,
  data: object|null,
  error: object|null,
  meta: object|null,
  xhr: object|null, 
  exception: object|null
}


export interface AuthUserInterface {
  _key: string,
  user_key: string,
  display_name: string,
  email: string,
  username: string,
  photo_url: string,
  password: string,
  metadata: object
}

export interface AuthCredentialsInterface {
  email?: string;
  username?:string;
  password?: string;
  display_name?: string;
  otp?:string;
  aud?:string;
  grant_type?:string;
  intent?:string;
  new_email?:string;
  new_password?:string 
}


export type AuthTokenType = {
  id_token: any
}

