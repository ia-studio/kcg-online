import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routes';
import { FaqComponent } from './faq/faq.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProcessComponent } from './process/process.component';
import { QueryComponent } from './query/query.component';
import { ReportComponent } from './report/report.component';

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
    ReportComponent
  ],
  providers: [
    appRoutingProviders,
    Title
  ],
  entryComponents: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
