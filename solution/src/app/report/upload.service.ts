/**
 * Created by mattyyzac on 2016/10/13.
 */
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UploadService {
  constructor (private _http: Http) {}
  public uploadStatus: number;

  public sendFileRequest (url: string, files: File[]): Observable<any> {
    return Observable.create(observer => {
      let formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();

      for (let i = 0; i < files.length; i++) {
        formData.append("uploads[]", files[i], files[i].name);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(JSON.parse(xhr.response));
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };

      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }



  public postData(formData: string): Observable<any> {
    //ref: https://scotch.io/tutorials/angular-2-http-requests-with-observables
    //ref: https://developer.mozilla.org/zh-TW/docs/HTTP/Access_control_CORS
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers }); // Create a request option

    // what the fuck!!!
    //let formData = `Case_Token=bxcvbxcvb-1&Subj_Content=111&Sugg_Email=1%401.1&Sugg_Name=abc&Sugg_Telno=978&Sugg_Sex=1&Sugg_Addr1=6400000000&Sugg_Addr2=6400300000&Sugg_Addr4=tr+tr&Subj_Item=01&Subj_Subitem=01&Subj_District=6400600000&Subj_Security=1&Subj_FileCount=0`;
    //formData = `Case_Token=thGwBgmBFngb&Atth_FileNames=&Subj_Content=rtdh&Subj_District=6400100000&Subj_FileCount=0&Subj_Item=01&Subj_Security=1&Subj_Subitem=02&Sugg_Addr1=6400000000&Sugg_Addr2=6400800000&Sugg_Addr3=6400800001&Sugg_Addr4=ghjngfhj&Sugg_Email=ryjh@dfgh.fgh&Sugg_Name=fyu&Sugg_Sex=2&Sugg_Telno=yumyukmruyu`;

    const url = `http://soweb.kcg.gov.tw/webapi/api/Case/`;
    return this._http.post(url, formData, options) // ...using post request
      .map((resp: Response) => resp.json())
        /*{
        //this.uploadStatus = resp.status;
        // return this.retrieveData(resp);
        })*/
       // ...and calling .json() on the response to return data
      //.catch((error: any) => Observable.throw(error.json() || '目前系統暫停服務')); //...errors if
  }

  private retrieveData(data: Response): boolean {
    let message = data["_body"];
    //console.log(message);
    if (data.status == 200 && data.text().indexOf('登錄個案上傳成功') >= 0){
      return true;
    } else {
      return false;
    }
  }

}
