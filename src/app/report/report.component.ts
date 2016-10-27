import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CaseType } from '../case';
import { ReportService } from '../services/report.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-report',
  templateUrl: 'report.component.html',
  providers: [ReportService],
  styles: [`
    @media screen and (max-width: 480px){
      #call.visible-report {
          display : block !important;
      }
    }`]
})
export class ReportComponent implements OnInit, OnDestroy {
  caseTypes: CaseType[];
  error: any;

  public constructor(private titleService: Title, private reportService: ReportService, private globalService: GlobalService) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getTypes() {
    this.reportService
      .getTypes()
      .subscribe(types => this.caseTypes = types);
  }

  ngOnInit() {
    this.setTitle('市長信箱 - 高雄市政府線上即時服務平台');
    this.getTypes();
    this.globalService.showPhoneButton = true;
    window.scrollTo(0, 0);
  }

  ngOnDestroy() {
    this.globalService.showPhoneButton = false;
  }
}
