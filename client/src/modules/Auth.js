import axios from 'axios'

class Auth{
    // https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt
    static authenticateToken(token){
        sessionStorage.setItem('token', token);
    }

    // logged in
    static isUserAuthenticated(){
        return sessionStorage.getItem('token') !== null;
    }

    // log out
    static deauthenticateUser(){
        return sessionStorage.removeItem('token');
    }

    static getToken(){
        return sessionStorage.getItem('token');
    }
}


export default Auth;