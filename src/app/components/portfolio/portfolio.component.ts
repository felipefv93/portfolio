import { Component} from '@angular/core';
import { ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent  {
  constructor(public _ps:ProductsService){
    
  }
}
