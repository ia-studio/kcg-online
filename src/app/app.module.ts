import { BrowserModule }                                        from '@angular/platform-browser';
import { NgModule, ApplicationRef }                             from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule }                                          from '@angular/forms';
import { HttpModule }                                           from '@angular/http';
import { Title }                                                from '@angular/platform-browser';
import { AppComponent }                                         from './app.component';
import { routing, appRoutingProviders }                         from './app.routes';
import { FaqComponent,FaqDetailComponent }                      from './faq';
import { FeedbackComponent }                                    from './feedback/feedback.component';
import { ProcessComponent }                                     from './process/process.component';
import { QueryComponent,QueryDetailComponent }                  from './query';
import { ReportComponent,ReportDetailComponent }                from './report';
import { PrivacyComponent }                                     from './privacy/privacy.component';
import { NewsComponent }                                        from './news/news.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing
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
    PrivacyComponent,
    NewsComponent
  ],
  providers: [
    appRoutingProviders,
    Title,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  entryComponents: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
