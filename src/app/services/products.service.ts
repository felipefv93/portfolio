import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductsService {

  products:any[] =[]; 
  loading_products:boolean = true;

  constructor(private http:Http) {
      this.load_products();
   }

   public load_products(){
     if(this.products.length===0){
       this.http.get('https://paginaweb-b7a9c.firebaseio.com/products_idx.json')
        .subscribe(data=>{
          // console.log(data.json());
          this.loading_products = false;
          this.products = data.json();
        });
     }
   }

}
