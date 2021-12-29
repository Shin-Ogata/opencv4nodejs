import { Point } from './Point';
import './openCV.js';

declare module "./openCV.js" {
  export class Point3 extends Point {
    readonly x: number;
    readonly y: number;
    readonly z: number;
    constructor(x: number, y: number, z: number);
  }
}