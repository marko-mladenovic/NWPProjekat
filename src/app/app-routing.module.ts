import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent, BuilderComponent, UserInfoComponent, GalleryComponent } from "./pages"
import { UserInfoGuard } from './guards';

const routes: Routes = [
  { path: 'builder', component: BuilderComponent },
  { path: 'userinfo', component: UserInfoComponent, canActivate: [UserInfoGuard] },
  { path: 'gallery', component: GalleryComponent },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
