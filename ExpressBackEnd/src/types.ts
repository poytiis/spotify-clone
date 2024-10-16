export interface TypedRequestBody<T> extends Express.Request {
    body: T;
}

export interface UserAPI {
    email: string;
    password: string;
}