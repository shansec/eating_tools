export var pi = 3.14
export let square = 1.41
export const phi = 1.61
export default function absolute(num: number) {
  if (num < 0) return num * -1
  return num
}