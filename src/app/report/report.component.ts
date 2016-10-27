import { Component, OnInit, Output }  from '@angular/core';
import { Title }              from '@angular/platform-browser';
import { CaseType }           from '../case';
import { ReportService }      from '../services/report.service';

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
export class ReportComponent implements OnInit {
  caseTypes: CaseType[];
  error: any;

  public constructor(private titleService: Title, private reportService: ReportService) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getTypes() {
    this.reportService
        .getTypes()
        .subscribe(types => this.caseTypes = types);
  }
  @Output()
  showPhone = true;

  ngOnInit() {
    this.setTitle('市長信箱 - 高雄市政府線上即時服務平台');
    this.getTypes();
    
  }
}
