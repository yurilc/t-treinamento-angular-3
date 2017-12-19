import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, tap } from 'rxjs/operators';

import { Ingrediente } from "../ingrediente/ingrediente";
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class IngredienteService {
    subject = new Subject<void>();

    constructor(private http: HttpClient,
                private authService: AuthService) {}

    getIngredientes() {
        return this.authService
            .getToken()
            .pipe(
                switchMap(token =>{
                    return this.http.get(
                        environment.apiURL + 'ingredientes.json?auth=' + token
                    );
                }),
                map(data => {
                   const list: Ingrediente[] = [] 
                   for(let id in data) {
                    let i = data[id];
                    i['id'] = id;
                    list.push(i);
                   }
                   return list;
                })
            );
    }

    getIngrediente(chave: string) {
        return this.authService.getToken()
            .pipe(
                switchMap(token => {
                    return this.http.get<Ingrediente>(
                        environment.apiURL
                        + 'ingredientes/' 
                        + chave + 
                        '.json?auth=' 
                        + token
                    );
                })
            );
    }

    addIngrediente(ingrediente: Ingrediente) {
        return this.authService.getToken()
            .pipe(
                switchMap(token => {
                    return this.http.post(
                        environment.apiURL + 'ingredientes.json?auth='+token,
                        ingrediente
                    ).pipe(
                        tap(()=> {
                            this.subject.next();
                        })
                    );
                }));
    }

    updateIngrediente(chave: string, ingrediente: Ingrediente){
        return this.authService.getToken()
            .pipe(
                switchMap(token => {
                    return this.http.put(
                        environment.apiURL
                        + 'ingredientes/' 
                        + chave + 
                        '.json?auth=' 
                        + token,
                        ingrediente
                    ).pipe(
                        tap(()=> {
                            this.subject.next();
                        })
                    );
                })
            )
        //this.subject.next(this.getIngredientes());
    }

    removeIngrediente(chave: string) {
        return this.authService.getToken()
        .pipe(
            switchMap(token => {
                return this.http.delete(
                    environment.apiURL
                    + 'ingredientes/' 
                    + chave + 
                    '.json?auth=' 
                    + token
                ).pipe(
                    tap(()=> {
                        this.subject.next();
                    })
                );
            })
        );
        //this.subject.next(this.getIngredientes());
    }
}