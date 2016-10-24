import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
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
  sub: any;
  whichLable = 'privacy';

  public constructor(private route: ActivatedRoute, private titleService: Title) {

   }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  scrollTo (targetAnchor:string){
      let offset = document.getElementById(targetAnchor).offsetTop+300;
      window.scrollTo(0,offset);
  }

  onScroll(event: Document) {
    this.scrollHeight = event.body.scrollTop;
  }
  getLableActive (lableName:string){
    var offset1 = document.getElementById('privacy').offsetTop+280,
        offset2 = document.getElementById('security').offsetTop+280,
        offset3 = document.getElementById('copyright').offsetTop+280;

    if (this.scrollHeight >= 0 && this.scrollHeight < offset2){
          this.whichLable = 'privacy';
      } else if(this.scrollHeight >= offset2 && this.scrollHeight < offset3) {
          this.whichLable = 'security';
      } else if(this.scrollHeight >= offset3) {
          this.whichLable = 'copyright';
      }
      
    return lableName === this.whichLable;
    
  }

  ngOnInit() {

    this.setTitle('隱私權政策保護政策 - 高雄市政府線上即時服務平台');
    this.sub = this.route.params.subscribe(params => {
        if (params['lable'] !== undefined ) {
          this.scrollTo(params['lable']);
        }
      });
    
    }
}
