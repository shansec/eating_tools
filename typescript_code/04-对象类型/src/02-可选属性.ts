type Shape = {}

interface PaintOptions {
  shape: Shape,
  xPos?: number,
  yPos?: number
}

function paintShape(opts: PaintOptions) {

}

const shape: Shape = {}
paintShape({ shape })
paintShape({ shape, xPos: 100, yPos: 100 })