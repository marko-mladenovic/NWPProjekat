import { AfterViewChecked, AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { LayerModel } from 'src/app/model/LayerModel';
import { ElementModel } from 'src/app/model/ElementModel';
import { BoxElementDataService, UserInfoDataService } from 'src/app/services/';
import { Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent implements OnInit {

  selected: string;
  colors: Array<String>;
  boxElements: Array<ElementModel>;
  middleElements: Array<ElementModel>;

  currentLayer: number;
  currentPosition: string;
  middleCurrent: boolean;
  @ViewChildren('elements') selectionLists: QueryList<MatSelectionList> | undefined;

  layers: Array<LayerModel>;
  middleElement: ElementModel;
  layersCheck: boolean;
  color1?: String;
  color2?: String;
  currentPrice: number;

  constructor(private dService: BoxElementDataService, private userInfoDataService: UserInfoDataService, private router: Router, private dialog: Dialog) {
    this.selected = "1";
    this.layersCheck = false;
    this.layers = [this.createLayer()];
    this.middleElement = this.createElement();
    this.colors = dService.getColors();
    this.boxElements = dService.getBoxElements();
    this.middleElements = dService.getMiddleElements();
    this.currentPrice = 0;

    this.currentLayer = 0;
    this.currentPosition = '';
    this.middleCurrent = false;
  }

  ngOnInit(): void { }

  middlePositionSelected() {
    this.middleCurrent = true;
    this.currentLayer = 0;
    this.currentPosition = '';
    this.selectionLists?.forEach((child) => child.deselectAll());
  }

  middleSelected(elementIndex: number) {
    this.middleElement = this.middleElements[elementIndex];


    this.layersCheck = this.layers.flatMap((layer) => layer.elements).filter((element) => element.element.id === -1).length == 0 && this.middleElement.id !== -1;
    this.currentPrice = this.layers.flatMap((layer) => layer.elements).reduce((acc, element) => acc + element.element.priceRSD, 0) + this.middleElement.priceRSD;
  }

  elementSelected(elementIndex: number) {
    this.layers[this.currentLayer - 1].elements = this.layers[this.currentLayer - 1].elements.map((element) => {
      if(element.position == this.currentPosition)
        return {position: element.position, element: this.boxElements[elementIndex]}
      
      return element;
    });

    this.layersCheck = this.layers.flatMap((layer) => layer.elements).filter((element) => element.element.id === -1).length == 0 && this.middleElement.id !== -1;
    this.currentPrice = this.layers.flatMap((layer) => layer.elements).reduce((acc, element) => acc + element.element.priceRSD, 0) + this.middleElement.priceRSD;
  }

  // When another accordion is opened, or the current one closed, the element currently being changed no longer exist, 
  // so the elements of all layers have to get deselected.
  accordionChanged() {
    this.currentLayer = 0;
    this.currentPosition = '';
    this.middleCurrent = false;
    this.selectionLists?.forEach((child) => child.deselectAll());
  }

  // Puts the element currently selected for changing in currentlyChangingLayer/currentlyChangingPosition.
  elementPositionSelected(i: number, position: string) {
    this.currentLayer = i + 1;
    this.currentPosition = position;
  }

  // Creation of the empty element list for accordions.
  createLayer() {
    return {
      elements: [
        {
          position: 'Gore',
          element: this.createElement()
        },
        {
          position: 'Dole',
          element: this.createElement()
        },
        {
          position: 'Levo',
          element: this.createElement()
        },
        {
          position: 'Desno',
          element: this.createElement()
        }
      ]
    }
  }

  createElement() {
    return {
      id: -1,
      name: '',
      imageUrl: '',
      priceRSD: 0
    }
  }

  makeLayers() {
    var difference = this.layers.length - parseInt(this.selected);
    if (difference > 0)
      this.layers.splice(this.layers.length - difference, difference);
    else if (difference == -1) 
      this.layers.splice(2, 0, this.createLayer());
    else if (difference == -2)
      this.layers.splice(1, 0, this.createLayer(), this.createLayer());

      this.layersCheck = this.layers.flatMap((layer) => layer.elements).filter((element) => element.element.id === -1).length == 0 && this.middleElement.id !== -1;
      this.currentPrice = this.layers.flatMap((layer) => layer.elements).reduce((acc, element) => acc + element.element.priceRSD, 0) + this.middleElement.priceRSD;
  }

  continue() {
    if(this.color1 && this.color2) {
      this.userInfoDataService.setBoxInfo(this.color1, this.color2, this.layers, this.middleElement, this.currentPrice);
      this.router.navigate(['userinfo']);
    }
  }
}