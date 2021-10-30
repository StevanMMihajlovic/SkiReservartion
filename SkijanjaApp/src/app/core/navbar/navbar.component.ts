import { Component, OnInit } from '@angular/core';
import { SkiresortList } from 'src/app/models/skiresorts-list.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  skiresorts: SkiresortList = new SkiresortList();

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getSkieresorts();
  }

  getSkieresorts():void{
    this.service.getSkieresorts().subscribe((data: SkiresortList) => {
      this.skiresorts = data;
    })
  }



}
