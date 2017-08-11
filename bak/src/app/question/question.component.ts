import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators }            from '@angular/forms';
import { Response } from '@angular/http';
import {Subscription} from "rxjs";
import 'rxjs/Rx';
import { QuestionService } from './question.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [QuestionService]
})
export class QuestionComponent implements OnInit {
  myForm: FormGroup;
  question: any;
  hero = {
    name: "ilandy",
    state: 123
  }
  test: number[];
  

  constructor(private questionService: QuestionService, private fb: FormBuilder) {
    
    this.creatForm();
    this.myForm.setValue({
      name: this.hero.name,
      state: "5"
    });
  }

  creatForm(){
    this.myForm = this.fb.group({
      name: [ '', Validators.required],
      state: ['']
    });
  }

  questionAsync() {
      this.questionService
      .getQuestion()
      .subscribe(data => {
        this.question = data;
        
     });
  }
  ngOnInit() {
    this.questionAsync();    
  }


}
export class Hero {
  id = 0;
  name = '';
  addresses: Address[];
}

export class Address {
  street = '';
  city   = '';
  state  = '';
  zip    = '';
}
