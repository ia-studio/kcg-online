import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Title }             from '@angular/platform-browser';
import { FeedbackService }   from './feedback.service';
import * as moment           from 'moment';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  providers: [FeedbackService],
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbacks = {};
  feedbackType = 'point';
  sub: any;
  startDate: string;
  endDate: string;
  errorMsg: string;

  public constructor(private route: ActivatedRoute, private titleService: Title, private feedbackService: FeedbackService) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getPointFeedbacks() {
    this.feedbackType = 'point';
    this.feedbackService
        .getPointFeedback(moment(this.startDate).format('YYYYMMDD'), moment(this.endDate).format('YYYYMMDD'))
        .subscribe(
          feedbacks => this.feedbacks = feedbacks,
          error => { this.feedbacks = {}, this.errorMsg = error });
  }

  getCountFeedbacks() {
    this.feedbackType = 'count';
    this.feedbackService
        .getCountFeedback(moment(this.startDate).format('YYYYMMDD'), moment(this.endDate).format('YYYYMMDD'))
        .subscribe(
          feedbacks => this.feedbacks = feedbacks,
          error => { this.feedbacks = {}, this.errorMsg = error });
  }

  getEffectiveFeedbacks() {
    this.feedbackType = 'effective';
    this.feedbackService
        .getEffectiveFeedback(moment(this.startDate).format('YYYYMMDD'), moment(this.endDate).format('YYYYMMDD'))
        .subscribe(
          feedbacks => this.feedbacks = feedbacks,
          error => { this.feedbacks = {}, this.errorMsg = error });
  }

  getFeedback(type: string){
    switch (type){
      case 'effective':
        this.getEffectiveFeedbacks();
      break;
      case 'count':
        this.getCountFeedbacks();
      break;
      case 'point':
      default:
        this.getPointFeedbacks();
      break;
    }
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
    this.startDate =  moment().add(-1, 'M').startOf('month').format('YYYY-MM-DD');
    this.endDate =  moment().add(-1, 'M').endOf('month').format('YYYY-MM-DD');
    this.sub = this.route.params.subscribe(params => {
      if (params['type'] !== undefined) {
        this.getFeedback(params['type']);
        window.scrollTo(0, 0);
      }
    });
    this.setTitle('案件處理滿意度 - 高雄市政府線上即時服務平台');
  }
}
