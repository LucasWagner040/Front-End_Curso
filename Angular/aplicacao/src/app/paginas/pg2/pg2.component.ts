import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/modelo/Post';
import { PostService } from 'src/app/servicos/post.service';

@Component({
  selector: 'app-pg2',
  templateUrl: './pg2.component.html',
  styleUrls: ['./pg2.component.css']
})
export class Pg2Component implements OnInit {

  constructor(private servico: PostService) { }

  vetor: Post[] = [];

  ngOnInit(): void {

    this.servico.obterPosts()
    .subscribe((postagens) => {
      this.vetor = postagens;
    })

  }

}
