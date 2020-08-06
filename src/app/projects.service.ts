import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  constructor() {}
  getProject()
  {
    return [
      {"name":"TCP/IP-Multithreading-Socket-Communicating-System ","link":"https://github.com/siqizheng/TCP-IP-Multithreading-Socket-Communicating-System"},
      {"name":"Movie Rental Store - Inventory Tracking and Management System ","link":"https://github.com/siqizheng/Movie_Rental_Store"},
      {"name":"“Behavioral and Mental Health Text Mining” Project","link":""},
      {"name":"Software Development Process, Software Modeling Techniques and Software Testing and Quality ","link":""}
    ];
  }
}
