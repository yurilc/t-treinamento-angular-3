export class AuthService {
    loggedIn = false;

    login(username: string, password: string) {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}