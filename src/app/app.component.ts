import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    selector: 'kcg-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: []
})
export class AppComponent {
    showNews = true;
    showSlideMenu = false;
    showPhoneButton = true;
    newsCount = 0;

    showNowNews (idx:number){
      return (this.newsCount % this.newsList.length) === idx ;
    }
    public constructor() {
      setInterval(() => { this.newsCount++ }, 3000)
    }

    newsList = [{
      title: "01如果您是用 Yahoo! 、Hinet 、PChome 等免費信箱，可以先至「垃圾信匣」找看看，有可能被誤判為垃圾信",
      content: "01如果您是用 Yahoo! 、Hinet 、PChome 等免費信箱，可以先至「垃圾信匣」找看看，有可能被誤判為垃圾信。"
    },{
      title: "02如果您是用 Yahoo! 、Hinet 、PChome 等免費信箱，可以先至「垃圾信匣」找看看，有可能被誤判為垃圾信",
      content: "02如果您是用 Yahoo! 、Hinet 、PChome 等免費信箱，可以先至「垃圾信匣」找看看，有可能被誤判為垃圾信。"
    },{
      title: "03如果您是用 Yahoo! 、Hinet 、PChome 等免費信箱，可以先至「垃圾信匣」找看看，有可能被誤判為垃圾信",
      content: "03如果您是用 Yahoo! 、Hinet 、PChome 等免費信箱，可以先至「垃圾信匣」找看看，有可能被誤判為垃圾信。"
    },{
      title: "04如果您是用 Yahoo! 、Hinet 、PChome 等免費信箱，可以先至「垃圾信匣」找看看，有可能被誤判為垃圾信",
      content: "04如果您是用 Yahoo! 、Hinet 、PChome 等免費信箱，可以先至「垃圾信匣」找看看，有可能被誤判為垃圾信。"
    }];

}
