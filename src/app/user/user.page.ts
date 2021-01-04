import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router';
import{ DataService } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
    user:User;

  constructor(private route: ActivatedRoute,private dataService:DataService) { }

  ngOnInit() {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.user = this.dataService.getUser(id);

  }

}
class User{
    id:number;
    name:string;
    email:string;
}
