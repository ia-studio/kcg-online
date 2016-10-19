import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Title }             from '@angular/platform-browser';
import { NewsService }       from '../services/news.service';

@Component({
  selector: 'app-service',
  templateUrl: 'news.component.html',
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  
  news = [];
  newsDetail = {};
  sub: any;
  public constructor(private route: ActivatedRoute, private titleService: Title, private newsService: NewsService) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  
  getNews() {
    this.newsService
        .getNews()
        .subscribe(
          news => this.news = news,
          error => this.news = []);
  }
  getNewsById (id:string){
    this.newsService
        .getNewsById(id)
        .subscribe(
          news => this.newsDetail = news,
          error => this.newsDetail = {});
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined ) {
        this.getNewsById(params['id']);
      }
    });
    this.getNews();
    // this.getNewsById(this.sub);
    this.setTitle('最新訊息 - 高雄市政府線上即時服務平台');
  }
}
