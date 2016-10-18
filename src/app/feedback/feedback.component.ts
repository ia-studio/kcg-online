import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';
import { FeedbackService }        from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: 'feedback.component.html',
  providers: [FeedbackService],
  styleUrls: ['feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbacks = {};
  
  public constructor(private titleService: Title, private feedbackService: FeedbackService) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  getFeedbacks() {
    this.feedbackService
        .getFeedback()
        .subscribe(
          feedbacks => this.feedbacks = feedbacks,
          error => this.feedbacks = {});
  }
  getNum (val){
    return Math.round(val*100)/100+"%";
  }
  ngOnInit() {
    this.getFeedbacks();
    this.setTitle('案件處理滿意度 - 高雄市政府線上即時服務平台');
  }
}
