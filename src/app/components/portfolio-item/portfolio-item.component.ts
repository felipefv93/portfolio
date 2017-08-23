import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html'
})
export class PortfolioItemComponent  {

  product:any = undefined;
  cod:string = undefined;
  constructor( private route:ActivatedRoute,
               private _ps:ProductsService){
    route.params.subscribe( parameters=>{
      console.log(parameters['id']);
      _ps.load_product(parameters['id'])
        .subscribe( res=>{
          //  console.log(res.json());
          this.cod=parameters['id'];
          this.product= res.json();
          
        });
    })
  }
}
