import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  constructor() {}
  getProject()
  {
    return [
      {"name":"Siq Zheng's profile","type":"Full Stack","link":"", "language":"TypeScript, HTML, CSS, Angular, webpack, npm, Node.js, VScode"},
      {"name":"TCP/IP-Multithreading-Socket-Communicating-System ","type":"Full Stack","link":"https://github.com/siqizheng/TCP-IP-Multithreading-Socket-Communicating-System", "language":"C++, Visual Studio, Valgrind, bash"},
      {"name":"Movie Rental Store - Inventory Tracking and Management System ","type":"Full Stack","link":"https://github.com/siqizheng/Movie_Rental_Store","language":"C++, Visual Studio, Valgrind, bash"},
      {"name":"“Behavioral and Mental Health Text Mining” Project","type":"Data Analysis","link":"","language":"Python"},
      {"name":"Software Development Process, Software Modeling Techniques and Software Testing and Quality ","type":"Agile process","link":"","language":""}
    ];
  }
}
