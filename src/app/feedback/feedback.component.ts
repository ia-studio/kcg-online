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
  feedbackType = 'point';
  public constructor(private titleService: Title, private feedbackService: FeedbackService) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getPointFeedbacks(type) {
    this.feedbackType = 'point';
    this.feedbackService
        .getPointFeedback()
        .subscribe(
          feedbacks => this.feedbacks = feedbacks,
          error => this.feedbacks = {});
  }

  getCountFeedbacks(type) {
    this.feedbackType = 'count';
    this.feedbackService
        .getCountFeedback()
        .subscribe(
          feedbacks => this.feedbacks = feedbacks,
          error => this.feedbacks = {});
  }

  getEffectiveFeedbacks(type) {
    this.feedbackType = 'effective';
    this.feedbackService
        .getEffectiveFeedback()
        .subscribe(
          feedbacks => this.feedbacks = feedbacks,
          error => this.feedbacks = {});
  }

  getNum (val){
    return Math.round(val*100)/100+"%";
  }
  getChartColor (idx){
    let bg : string;
    switch (idx){
      case 0: 
        bg = 'bg-green-darken'; 
      break;
      case 1: 
        bg = 'bg-green-lighten'; 
      break;
      case 2: 
        bg = 'bg-green'; 
      break;
      case 3: 
        bg = 'bg-orange-lighten'; 
      break;
      case 4: 
        bg = 'bg-orange-darken'; 
      break;
      case 5:
        bg = 'bg-orange-darken-2'; 
      break;

    }
    return bg;
    
  }
  ngOnInit() {
    this.getPointFeedbacks(this.feedbackType);
    this.setTitle('案件處理滿意度 - 高雄市政府線上即時服務平台');
  }
}
