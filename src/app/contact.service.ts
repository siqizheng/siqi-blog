import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContact()
  {
    return  ["siqiz123@gmail.com","https://github.com/siqizheng","https://www.linkedin.com/in/siqi-zheng-73637a141"];
  }
}
