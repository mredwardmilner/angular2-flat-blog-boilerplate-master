import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { ArticleService } from '../article.service';

import 'rxjs/add/operator/switchMap'; // Import the switchMap operator to use later with the route parameters Observable.

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})


export class ArticleComponent implements OnInit {
  @Input() article: Article; 
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private location: Location) {}

    ngOnInit(): void {
      this.route.paramMap
          // The switchMap operator maps the id in the Observable route parameters to a new Observable, the result of the HeroService.getHero() method.
          .switchMap((params: ParamMap) => this.articleService.getArticle(+params.get('id')))
          // The hero id is a number. Route parameters are always strings. So the route parameter value is converted to a number with the JavaScript (+) operator.
          .subscribe(article => this.article = article);
      // paramMap Observable to extract the id parameter value from the ActivatedRoute service and use the HeroService to fetch the hero with that id.
  }
}
