import { ProjectsService } from './../projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects = [];
  constructor(private service:ProjectsService) {
    
  }


  ngOnInit(): void {
    this.projects = this.service.getProject();
  }

}
