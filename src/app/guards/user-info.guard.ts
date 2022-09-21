import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoDataService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class UserInfoGuard implements CanActivate {

  constructor(private userInfoDataService: UserInfoDataService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const condition = this.userInfoDataService.boxDataCheck();

    if(!condition)
      this.router.navigate(['builder']);
  
    return condition;
  }

}