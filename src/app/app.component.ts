import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    selector: 'kcg-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: []
})
export class AppComponent {
    showNews = true;
    showSlideMenu = false;
    showPhoneButton = true;
    public constructor() { }
}
