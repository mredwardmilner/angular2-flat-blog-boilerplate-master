import { Component } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  providers: [ArticleService]
})
export class AppComponent {
  title = 'Site';

  articles: Article;

  constructor(private articleService: ArticleService) { }

  getTheArticles(): void {
    this.articleService.getTheArticles().then(articles => {
        this.articles = articles;
        console.log('articles', this.articles);
    });
  }

  ngOnInit(): void {
    this.getTheArticles();
  }
}
