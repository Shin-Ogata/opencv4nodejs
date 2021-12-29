import { FeatureDetector } from './FeatureDetector.d';

import './openCV.js';

declare module "./openCV.js" {
  export class SIFTDetector extends FeatureDetector {
    readonly nfeatures: number;
    readonly nOctaveLayers: number;
    readonly contrastThreshold: number;
    readonly edgeThreshold: number;
    readonly sigma: number;
    constructor(nFeatures?: number, nOctaveLayers?: number, contrastThreshold?: number, edgeThreshold?: number, sigma?: number);
    constructor(params: { nFeatures?: number, nOctaveLayers?: number, contrastThreshold?: number, edgeThreshold?: number, sigma?: number });
  }
}