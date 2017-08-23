import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformationService {

  info:any = {};
  load:boolean = false;
  team:any[]= [];

  constructor(public http:Http) {
    this.load_info();
    this.load_about();
   }

   public load_info(){
    this.http.get("assets/data/info.pagina.json")
    .subscribe( data=> {
      this.load = true;
      this.info = data.json();
    });
   }

   public load_about(){
      this.http.get("https://paginaweb-b7a9c.firebaseio.com/team.json")
        .subscribe(data=>{
          // console.log(data.json());
           this.team= data.json();
        })
   }

}
