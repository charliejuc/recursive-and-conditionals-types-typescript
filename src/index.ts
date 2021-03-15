type JSONType = string | number | boolean | null | JSONType[] | { [key: string]: JSONType }

const a: JSONType = [
    1,
    2,
    {
        x: 35,
        y: 97,
        r: ['fsadfds']
    }
]

// exit condition
type PrototypedObject<T> = T & {
    prototype: PrototypedObject<T> | null
}

const b: PrototypedObject<{ x: number }> = {
    x: 1,
    prototype: {
        x: 9,
        prototype: null
    }
}

// const b: PrototypedObject<{ x: number }> = {
//     x: 1,
//     prototype: {
//         prototype: {
//             prototype: {
//
//             }
//         }
//     }
// }
