export default class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  clone(): Point {
    return new Point(this.x, this.y);
  }

  addX(x: number): Point {
    const newPoint = this.clone();
    newPoint.x += x;
    return newPoint;
  }

  addY(y: number): Point {
    const newPoint = this.clone();
    newPoint.y += y;
    return newPoint;
  }

  setX(x: number): Point {
    const newPoint = this.clone();
    newPoint.x = x;
    return newPoint;
  }

  setY(y: number): Point {
    const newPoint = this.clone();
    newPoint.y = y;
    return newPoint;
  }

  toArray(): number[] {
    return [this.x, this.y];
  }
}
