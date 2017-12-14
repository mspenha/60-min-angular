import { Component } from '@angular/core';
import {PostServices} from '../services/post.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostServices],
})
export class UserComponent  { 
  name: string; 
  email: string;
  endereco: endereco;
  hobbies: string[];
  mostrarHobbies: boolean;
  posts: Post[];

  constructor(private postService: PostServices) {

      console.log('construtor');
      this.name = 'Angular'; 
      this.email = 'teste@teste.com';
      this.endereco = {
        rua: 'teste',
        cidade: 'teste',
        estado: 'teste',
      };
      this.hobbies = ['musica', 'filmes', 'esportes'];
      this.mostrarHobbies = false;

      this.postService.getPosts().subscribe(post => {
        this.posts = post;
      });

  }

  mostrar(){
    this.mostrarHobbies = !this.mostrarHobbies;
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
  }

  deletar(i){
    this.hobbies.splice(i, 1);
  }

}

interface endereco {
    rua: string,
    cidade: string,
    estado: string,
}

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}