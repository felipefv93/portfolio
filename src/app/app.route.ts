import { RouterModule, Routes } from '@angular/router';

import {
    AboutComponent,
    PortfolioComponent,
    PortfolioItemComponent,
    SearchComponent
} from './components/index.paginas';

const app_routes: Routes = [
    { path: 'home', component: PortfolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portfolio-item/:id', component: PortfolioItemComponent },
    { path: 'search/:word', component: SearchComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);