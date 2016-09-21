import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  templateUrl: 'privacy.component.html',
  styles: [`
  @media screen and (min-width:768px){
        #anchorList.fixed-list {
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

  public constructor(private titleService: Title) {

   }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  scrollTo (targetAnchor:string){
      let offset = document.getElementById(targetAnchor).offsetTop+200;
      window.scrollTo(0,offset);
  }

  ngOnInit() {
    let anchor = document.getElementById('anchorList');
    this.setTitle('隱私權政策保護政策 - 高雄市政府線上即時服務平台');
    window.onscroll = function (){

        if ( window.scrollY > 300){
          anchor.classList.add('fixed-list');
        } else {
          anchor.classList.remove('fixed-list');
        }
      }
  }
}
