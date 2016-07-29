"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        var cases = [
            {
                "Content": [{
                        "case_no1": "B",
                        "case_no2": "TB",
                        "case_no3": "0000",
                        "case_no4": 368213,
                        "subj_time": "132205",
                        "sugg_name": "張先生",
                        "addr1": "6400000000",
                        "addr2": "6401900000",
                        "addr3": "",
                        "addr4": "碧紅街50'巷11號",
                        "telno": "6220277",
                        "e_mail": "pingu8989@gmail.com",
                        "e_subject": "",
                        "subject": "高雄市岡山區碧紅街2號 已於2014.12.22檢舉該棟違建，也獲得市府回應已拆除違建部分，為何該違建卻越來越高?由2樓層的違建變成了5層樓的違建?不知市長對此拆除績效有何看法?",
                        "source_id": "0",
                        "secu_id": "2",
                        "Atth_FileNames": "1_2014_1222.JPG;2_2015_327.jpg"
                    }],
                "ProcessStatus": [{
                        "seq_no": "01",
                        "s_no": 1,
                        "proc_name": "王祈昌",
                        "proc_telno": "7453439-808",
                        "control_date": "20150407",
                        "retu_data": "親愛的市民您好：您寄給市長的電子郵件收悉，市長非常重視，經交本大隊處理，茲將查處結果敬復如下：有關台端反映本市岡山區碧紅街2號建築物屋前增建違建一案，本局業於103年11月28日以高市工違岡字第1576號處理新違章建築處分書依法處分在案，並已於103年12月2日派工前往拆除部份，其餘部份，將續依相關規定辦理。謝謝您的建議，若尚有疑慮，請隨時電洽本府工務局違建處理大隊承辦人王祈昌電話(07)7453439-808，當再詳細說明，再次感謝您對市政的關心並熱心提供建言。 \r\n敬祝您 \r\n身體健康萬事如意 \r\n高雄市政府工務局違章建築處理大隊大隊長蘇俊傑敬上 \r\n",
                        "org_no": "397110200G",
                        "organ_name": "高雄市政府工務局違章建築處理大隊",
                        "dept_no": "03",
                        "dept_name": "拆除組",
                        "item": "19",
                        "item_name": "違章建管業務",
                        "sub_item": "01",
                        "sub_itemname": "ㄧ般違建       ",
                        "Atth_FileNames": ""
                    }, {
                        "seq_no": "02",
                        "s_no": 1,
                        "proc_name": "王祈昌",
                        "proc_telno": "7453439-808",
                        "control_date": "20150414",
                        "retu_data": "親愛的市民您好：您寄給市長的電子郵件收悉，市長非常重視，經交本大隊處理，茲將查處結果敬復如下：有關台端反映本市岡山區碧紅街2號建築物屋前增建違建一案，本局業於103年11月28日以高市工違岡字第1576號處理新違章建築處分書依法處分在案，並已於103年12月2日派工前往拆除部份，其餘部份，後續於104年4月1日派工前往拆除RC樓板，尚未拆除部份，依相關規定辦理。謝謝您的建議，若尚有疑慮，請隨時電洽本府工務局違建處理大隊承辦人王祈昌電話(07)7453439-808，當再詳細說明，再次感謝您對市政的關心並熱心提供建言。 \r\n敬祝您 \r\n身體健康萬事如意 \r\n高雄市政府工務局違章建築處理大隊大隊長蘇俊傑敬上 \r\n",
                        "org_no": "397110200G",
                        "organ_name": "高雄市政府工務局違章建築處理大隊",
                        "dept_no": "03",
                        "dept_name": "拆除組",
                        "item": "19",
                        "item_name": "違章建管業務",
                        "sub_item": "01",
                        "sub_itemname": "ㄧ般違建       ",
                        "Atth_FileNames": ""
                    }]
            }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=in-memory-data.service.js.map