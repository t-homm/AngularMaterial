import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    users:User[];

    constructor(private dataService:DataService) {}

        displayedColumns: string[] = ['id', 'name', 'email'];
        dataSource = this.dataService.getUsers();
        
    }

class User {
    id:number;
    name:string;
    email:string
}
