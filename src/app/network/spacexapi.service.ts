import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Mission } from "../model/mission";

export class SpacexapiService{
    url = "https://api.spacexdata.com/v3/launches"
    constructor(private http: HttpClient){
        this.getSpacexes()
    }


    getSpacexes(){
        return this.http.get(this.url).subscribe((response)=>{
            alert(JSON.stringify(response))
        })
    }
}
