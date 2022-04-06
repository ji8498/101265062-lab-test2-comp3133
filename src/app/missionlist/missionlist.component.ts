import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../model/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MissionlistComponent {
  constructor(private http : HttpClient){
  }
  lists: any [] = []
  url = "https://api.spacexdata.com/v3/launches"

    getSpacexes(){
        return this.http.get(this.url).subscribe((lists:any)=>{
          this.lists = lists
        })
        
    }}
