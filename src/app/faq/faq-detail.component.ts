import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Reply }        from '../services/faq.service';

@Component({
  selector: 'app-faq-detail',
  templateUrl: 'faq-detail.component.html',
})
export class FaqDetailComponent {
  @Input()
  reply:Reply;

  @Output()
  closeReply = new EventEmitter();

  public constructor() { }

  goBack() {
    this.closeReply.emit();
  }
}
