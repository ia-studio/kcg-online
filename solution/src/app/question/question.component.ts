import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Subscription, Observable } from "rxjs";
import { Poll, QusTitle, QNA, QNATopic, AnwserPoll, FillItem, ReplyItems} from "./question";
import { QuestionService } from './question.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  providers: [QuestionService]
})
export class QuestionComponent implements OnInit {
  poll: Poll;
  qusTitle: QusTitle;
  question: QNATopic[];
  answer: AnwserPoll;
  BeSelect: any; // for debug

  constructor(private questionService: QuestionService) {
    this.answer = {
      VersionNo: '',
      AppealerID: '',
      FillItems: []
    }
  }

  setSelect(objs:QNA, ReplyLV: string, idx: number, type: string){
    if(type === 'RT' || type === 'R') {
      objs[ReplyLV].map(obj => {
        obj.BeSelected = false;
        return obj;
      });
      objs[ReplyLV][idx].BeSelected = true;
    } else if (type === 'CT' || type === 'C') {
      objs[ReplyLV][idx].BeSelected = !objs[ReplyLV][idx].BeSelected;
    }
    // console.log(obj[ReplyLV][idx]);
  }

  setCommnet(elm:HTMLInputElement, ReplyLV: string, obj:ReplyItems, idx: number){
    let comment = elm.value;
    obj[ReplyLV][idx].OptionComment = comment;
    console.log(obj[ReplyLV][idx]);
  }


  questionAsync() {
      this.questionService
      .getQuestion()
      .subscribe(data => {
        this.poll = data;
        this.qusTitle = data.PollVersion[0];
        this.question = data.Topics;
     });
  }
  pushItem (arrName:ReplyItems){

    if(arrName.BeSelected){
      this.answer.FillItems.push(
        {
          ReplyLevel: arrName.ReplyLevel,
          ReplyID: arrName.ReplyID,
          ReplyContent: arrName.OptionComment? arrName.OptionComment: ''
        }
      );
      this.BeSelect.push(arrName) //for debug

    }
  }
  getAns(){
    this.BeSelect = []; // for debug
    this.answer.AppealerID = this.qusTitle.AppealerID;
    this.answer.VersionNo = this.qusTitle.VersionNo;
    this.answer.FillItems = [];
    this.question.forEach((arr,idx1)=>{

      arr.QnR.forEach((arrQA, idx2)=>{

        arrQA.ReplyItems.forEach((arrReplayLV1) => {

          //console.log(arrReplayLV1)
          // 判斷是否被選中
          this.pushItem(arrReplayLV1);

          // 判斷第一層是否還有問題
          if(arrReplayLV1.ItemOptions){
           arrReplayLV1.ItemOptions.forEach((arrReplayLV2)=>{
            // console.log(arrReplayLV2);
            // 判斷是否被選中
            this.pushItem(arrReplayLV2);

            // 判斷第二層是否還有問題
            if(arrReplayLV2.ItemOptions){
              arrReplayLV2.ItemOptions.forEach((arrReplayLV3)=>{
              this.pushItem(arrReplayLV3);
            })}
           });
          }
        })
      })
    })
    // console.log(this.BeSelect) for debug
    console.log(this.answer)
  }

  onSubmitClick (){

  }
  getTextFeild (InputType: string){
    if ( InputType == "RT") {
        return true;
    } else if ( InputType == "CT"){
        return true;
    } else if (InputType == "T"){
        return true;
    }else {
      // console.log(InputType);
    }
  }
  getInputType(InputType: string) {
    let type;
    let sliceResult = InputType[0];

    if ( sliceResult == "R") {
        return 'radio';
    } else if ( sliceResult == "C"){
        return 'checkbox';
    } else {
        return "hidden";
      // console.log(sliceResult);
    }
  }


  ngOnInit() {
    this.questionAsync();
  }


}
