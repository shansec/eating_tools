// 交叉类型
interface Colorful {
  color: string
}

interface Circle {
  radius: number
}

type ColorfulCircle = Colorful & Circle

const cc: ColorfulCircle = {
  color: 'red',
  radius: 50
}