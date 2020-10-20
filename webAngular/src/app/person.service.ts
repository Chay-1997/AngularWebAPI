import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{Person} from '../app/person';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url="http://localhost:49462/api/People";

  constructor(private http:HttpClient) { }

  getAllPeoples():Observable<Person[]>{
    return this.http.get<Person[]>(this.url);
  }

  getEmployeeById(personId:string):Observable<Person>
  {
    return this.http.get<Person>(this.url+"/"+personId);


  }

  createPerson(person:Person):Observable<Person>{

    console.log("Here");
    let httpheader=new HttpHeaders()
    .set("Content-type","application/json");
    let options={
      headers:httpheader
    };

    return this.http.post<Person>(this.url,person,options);



  }



   updatePerson(person:Person):Observable<number>{

     let httpheader=new HttpHeaders()
     .set("Content-type","application/json");
     let options={
       headers:httpheader
     };

    return this.http.put<number>(this.url+"/"+person.PersonID,person,options);



   }


   deletePersonById(personID:number):Observable<number>{

    console.log(personID);
     let httpheader=new HttpHeaders()
     .set("Content-type","application/json");
     let options={
      headers:httpheader
    };
  

    return this.http.delete<number>(this.url+"/"+personID,options);


   }
}
