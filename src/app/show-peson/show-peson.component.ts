import { PersonServicesService } from './../person-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-peson',
  templateUrl: './show-peson.component.html',
  styleUrls: ['./show-peson.component.css']
})
export class ShowPesonComponent implements OnInit {
  person=[];
  constructor(private _PersonServicesService:PersonServicesService) {
    
  }

  ngOnInit(): void {
    this._PersonServicesService.getdata().subscribe(data=>this.person=data);
  }

}
