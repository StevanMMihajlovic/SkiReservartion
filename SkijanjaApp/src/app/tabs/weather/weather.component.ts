import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherList } from 'src/app/models/weather.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: WeatherList = new WeatherList();
  id: number = 0;

  constructor(private service: ServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.getWeather();
    });
  }

  getWeather():void{
    this.service.getWeather(this.id).subscribe((data: WeatherList) => {
      this.weather = data;
    })
  }

}
