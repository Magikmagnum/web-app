
const API_PATH = "http://192.168.0.8";
const API_PORT = "3001";
const API_VERSION = "api/v1/";
const API_USER_TOKEN = localStorage.getItem('user');

const API_LOCAL = API_PATH + ":" + API_PORT + "/" + API_VERSION;


export type ErrorType = {
    status: number,
    success: boolean,
    //data: {},
    message: string
}

export type DataAuthType = {
    status: number,
    success: boolean,
    data: {
        token: number
    },
    message: string
}

export type AuthType = {
    username: string,
    password: string
}

export type RegisterType = {
    email: string,
    password: string
}



export async function loginQuery({ username, password }: AuthType): Promise<DataAuthType> {

    const response = await fetch(API_LOCAL + 'login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "username": username, "password": password,
        })
    })

    const responseData = await response.json();

    if (response.ok) {
        return responseData;
    }

    throw new Error(responseData.message);
}



export async function registerQuery({ email, password }: RegisterType): Promise<DataAuthType> {

    const response = await fetch(API_LOCAL + 'register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "email": email, "password": password,
        })
    })

    const responseData = await response.json();
    if (response.ok) {
        return responseData;
    }

    throw new Error(responseData.message);
}
