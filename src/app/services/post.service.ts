import {Injectable, Inject } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostServices {

    constructor(private http: Http){
        console.log('servico de post inciado');
    }

    getPosts(){

        return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map(res => res.json());

    }

}