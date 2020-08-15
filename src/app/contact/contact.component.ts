import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contacts;
  constructor(private service:ContactService) { }

  ngOnInit(): void {
    this.contacts =  this.service.getContact();
  }

}
