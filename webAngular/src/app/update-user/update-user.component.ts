import { Component, OnInit } from '@angular/core';
import{PersonService} from '../person.service';
import{Person} from '../person'

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  person:Person=new Person("","","");

  constructor(private service:PersonService) { }
  message:any;
  ngOnInit(): void {
  }

  public update()
  {
    let res=this.service.updatePerson(this.person);
    res.subscribe(data=>this.message=data);
  }


}
