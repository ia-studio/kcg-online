import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { HeroService }        from './hero.service';

import { Title }              from '@angular/platform-browser';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService,
    ]
})
export class AppComponent {
    public constructor(private titleService: Title) { }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
    title = 'Tour of Heroes';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/