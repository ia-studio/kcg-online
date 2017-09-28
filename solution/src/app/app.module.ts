import { platformBrowserDynamic }                               from '@angular/platform-browser-dynamic';
import { BrowserModule }                                        from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA }                           from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule }                     from '@angular/forms';
import { HttpModule }                                           from '@angular/http';
import { Title }                                                from '@angular/platform-browser';

import { AppComponent }                                         from './app.component';
import { routing, appRoutingProviders }                         from './app.routes';
import { FaqComponent,FaqDetailComponent }                      from './faq';
import { FeedbackComponent }                                    from './feedback/feedback.component';
import { ProcessComponent }                                     from './process/process.component';
import { QueryComponent,QueryDetailComponent }                  from './query';
import { ReportComponent,ReportDetailComponent }                from './report';
import { TermComponent }                                        from './term/term.component';
import { NewsComponent }                                        from './news/news.component';

import { GlobalService }                                        from './shared/global.service';
import { ConfirmComponent } from './confirm/confirm.component';
import { QuestionComponent } from './question/question.component';

import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapApiKey
    })
  ],
  declarations: [
    AppComponent,
    FaqComponent,
    ProcessComponent,
    QueryComponent,
    ReportComponent,
    FeedbackComponent,
    FaqDetailComponent,
    QueryDetailComponent,
    ReportDetailComponent,
    TermComponent,
    NewsComponent,
    ConfirmComponent,
    QuestionComponent
  ],
  providers: [
    appRoutingProviders,
    Title,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    GlobalService
  ],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
