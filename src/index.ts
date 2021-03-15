type Tail<T extends unknown[]> = T extends [unknown, ...infer Rest] ? Rest : never
type Head<T extends unknown[]> = T extends [infer H, ...unknown[]] ? H : never
type Last<T extends unknown[]> = T extends [...unknown[], infer L] ? L : never

type Drop<Size extends number, T extends unknown[], Indexable extends unknown[] = []> = {
    continue: Drop<Size, Tail<T>, [...Indexable, unknown]>
    return: T
}[Indexable['length'] extends Size ? 'return' : 'continue']

type Tuple = [number, string, string[]]

const a: Tail<Tuple> = ['', []]
const b: Head<Tuple> = 45
const c: Last<Tuple> = ['dfasf']

const d: Drop<1, Tuple> = ['asdfsa', ['dsfsaf']]
const e: Drop<2, Tuple> = [['dsfsaf']]
const f: Drop<3, Tuple> = []
const g: Drop<4, Tuple>
