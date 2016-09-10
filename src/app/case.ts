export class CaseType {
    id: string;
    name: string;
    subItems: SubCaseType[];
}

export class SubCaseType {
    id: string;
    name: string;
}

export class Case {
    Content: CaseContent[];
    ProcessStatus: CaseProcessStatus[];
    isMayorMail?: boolean;
    isCivilianSuggest?: boolean;
}

export class CaseContent {
    case_no1: string;
    case_no2: string;
    case_no3: string;
    case_no4: number;
    subj_time: any;
    sugg_name: string;
    addr1: any;
    addr2: any;
    addr3: any;
    addr4: any;
    telno: any;
    e_mail: any;
    e_subject: any;
    subject: string;
    source_id: any;
    secu_id: any;
    Security: string;
    Source: string;
    Atth_FileNames: Attachment[];
}

export class CaseProcessStatus {
    seq_no: string;
    s_no: number;
    proc_name: string;
    proc_telno: string;
    control_date: string;
    retu_data: string;
    org_no: string;
    organ_name: string;
    dept_no: string;
    dept_name: string;
    item: string;
    item_name: string;
    sub_item: string;
    sub_itemname: string;
    //Atth_FileNames: Attachment[];
    Atth_FileNames: string;
    undertaker: string;
    FinishDate: string;
    Reply: string;
}

export class Attachment{
  FileName: string;
  FileType: string;
  SerialNo: string;
}
