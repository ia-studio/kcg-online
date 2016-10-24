import { Component }          from '@angular/core';
import { NewsService }       from './services/news.service';

@Component({
    selector: 'kcg-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [NewsService]
})
export class AppComponent {
    showNews = true;
    showSlideMenu = false;
    showPhoneButton = true;
    newsCount = 0;
    news = [];

    public constructor(private newsService: NewsService) {
      setInterval(() => { this.newsCount++ }, 3000)
    }

    showNowNews (idx:number){
      return (this.newsCount % this.news.length) === idx ;
    }

    getNews() {
    this.newsService
        .getNews()
        .subscribe(
          news => this.news = news,
          error => this.news = []);
    }

    ngOnInit() {
    this.getNews();
  }

}
