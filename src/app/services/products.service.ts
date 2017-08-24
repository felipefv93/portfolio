import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductsService {

  products:any[] =[]; 
  loading_products:boolean = true;
  filter_products:any[] = [];

  constructor(private http:Http) {
      this.load_products();
   }

   public load_products(){
     this.loading_products = true;

     let promise = new Promise((resolve, reject)=>{

        this.http.get('https://paginaweb-b7a9c.firebaseio.com/products_idx.json')
         .subscribe(data=>{
           // console.log(data.json());
           this.loading_products = false;
           this.products = data.json();
           resolve();
         });
        
     });
     return promise;

     
   }

   public load_product(id:string){
     return this.http.get(`https://paginaweb-b7a9c.firebaseio.com/products/${id}.json`)
   }

   public search_product(word:string){


    //  console.log("buscnado productos");
     if(this.products.length===0){
       this.load_products().then( ()=>{
          //termino la carga de productos
          this.filtrar_productos(word);
       });
     }else{
        this.filtrar_productos(word);
     }
     
   }
   private filtrar_productos(word:string){
     
    this.filter_products=[];
    
    word= word.toLowerCase();

     this.products.forEach( prod=>{
       if(prod.categoria.indexOf(word)>=0 || prod.titulo.toLowerCase().indexOf(word)>=0){
          this.filter_products.push(prod);
          // console.log(prod);
       }
      
     });
   }
}
