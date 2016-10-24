import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Title }             from '@angular/platform-browser';
import { FaqService }        from '../services/faq.service';

@Component({
  selector: 'app-faq-detail',
  templateUrl: 'faq-detail.component.html',
  providers: [FaqService]
})
export class FaqDetailComponent implements OnInit {
  error: any;
  sub: any;
  navigated = false;
  faqReply:any;

  public constructor(private route: ActivatedRoute, private titleService: Title, private faqService: FaqService) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getReply(organNo: string, seqNo: number) {
    this.faqService
        .getReply(organNo, seqNo)
        .subscribe(
          reply => this.faqReply = reply,
          error => this.error = <any>error);
  }

  goBack() {
     window.history.go(-1);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['organNo'] !== undefined && params['seqNo'] !== undefined) {
        this.navigated = true;
        this.getReply(params['organNo'], params['seqNo']);
      }
    });
    this.setTitle('常見問題 FAQ - 高雄市政府線上即時服務平台');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
