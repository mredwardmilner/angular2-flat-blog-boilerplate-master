import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise'; //http://reactivex.io/rxjs

import { Article } from './article';

@Injectable()
export class ArticleService {

  private articlesUrl = 'assets/articles.json';  
  constructor(public http: Http) { }

  getArticle(id: number): Promise<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Article) //The data in the response is a single article object rather than an array.
        .catch(this.handleError);
}; // The data should successfully load from the mock server.


  // getArticles(): Promise<Article[]> {
  //   return this.http.get(this.articlesUrl)
  //     .toPromise()
  //     .then(response => response.json().data as Article[]) 
  //     .catch(this.handleError);
  // };

  // Function returning a promise which, when resolved, returns the articles as an object array
  public getTheArticles() {
    return new Promise(resolve => {
      this.http.get('assets/articles.json').subscribe(response => {
        resolve(response.json());
      });
    });
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
