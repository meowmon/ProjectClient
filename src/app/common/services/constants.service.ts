import { Injectable } from '@angular/core';
import {user} from '../config/user.js';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  user: user;
  constructor() { }

  setUser(inputUser){
    this.user = inputUser
  }
}
