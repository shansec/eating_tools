// 回调函数的可选参数 不要给回调函数添加可选参数
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i)
  }
}

myForEach([1, 2, 3], (a) => console.log(a))
myForEach([1, 2, 3], (a, i) => console.log(a, i))