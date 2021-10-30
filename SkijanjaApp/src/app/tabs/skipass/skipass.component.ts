import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/models/reservation.model';
import { SkipassList } from 'src/app/models/skipass.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-skipass',
  templateUrl: './skipass.component.html',
  styleUrls: ['./skipass.component.css']
})
export class SkipassComponent implements OnInit {

  skipass: SkipassList = new SkipassList();
  reservation: Reservation = new Reservation();
  id: number = 0;

  constructor(private service: ServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.getSkipass();
    });
  }

  getSkipass():void{
    this.service.getSkipass(this.id).subscribe((data: SkipassList) => {
      this.skipass = data;
    })
  }
  
  postSkipass():void{   
    if(!this.reservation.firstName || !this.reservation.lastName || !this.reservation.price) {
      alert("Invalid form values.");
      return;
    }
    this.service.postSkipass(this.reservation).subscribe(data => {
      this.reservation = new Reservation();
      window.alert("Reservation successful!");
    }, err => {
      window.alert("Error: " + err);
    });
  }

  calculatePrice():void{
    if(this.reservation.from && this.reservation.to) {
      let x = this.reservation.calculateDateDifference();
      if(x < 1 || x > 7) {
        console.log("Out of scope");
        this.reservation.price = 0;
        return;
      }
      for(let i = 0; i< this.skipass.results.length; i++){
        if(x==this.skipass.results[i].duration){
          this.reservation.price = this.skipass.results[i].price;
          break;
        }
      }
    }
  }

}
