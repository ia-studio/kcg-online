import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';
import { FaqService }        from '../services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: 'faq.component.html',
  providers: [FaqService]
})
export class FaqComponent implements OnInit {
  error: any;
  isSearch = false;
  faqs = [];
  categories = [];
  selectedCategory = {
    value: '',
    text: '請選擇處理單位'
  };
  term = '';

  public constructor(private titleService: Title, private faqService: FaqService) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getFaqs(q = '', kind = '') {
    this.faqService
        .getFaqs(q, kind)
        .subscribe(
          faq => this.faqs = faq,
          error => this.faqs = []);
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
  }

  ngOnInit() {
    this.setTitle('常見問題 FAQ - 高雄市政府線上即時服務平台');
    this.getFaqs();
    this.getCategories();
  }
}
