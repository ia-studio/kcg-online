import { Component, OnInit }                from '@angular/core';
import { ActivatedRoute }                   from '@angular/router';
import { Title }                            from '@angular/platform-browser';
import { FaqService }                       from './faq.service';
import { Reply, Faq, Category }             from './faq';

@Component({
  selector: 'app-faq',
  templateUrl: 'faq.component.html',
  providers: [FaqService],
  styleUrls: ['faq.component.scss']
})
export class FaqComponent implements OnInit {
  error: any;
  isSearch = false;
  faqs: Faq[] = [];
  categories: Category[] = [];
  reply: Reply;
  selectedCategory = {
    value: '',
    text: '請選擇處理單位'
  };
  term = '';
  page: number;
  pageSize = 50;
  totalPage = 0;
  sub: any;

  public constructor(private titleService: Title, private faqService: FaqService, private route: ActivatedRoute) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

   closeReply() {
    this.reply = null;
  }

  getFaqs(q = '', kind = '') {
    this.faqService
        .getFaqs(q, kind)
        .subscribe(
          faq => {
            this.faqs = faq,
            this.totalPage = Math.floor(faq.length / this.pageSize) + ((faq.length % this.pageSize === 0) ? 0 : 1)
          },
          error => this.faqs = []);
  }

  getReply(organNo: string, seqNo: number){
       this.faqService
        .getReply(organNo, seqNo)
        .subscribe(reply => { this.reply = reply, window.scrollTo(0, 0) });
  }

  getCategories() {
    this.faqService
        .getCategories()
        .subscribe(
          category => this.categories = category,
          error => this.error = error);
  }

  changeCategory(s: HTMLSelectElement) {
    this.selectedCategory.value = s.value;
    this.selectedCategory.text = s.options[s.selectedIndex].innerHTML;
  }

  search() {
    this.getFaqs(this.term, this.selectedCategory.value);
    this.page = 1;
  }

  ngOnInit() {
    this.setTitle('常見問題 FAQ - 高雄市政府線上即時服務平台');
    this.getFaqs();
    this.getCategories();
    this.sub = this.route.params.subscribe(params => {
      if (params['page'] !== undefined) {
        this.page = parseInt(params['page']);
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
