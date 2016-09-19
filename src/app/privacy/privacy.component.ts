import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';

@Component({
  selector: 'app-service',
  templateUrl: 'privacy.component.html',
})
export class PrivacyComponent implements OnInit {
  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle('隱私權政策保護政策 - 高雄市政府線上即時服務平台');
  }
}
