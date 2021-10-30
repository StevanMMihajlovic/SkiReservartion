import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrackList } from 'src/app/models/track.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  tracks: TrackList = new TrackList();
  id: number = 0;

  params = {
    sort: "",
    sortDirection: "acs",
  }

  constructor(private service: ServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.getTracks();
    });
  }

  getTracks():void{
    this.service.getTracks(this.id, this.params).subscribe((data: TrackList) => {
      this.tracks = data;
    })
  }

}
