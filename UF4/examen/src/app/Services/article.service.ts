import { Injectable } from '@angular/core';
import { Article } from '../Model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  generateArticles(): Article[] {
    const articles: Article[] = [];
    for (let i = 0; i < 100; i++) {
      articles.push({
        name: `Artículo ${i + 1}`,
        description: `Descripción del artículo ${i + 1}`,
        price: Math.floor(Math.random() * 100) + 1
      });
    }
    return articles;
  }
}
