import * as firebase from 'firebase';
import { fromPromise } from 'rxjs/observable/fromPromise';

export class AuthService {
    loggedIn = false;

    login(username: string, password: string) {
        firebase
            .auth()
            .signInWithEmailAndPassword(
                username,
                password
            ).then(()=>{
                this.loggedIn = true
            }).catch(error => {
                console.log('erro', error);
            });
    }

    initialize() {
        firebase.auth()
            .onAuthStateChanged(
                token => {
                    if(token) {
                        this.loggedIn = true;
                    } else {
                        this.loggedIn = false;
                    }
                }
            );
    }

    logout() {
        firebase.auth().signOut()
            .then(()=> {
                this.loggedIn = false;
            });
    }

    getToken() {
        return fromPromise(firebase.auth()
            .currentUser
            .getToken()
        );
    }

    cadastrar(username: string, password:string) {
        return firebase.auth()
        .createUserWithEmailAndPassword(
        username,
        password
      );
    }
}