import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';

import { Ingrediente } from "../ingrediente/ingrediente";
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class IngredienteService {
    private ingredientes: Ingrediente[] = [];
    subject = new Subject<Ingrediente[]>();

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

    getIngrediente(index: number) {
        return { ...this.ingredientes[index] };
    }

    addIngrediente(ingrediente: Ingrediente) {
        return this.authService.getToken()
            .pipe(
                switchMap(token => {
                    return this.http.post(
                        environment.apiURL + 'ingredientes.json?auth='+token,
                        ingrediente
                );
            }));
        //this.subject.next(this.getIngredientes());
    }

    updateIngrediente(index: number, ingrediente: Ingrediente){
        this.ingredientes[index] = ingrediente;
        //this.subject.next(this.getIngredientes());
    }

    removeIngrediente(index: number) {
        this.ingredientes.splice(index, 1);
        //this.subject.next(this.getIngredientes());
    }
}