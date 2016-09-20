import { Component }          from '@angular/core';

@Component({
    selector: 'kcg-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
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
      id: 1,
      title: "如果您是用 Yahoo! 、Hinet 、PChome 等免費信箱，可以先至「垃圾信匣」找看看，有可能被誤判為垃圾信",
      content: "如果您是用 Yahoo! 、Hinet 、PChome 等免費信箱，可以先至「垃圾信匣」找看看，有可能被誤判為垃圾信。"
    },{
      id: 2,
      title: "如果您是用 Yahoo! 、Hinet 、PChome 等免費信箱，可以先至「垃圾信匣」找看看，有可能被誤判為垃圾信",
      content: "如果您是用 Yahoo! 、Hinet 、PChome 等免費信箱，可以先至「垃圾信匣」找看看，有可能被誤判為垃圾信。"
    },{
      id: 3,
      title: "如果您是用 Yahoo! 、Hinet 、PChome 等免費信箱，可以先至「垃圾信匣」找看看，有可能被誤判為垃圾信",
      content: "如果您是用 Yahoo! 、Hinet 、PChome 等免費信箱，可以先至「垃圾信匣」找看看，有可能被誤判為垃圾信。"
    },{
      id: 4,
      title: "如果您是用 Yahoo! 、Hinet 、PChome 等免費信箱，可以先至「垃圾信匣」找看看，有可能被誤判為垃圾信",
      content: "如果您是用 Yahoo! 、Hinet 、PChome 等免費信箱，可以先至「垃圾信匣」找看看，有可能被誤判為垃圾信。"
    }];

}
