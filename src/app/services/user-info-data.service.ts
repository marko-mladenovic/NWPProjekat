import { Injectable } from '@angular/core';
import { ElementModel } from '../model/ElementModel';
import { LayerModel } from '../model/LayerModel';

@Injectable({
  providedIn: 'root'
})
export class UserInfoDataService {

  layers?: Array<LayerModel>;
  middleElement?: ElementModel;
  color1?: String;
  color2?: String;
  boxPrice?: number;

  constructor() {}

  setBoxInfo(color1: String, color2: String, layers: Array<LayerModel>, middleElement: ElementModel, boxPrice: number) {
    this.layers = layers;
    this.middleElement = middleElement;
    this.color1 = color1;
    this.color2 = color2;
    this.boxPrice = boxPrice;
  }

  boxDataCheck() {
    if(this.layers && (this.middleElement?.id !== -1) && this.color1 && this.color2 && this.boxPrice) 
      return this.layers.flatMap((layer) => layer.elements).filter((element) => element.element.id === -1).length == 0;

    return false;
  }
}
