import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  templateUrl: 'faq.component.html'
})
export class FaqComponent implements OnInit {
  openSearch = false;
  selectType = '請選擇處理單位';

  callType(value:string){
    this.selectType = value;
  }

  faq = [
  {
    "SerialNo": 1,
    "CaseContent": "請問水溝不通積水，應如何處理？",
    "OrganName": "水利局",
    "ViewCount": "1624",
    "OrganNo": "397250000G",
    "SeqNo": 6
  },
  {
    "SerialNo": 2,
    "CaseContent": "進行屋後污水用戶接管施工時有無任何規定？側、後巷的障礙物是否須由住戶自行排除？",
    "OrganName": "水利局",
    "ViewCount": "1495",
    "OrganNo": "397250000G",
    "SeqNo": 2
  },
  {
    "SerialNo": 3,
    "CaseContent": "一、如何查詢污水下水道實施地區? 二、申請污水下水道用戶排水設備設置設計審查申審應附那些書表文件？",
    "OrganName": "水利局",
    "ViewCount": "1453",
    "OrganNo": "397250000G",
    "SeqNo": 1
  },
  {
    "SerialNo": 4,
    "CaseContent": "請問風車公園之風車為何不會轉及機車與攤販會進入園區 ？",
    "OrganName": "水利局",
    "ViewCount": "1393",
    "OrganNo": "397250000G",
    "SeqNo": 9
  },
  {
    "SerialNo": 5,
    "CaseContent": "請問我家廚房及廁所馬桶污水排水堵塞不通，能否派員立即疏通？",
    "OrganName": "水利局",
    "ViewCount": "1359",
    "OrganNo": "397250000G",
    "SeqNo": 12
  },
  {
    "SerialNo": 6,
    "CaseContent": "如何申辦下水道用戶排水設備承裝商?相關申請應附哪些書表文件?",
    "OrganName": "水利局",
    "ViewCount": "1340",
    "OrganNo": "397250000G",
    "SeqNo": 4
  },
  {
    "SerialNo": 7,
    "CaseContent": "請問中區污水處理廠處理後的水排放到何處？",
    "OrganName": "水利局",
    "ViewCount": "1321",
    "OrganNo": "397250000G",
    "SeqNo": 8
  },
  {
    "SerialNo": 8,
    "CaseContent": "請問工作井施工問題？",
    "OrganName": "水利局",
    "ViewCount": "1299",
    "OrganNo": "397250000G",
    "SeqNo": 7
  },
  {
    "SerialNo": 9,
    "CaseContent": "(凡那比颱風)水閘門是否有補助？",
    "OrganName": "水利局",
    "ViewCount": "1297",
    "OrganNo": "397250000G",
    "SeqNo": 5
  },
  {
    "SerialNo": 10,
    "CaseContent": "住家前污水管埋設完成後為何無法立即將路面重新封層，回復路面美觀？",
    "OrganName": "水利局",
    "ViewCount": "1291",
    "OrganNo": "397250000G",
    "SeqNo": 3
  },
  {
    "SerialNo": 11,
    "CaseContent": "請問我家門前馬路上人孔蓋受車輾過，就產生噪音，影響住家安寧，能否派員立即改善？",
    "OrganName": "水利局",
    "ViewCount": "1276",
    "OrganNo": "397250000G",
    "SeqNo": 11
  },
  {
    "SerialNo": 12,
    "CaseContent": "請問我家門前道路有水溝蓋遺失（或水溝壁損壞），相當危險，請派員修復？",
    "OrganName": "水利局",
    "ViewCount": "1228",
    "OrganNo": "397250000G",
    "SeqNo": 14
  },
  {
    "SerialNo": 13,
    "CaseContent": "請問我們家前面水溝損壞阻塞，請你們派員疏通。",
    "OrganName": "水利局",
    "ViewCount": "1181",
    "OrganNo": "397250000G",
    "SeqNo": 15
  },
  {
    "SerialNo": 14,
    "CaseContent": "何謂超限利用",
    "OrganName": "水利局",
    "ViewCount": "1161",
    "OrganNo": "397250000G",
    "SeqNo": 21
  },
  {
    "SerialNo": 15,
    "CaseContent": "免申請水土保持計畫或簡易水保申請書之種類",
    "OrganName": "水利局",
    "ViewCount": "1154",
    "OrganNo": "397250000G",
    "SeqNo": 17
  },
  {
    "SerialNo": 16,
    "CaseContent": "何謂山坡地範圍？何謂水土保持義務人？",
    "OrganName": "水利局",
    "ViewCount": "1135",
    "OrganNo": "397250000G",
    "SeqNo": 19
  },
  {
    "SerialNo": 17,
    "CaseContent": "需繳納水土保持保證金及其計算方式",
    "OrganName": "水利局",
    "ViewCount": "1128",
    "OrganNo": "397250000G",
    "SeqNo": 20
  },
  {
    "SerialNo": 18,
    "CaseContent": "請問我們家前面水溝內附掛纜線脫落會影響排水可否派員處理。",
    "OrganName": "水利局",
    "ViewCount": "1116",
    "OrganNo": "397250000G",
    "SeqNo": 13
  },
  {
    "SerialNo": 19,
    "CaseContent": "請問下水道博物館(展示館)如何申請參觀？",
    "OrganName": "水利局",
    "ViewCount": "1109",
    "OrganNo": "397250000G",
    "SeqNo": 10
  },
  {
    "SerialNo": 20,
    "CaseContent": "申請簡易水土保持申報書種類及規模(可代替水土保持計畫)",
    "OrganName": "水利局",
    "ViewCount": "1095",
    "OrganNo": "397250000G",
    "SeqNo": 16
  },
  {
    "SerialNo": 21,
    "CaseContent": "水土保持計畫或簡易水土保持申報書之申辦程序",
    "OrganName": "水利局",
    "ViewCount": "1094",
    "OrganNo": "397250000G",
    "SeqNo": 18
  }
];
faqTypes = [
  {
    "kind": "01",
    "kind_name": "工務"
  },
  {
    "kind": "02",
    "kind_name": "環保"
  },
  {
    "kind": "03",
    "kind_name": "交通"
  },
  {
    "kind": "04",
    "kind_name": "警政"
  },
  {
    "kind": "05",
    "kind_name": "民政區政"
  },
  {
    "kind": "06",
    "kind_name": "財政"
  },
  {
    "kind": "07",
    "kind_name": "教育"
  },
  {
    "kind": "08",
    "kind_name": "社會"
  },
  {
    "kind": "09",
    "kind_name": "衛生"
  },
  {
    "kind": "10",
    "kind_name": "消防"
  },
  {
    "kind": "11",
    "kind_name": "捷運"
  },
  {
    "kind": "12",
    "kind_name": "勞工"
  },
  {
    "kind": "13",
    "kind_name": "主計"
  },
  {
    "kind": "14",
    "kind_name": "經發"
  },
  {
    "kind": "15",
    "kind_name": "文化"
  },
  {
    "kind": "16",
    "kind_name": "消保"
  },
  {
    "kind": "17",
    "kind_name": "秘書處"
  },
  {
    "kind": "18",
    "kind_name": "海洋"
  },
  {
    "kind": "19",
    "kind_name": "都發"
  },
  {
    "kind": "21",
    "kind_name": "法制"
  },
  {
    "kind": "22",
    "kind_name": "兵役"
  },
  {
    "kind": "23",
    "kind_name": "地政"
  },
  {
    "kind": "24",
    "kind_name": "新聞"
  },
  {
    "kind": "25",
    "kind_name": "人事"
  },
  {
    "kind": "26",
    "kind_name": "政風"
  },
  {
    "kind": "27",
    "kind_name": "空大"
  },
  {
    "kind": "28",
    "kind_name": "研考"
  },
  {
    "kind": "29",
    "kind_name": "原委"
  },
  {
    "kind": "31",
    "kind_name": "客委"
  },
  {
    "kind": "32",
    "kind_name": "農業"
  },
  {
    "kind": "33",
    "kind_name": "水利"
  },
  {
    "kind": "34",
    "kind_name": "觀光"
  },
  {
    "kind": "99",
    "kind_name": "其他"
  }
];

  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle('常見問題 FAQ - 高雄市政府線上即時服務平台');
  }
}
