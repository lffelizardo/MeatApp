import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component'
import { MenuComponent } from './restaurant-detail/menu/menu.component'
import { ReviewComponent } from './restaurant-detail/review/review.component'
import { OrderSummaryComponent } from './order-summary/order-summary.component'

export const ROUTES : Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: 'restaurants', component: RestaurantesComponent },
    {path: 'order', loadChildren: './order/order.module#OrderModule'},
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'review', component: ReviewComponent}
            
        ] }
]