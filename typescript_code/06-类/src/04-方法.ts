class Poi {
  x: number = 10
  y: number = 10

  scale(n :number): void {
    this.x *= n
    this.y *= n
  }
}

const p = new Poi()
p.scale(10)
console.log(p.x);
console.log(p.y);
