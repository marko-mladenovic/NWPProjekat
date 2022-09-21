import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';

import { HomeComponent, BuilderComponent } from './pages';

import { NavbarComponent, DefaultLayout } from "./components"
import { BoxElementDataService, UserInfoDataService } from './services';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { OrderMessageDialogComponent } from './components/order-message-dialog/order-message-dialog.component';
import { GalleryComponent } from './pages/gallery/gallery.component';


const MatModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatCardModule,
  MatSelectModule,
  MatExpansionModule,
  MatListModule,
  MatDividerModule,
  MatInputModule,
  MatCheckboxModule,
  MatDialogModule
];

const Providers = [
  BoxElementDataService, UserInfoDataService
];

const Pages = [HomeComponent, BuilderComponent];

const Components = [NavbarComponent, DefaultLayout];


@NgModule({
  declarations: [
    AppComponent,
    ...Components,
    ...Pages,
    UserInfoComponent,
    OrderMessageDialogComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ...MatModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
