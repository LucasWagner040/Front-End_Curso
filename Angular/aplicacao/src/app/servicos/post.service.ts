import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../modelo/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private requisicao : HttpClient) { }

   obterPosts = () => {
    return this.requisicao.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
