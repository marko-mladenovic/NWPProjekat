import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { OrderMessageDialogComponent } from 'src/app/components';
import { ElementModel } from 'src/app/model/ElementModel';
import { LayerModel } from 'src/app/model/LayerModel';
import { UserData } from 'src/app/model/UserData';
import { UserInfoDataService } from 'src/app/services';
declare let Email : any;

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  errMessage = '';
  userData?: UserData;
  layers?: Array<LayerModel>;
  middleElement?: ElementModel;
  color1?: String;
  color2?: String;
  boxPrice?: number;

  @ViewChild('checkbox') checkbox: MatCheckbox | undefined;
  disabled = false;

  constructor(private userInfoDataService: UserInfoDataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.layers = this.userInfoDataService.layers;
    this.middleElement = this.userInfoDataService.middleElement;
    this.color1 = this.userInfoDataService.color1;
    this.color2 = this.userInfoDataService.color2;
    this.boxPrice = this.userInfoDataService.boxPrice;
  }

  toggleButtonState() {
    this.disabled = !this.disabled;
  }
  
  sendData(userForm: any) {
    if (userForm.invalid) {
      this.errMessage = "Molimo prvo ispravite sve greške.";
      this.disabled = false;
      this.checkbox?.toggle();
    } else {
      this.userData = userForm.value.userData;

      Email.send({
        SecureToken: '6984adc7-337b-449c-bdee-fa1eb3eeaa79',
        To : 'marko.mladenovic01@outlook.com',
        From : 'marko.mladenovic01@outlook.com',
        Subject : 'Porudžbina kutije',
        Body : `
          <b>Ime i prezime: </b>${this.userData?.ime} ${this.userData?.prezime} 
          <br/> 
          <b>Email: </b>${this.userData?.email}
          <br/> 
          <b>Broj Telefona: </b>${this.userData?.brTelefona}
          <br/><br/>
          <b>Primarna boja: </b>${this.color1}
          <br/>
          <b>Sekundarna boja: </b>${this.color2}
          <br/>
          <b>Srednji Element: </b>${this.middleElement?.name} (${this.middleElement?.priceRSD} RSD)
          <br/><br/>
          ${this.stringifyBox()}
          <br/><br/>
          <b>Ukupna cena kutije: </b>${this.boxPrice} RSD
          `
        }).then(
          (message: any) => {
            this.dialog.open(OrderMessageDialogComponent);
          }
        );
    }
  }

  stringifyBox() {
    return this.layers?.map(layer => {
        return layer.elements.map(element => {
          return `${element.position}: ${element.element.name} (${element.element.priceRSD} RSD)<br/>`
        }).join('');
      }
    ).map((layer, index) => {
      return `<b>Sloj ${index + 1}:</b> <br/>${layer}`;
    }).join('<br/>');
  }
}