export interface User {
    id: string;
    email: string;
    password: string;
    username: string;
    first_name: string;
    last_name: string;
    picture: string;
    token?: string;
}