//  扩展类型
interface BasicAddress {
  name?: string
  street: string
  city: string
  country: string
  postalCode: string
}

interface AddressWithUint extends BasicAddress {
  uint: string
}

let awu: AddressWithUint = {
  uint: "1",
  street: "华兰大道",
  city: "新乡",
  country: "中国",
  postalCode: "010111"
}

interface Colorful {
  color: string
}

interface Circle {
  radius: number
}

interface ColorCircle extends Colorful, Circle {
  area: number
}

let circle: ColorCircle = {
  area: 0,
  color: "",
  radius: 0
}