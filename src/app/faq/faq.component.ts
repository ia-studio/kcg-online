import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';
import { FaqService }        from '../faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: 'faq.component.html',
  providers: [FaqService]
})
export class FaqComponent implements OnInit {
  isSearch = false;
  faqs = [];
  categories = [];
  selectedCategory = {
    value: '',
    text: '請選擇處理單位'
  };

  public constructor(private titleService: Title, private faqService: FaqService) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getFaqs() {
    this.faqService
        .getFaqs()
        .then(faq => this.faqs = faq);
  }

  getCategories() {
    this.faqService
        .getCategories()
        .then(category => this.categories = category);
  }

  changeCategory(s: HTMLSelectElement){
    this.selectedCategory.value = s.value;
    this.selectedCategory.text = s.options[s.selectedIndex].innerHTML;
  }

  ngOnInit() {
    this.setTitle('常見問題 FAQ - 高雄市政府線上即時服務平台');
    this.getFaqs();
    this.getCategories();
  }
}
