import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';
import { FaqService }        from '../faq.service';

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
  term = "";

  public constructor(private titleService: Title, private faqService: FaqService) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getFaqs() {
    this.faqService
        .getFaqs()
        .then(faq => this.faqs = faq)
        .catch(error => this.error = error);
  }

  getCategories() {
    this.faqService
        .getCategories()
        .then(category => this.categories = category)
        .catch(error => this.error = error);
  }

  changeCategory(s: HTMLSelectElement) {
    this.selectedCategory.value = s.value;
    this.selectedCategory.text = s.options[s.selectedIndex].innerHTML;
  }

  search() {
    this.faqService
        .getFaqs(this.term, this.selectedCategory.value)
        .then(faq => this.faqs = faq)
        .catch(error => this.error = error)        
        if(this.faqs.length=0){
          this.faqs=[];
        }                          
  }

  ngOnInit() {
    this.setTitle('常見問題 FAQ - 高雄市政府線上即時服務平台');
    this.getFaqs();
    this.getCategories();
  }
}
