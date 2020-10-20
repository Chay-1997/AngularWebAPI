import { Component, OnInit } from '@angular/core';
import{PersonService} from '../person.service';
import{Person} from '../person'

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  constructor(private service:PersonService) { }

  persons:any;
  ngOnInit(): void {
    var res=this.service.getAllPeoples();
  res.subscribe(data=>this.persons=data);
  }
  



}
