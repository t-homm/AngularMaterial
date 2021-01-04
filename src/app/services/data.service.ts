import { Injectable } from '@angular/core';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    users:User[];

    constructor() {
        this.users = [
        { id:1, name: 'Yamada', email: 'yamada@exsample.com' },
        { id:2, name: 'Suzuki', email: 'suzuki@exsample.com' },
        { id:3, name: 'Tanaka', email: 'tanaka@exsample.com' },
        ];
    }

    getUsers(){
        return this.users;
    }
    getUser(id: number): User {
        return this.users.find(user => user.id === id);
    }
  }

  class User {
    id:number;
    name:string;
    email:string
  }
