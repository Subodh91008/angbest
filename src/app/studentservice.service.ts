import { Student } from './student';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  baseurl = "https://microservic1e.herokuapp.com/student/data";
  //baseurl = "http://localhost:9898/student/data";
   public name="subodh";
  constructor(private http: HttpClient) { }

  public getallstudentdata(): Observable<Student[]>{
   return this.http.get<Student[]>(`${this.baseurl}/getall`);

  }
  public deleteOnerecord(id: number): Observable<any>{
    return this.http.delete(`${this.baseurl}/remove/${id}`,{responseType : 'text' });
  }
  public savestudentinfo(s:Student):Observable<any>{
   return this.http.post(`${this.baseurl}/save`, s, {responseType:'text'});
  }
}
