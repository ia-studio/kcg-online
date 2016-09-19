import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';

@Component({
  selector: 'app-service',
  templateUrl: 'copyright.component.html',
})
export class CopyrightComponent implements OnInit {
  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle('著作權說明 - 高雄市政府線上即時服務平台');
  }
}
