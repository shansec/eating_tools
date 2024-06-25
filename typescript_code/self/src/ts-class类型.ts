interface A {
  get(s: string): boolean
  // get: (s: string) => boolean
}
class B implements A {
  get(s: string) {
    return true;
  }
}

class Car {
  id: number = 1;
  move(): void {}
}
class myCar implements Car {
  id: number = 2;
  move(): void {
    throw new Error("Method not implemented.");
  }
}

// Class 类型
class Color {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
const green: Color = new Color('green');

interface MotorVehicle {
  name: string
  setName: (name: string) => void
}
class MyCar implements MotorVehicle {
  name: string = '刘备';
  age: number = 110;
  setName(name: string) {
    this.name = name
  }
}
const c1:MotorVehicle = new MyCar();