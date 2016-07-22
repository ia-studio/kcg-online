import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';

@Component({
  selector: 'app-feedback',
  templateUrl: 'app/feedback/feedback.component.html',
})
export class FeedbackComponent implements OnInit {
  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle('案件處理滿意度 - 高雄市政府線上即時服務平台');
  }
}
