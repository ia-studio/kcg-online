export interface Poll {
  PollVersion: QusTitle[],
  Topics: QNATopic[]
}

export interface QusTitle {
  VersionNo: string,
  AppealerID: string,
  Title: string,
  Foreword: string
}

export interface QNATopic {
  SerialNo: string,
  TopicID: string,
  Topic: string,
  QnR: QNA[]
}

export interface QNA {
  SerialNo: string,
  TopicID: string,
  Topic: string,
  QuestionNo: string,
  Question: string,
  ReplyItems: ReplyItems[]

}
export class ReplyItems {
  BeSelected: boolean = false;
  OptionComment: string;
  ParentID: string;
  ReplyLevel: string;
  ReplyID: string;
  ReplyType: string;
  ReplyItem: string;
  ItemOptions: ReplyItems[]

}

export interface AnwserPoll {
  VersionNo: string,
  AppealerID: string,
  FillItems: FillItem[];
}
export interface FillItem {
  ReplyLevel: string,
  ReplyID: string,
  ReplyContent: any
}
