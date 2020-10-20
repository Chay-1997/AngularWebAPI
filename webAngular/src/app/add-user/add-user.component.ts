import { Component, OnInit } from '@angular/core';
import{PersonService} from '../person.service';
import{Person} from '../person'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

 // person:Person=new Person("","");

  constructor(private service:PersonService) { }
message:any;
  ngOnInit(): void {
  }

public Add()
{
  // console.log(this.person.PersonName, this.person.PersonCity);
  // let res=this.service.createPerson(this.person);
  // res.subscribe(data=>this.message=data);
}


}
