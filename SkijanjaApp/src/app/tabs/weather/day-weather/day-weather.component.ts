import { Component, Input, OnInit } from '@angular/core';
import { WeatherList } from 'src/app/models/weather.model';

@Component({
  selector: 'app-day-weather',
  templateUrl: './day-weather.component.html',
  styleUrls: ['./day-weather.component.css']
})
export class DayWeatherComponent implements OnInit {

  @Input() weather: WeatherList = new WeatherList();

  constructor() { }

  ngOnInit(): void {
  }

}
