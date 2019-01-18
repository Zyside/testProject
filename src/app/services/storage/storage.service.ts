import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setUsersInLocalStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }
  getUsersFromLocalStorage() {
    console.log('getUsersFromLocalStorage' , JSON.parse(localStorage.getItem('users')));
    return JSON.parse(localStorage.getItem('users'));
  }
}
