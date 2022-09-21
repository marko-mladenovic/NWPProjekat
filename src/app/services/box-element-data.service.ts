import { Injectable } from '@angular/core';
import { ElementModel } from '../model/ElementModel';

@Injectable({
  providedIn: 'root'
})
export class BoxElementDataService {

  colors: Array<String>;
  boxElements: Array<ElementModel>;
  middleElements: Array<ElementModel>;

  constructor() { 
    this.colors = ['Crna', 'Bela', 'Siva', 'Crvena', 'Roze', 'Ljubičasta', 'Svetlo plava', 'Teget', 'Zelena', 'Maslinasta', 'Žuta', 'Srebrna', 'Zlatna'];

    this.boxElements = [
      {
        id: 1,
        name: 'Waterfall Card',
        imageUrl: "https://picsum.photos/seed/pic3su132m/1000/1000",
        priceRSD: 250
      },
      {
        id: 2,
        name: 'Twist & Pop Card',
        imageUrl: "https://picsum.photos/seed/p12icsu132m/1000/1000",
        priceRSD: 250
      },
      {
        id: 3,
        name: 'Shutter Card',
        imageUrl: "https://picsum.photos/seed/pic6su132m/1000/1000",
        priceRSD: 250
      },
      {
        id: 4,
        name: 'Slider Pop Up Card',
        imageUrl: "https://picsum.photos/seed/pic5su132m/1000/1000",
        priceRSD: 250
      },
      {
        id: 5,
        name: 'Peek-A-Boo Card',
        imageUrl: "https://picsum.photos/seed/p4icsu132m/1000/1000",
        priceRSD: 250
      },
      {
        id: 6,
        name: 'Slider Card',
        imageUrl: "https://picsum.photos/seed/pic3su132m/1000/1000",
        priceRSD: 250
      },
      {
        id: 7,
        name: 'Double Picture Slider',
        imageUrl: "https://picsum.photos/seed/pics1u132m/1000/1000",
        priceRSD: 250
      },
      {
        id: 8,
        name: 'Photo Changing Card',
        imageUrl: "https://picsum.photos/seed/pics2u132m/1000/1000",
        priceRSD: 300
      },
      {
        id: 9,
        name: 'Accordion Card',
        imageUrl: "https://picsum.photos/seed/pic53s2u132m/1000/1000",
        priceRSD: 300
      },
      {
        id: 10,
        name: 'Pop Up Cube',
        imageUrl: "https://picsum.photos/seed/pis2m/1000/1000",
        priceRSD: 350
      },
      {
        id: 11,
        name: 'Endless Card',
        imageUrl: "https://picsum.photos/seed/p1s2m/1000/1000",
        priceRSD: 200
      },
      {
        id: 12,
        name: 'Squash Card',
        imageUrl: "https://picsum.photos/seed/pi15s2m/1000/1000",
        priceRSD: 250
      },
      {
        id: 13,
        name: 'Heart Lock Card',
        imageUrl: "https://picsum.photos/seed/pi15m/1000/1000",
        priceRSD: 200
      },
      {
        id: 14,
        name: 'Flower Envelope Card',
        imageUrl: "https://picsum.photos/seed/p815m/1000/1000",
        priceRSD: 200
      },
      {
        id: 15,
        name: 'Bouquet Card',
        imageUrl: "https://picsum.photos/seed/1p815m/1000/1000",
        priceRSD: 300
      },
      {
        id: 16,
        name: 'Maze Photo Card',
        imageUrl: "https://picsum.photos/seed/1p5m/1000/1000",
        priceRSD: 150
      }
    ]
  
    this.middleElements = [
      {
        id: 1,
        name: 'Picture Box',
        imageUrl: "https://picsum.photos/seed/pi552m/1000/1000",
        priceRSD: 250
      },
      {
        id: 2,
        name: 'Teacher\'s Table',
        imageUrl: "https://picsum.photos/seed/p1u132m/1000/1000",
        priceRSD: 250
      },
      {
        id: 3,
        name: 'Cake',
        imageUrl: "https://picsum.photos/seed/pic62m/1000/1000",
        priceRSD: 250
      },
      {
        id: 4,
        name: 'Expanding Picture Card',
        imageUrl: "https://picsum.photos/seed/pic132m/1000/1000",
        priceRSD: 250
      },
      {
        id: 5,
        name: 'Pop Up Pictures',
        imageUrl: "https://picsum.photos/seed/piu132m/1000/1000",
        priceRSD: 250
      },
      {
        id: 6,
        name: 'Double Slider',
        imageUrl: "https://picsum.photos/seed/pics2m/1000/1000",
        priceRSD: 250
      },
      {
        id: 7,
        name: 'Photo Changing Card',
        imageUrl: "https://picsum.photos/seed/32m/1000/1000",
        priceRSD: 300
      }
    ];
  }

  getBoxElements() {
    return this.boxElements;
  }

  getColors() {
    return this.colors;
  }

  getMiddleElements() {
    return this.middleElements;
  }

}
