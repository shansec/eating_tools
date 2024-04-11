type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate>

function f() {
  return { x: 10, y : 3 }
}
// TS2749: 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?
// type P = ReturnType<f>

type returnP = ReturnType<typeof f>
