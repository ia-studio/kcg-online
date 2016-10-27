import { Component, Input } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { NewsService, News } from './services/news.service';

@Component({
  selector: 'kcg-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [NewsService]
})
export class AppComponent {
  showNews = true;
  showSlideMenu = false;
  newsCount = 0;
  news: News[] = [];
  sub: any;

  public constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  showNowNews(idx: number) {
    return (this.newsCount % this.news.length) === idx;
  }

  getNews() {
    this.newsService
        .getNews()
        .subscribe(
          news => this.news = news,
          error => this.news = []);
  }

  @Input() 
  showPhone:boolean;
  
  ngOnInit() {
    this.getNews();
    
    setInterval(() => { if(this.showNews) { this.newsCount++ } }, 3000);
  }
}
