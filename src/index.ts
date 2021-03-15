type ParameterByIndex<F extends (...args: never[]) => unknown, Index extends number> = F extends (
    ...args: infer P
) => unknown
    ? P[Index]
    : never

const fn = (a: number, b: string, c: string): unknown => 1

const a: ParameterByIndex<typeof fn, 1> = 'hello'
