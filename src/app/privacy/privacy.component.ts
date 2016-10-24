import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  templateUrl: 'privacy.component.html',
  styles: [`
  @media screen and (min-width:768px){
       .fixed-list {
          position: fixed;
          z-index: 3;
          top: 20px;
        }
      }
  `]
})
export class PrivacyComponent implements OnInit {

  public scrollPosition : number;

  fixedList:boolean;
  scrollHeight: number;

  public constructor(private titleService: Title) {

   }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  scrollTo (targetAnchor:string){
      let offset = document.getElementById(targetAnchor).offsetTop+200;
      window.scrollTo(0,offset);
  }

  onScroll(event: Document) {
    this.scrollHeight = event.body.scrollTop;
    
  }
  getLableActive (height){
    var offset1 = document.getElementById('privacy').offsetTop,
        offset2 = document.getElementById('security').offsetTop,
        offset3 = document.getElementById('copyright').offsetTop,
        whichLable = 'privacy';
    
    if (this.scrollHeight >= 0 && this.scrollHeight < offset2){
          return 'privacy';
      } else if(this.scrollHeight > offset2 && this.scrollHeight < offset3) {
          return 'security';
      } else if(this.scrollHeight > offset3) {
          return 'copyright';
      }
    
  }

  ngOnInit() {
    this.setTitle('隱私權政策保護政策 - 高雄市政府線上即時服務平台');
  }
}
