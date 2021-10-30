import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skiresort } from '../models/skiresort.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  id: number = 0;
  skiresort: Skiresort = new Skiresort();

  constructor(private service :ServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.getOne();
    });
  }

  getOne():void{
    this.service.getOne(this.id).subscribe((data: Skiresort) => {
      this.skiresort = data;
    });
  }

}
