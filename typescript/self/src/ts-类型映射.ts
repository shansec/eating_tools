// 键名重映射
type keyRemapA = {
  foo: string
  zoo: boolean
}
type keyRemapB = {
  [prop in keyof keyRemapA as `${prop}_id`]: keyRemapA[prop]
}

// 属性过滤
type User = {
  name: string,
  age: number
}
type Filter<T> = {
  [K in keyof T
    as T[K] extends string ? K : never]: string
}
type FilteredUser = Filter<User> // { name: string }