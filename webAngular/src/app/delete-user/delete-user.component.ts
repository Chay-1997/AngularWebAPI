import { Component, OnInit } from '@angular/core';
import{PersonService} from '../person.service';
@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  
  constructor(private service:PersonService) { }

  ngOnInit(): void {
  }

  id:any=0;
public delete(){
  
  console.log(this.id);
  let res=this.service.deletePersonById(this.id);
}

}
