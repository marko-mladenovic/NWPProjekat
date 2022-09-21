import { ElementModel } from "./ElementModel";

// export interface LayerModel {
//     topElement: {
//         position: string,
//         element: ElementModel
//     };
//     bottomElement: {
//         position: string,
//         element: ElementModel
//     };
//     leftElement: {
//         position: string,
//         element: ElementModel
//     };
//     rightElement: {
//         position: string,
//         element: ElementModel
//     };
// }

interface BoxElementModel {
    position: string;
    element: ElementModel;
}

export interface LayerModel {
    elements: Array<BoxElementModel>;
}