import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SkiresortList } from '../models/skiresorts-list.model';
import { Skiresort } from '../models/skiresort.model';
import { TrackList } from '../models/track.model';
import { Skipass, SkipassList } from '../models/skipass.model';
import { WeatherList } from '../models/weather.model';
import { Reservation } from '../models/reservation.model';

const baseURL = 'http://localhost:3000/api/skiresorts';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getSkieresorts(): Observable<SkiresortList> {
    return this.http.get(baseURL).pipe(map((data: any) => {
      return new SkiresortList(data);
    }))
  }

  getOne(id :number) :Observable<Skiresort>{
		return this.http.get(`${baseURL}/${id}`).pipe(map(
			data => { return new Skiresort(data);}
		));
  }

  getTracks(id: number, params?:any): Observable<TrackList> {

    let queryParams = {}

    if(params) {
      queryParams = {
        params: new HttpParams()
        .set("sort", params.sort || "")
        .set("sortDirection", params.sortDirection || "")
      }
    }

    return this.http.get(`${baseURL}/${id}/tracks`, queryParams).pipe(map((data: any) => {
      return new TrackList(data);
    }))
  }

  getWeather(id: number): Observable<WeatherList> {
    return this.http.get(`${baseURL}/${id}/weather`).pipe(map((data: any) => {
      return new WeatherList(data);
    }))
  }

  getSkipass(id: number): Observable<SkipassList> {
    return this.http.get(`${baseURL}/${id}/skipass`).pipe(map((data: any) => {
      return new SkipassList(data);
    }))
  }

  postSkipass(a :Reservation) :Observable<Reservation>{
		return this.http.post((`${baseURL}/${a._id}/skipass`), a).pipe(map(
			data => { return new Reservation(data);}
		));
  }

}
