import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "./order.component";

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

    canDeactivate(orderComponent: OrderComponent, 
                  activatedRouteSnapshot:ActivatedRouteSnapshot,
                  routerState: RouterStateSnapshot): boolean{
        if(!orderComponent.isOrderCompleted()){
            return window.confirm('Deseja desistir da compra?');
        }else{
            return true;
        }
    }
}