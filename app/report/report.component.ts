import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Title }             from '@angular/platform-browser';

@Component({
  selector: 'app-report',
  templateUrl: 'app/report/report.component.html',
})
export class ReportComponent implements OnInit {
  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle('市長信箱 - 高雄市政府線上即時服務平台');
  }
}
