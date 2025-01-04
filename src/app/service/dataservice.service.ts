import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
userData:any;
  constructor(private http: HttpClient) { }

  setData(data:any){
this.userData = data;
  }
  getData(){
    return this.userData
  }
  // getJsonData(){
  //   fetch("config.json")
  //   .then((res) => {
  //       if (!res.ok) {
  //           throw new Error
  //               (`HTTP error! Status: ${res.status}`);
  //       }
  //       return res;
  //   })
  //   .then((data) =>
  //       console.log(data))
  //   .catch((error) =>
  //       console.error("Unable to fetch data:", error));
  //  // return this.http.get('config.json')
  // }
}
