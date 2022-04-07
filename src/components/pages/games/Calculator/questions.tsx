export interface Operation{
    sign: string,
    name: string,
    descOperation: string
}

export let operations: Operation[]=[
    {sign: "+", name: "Addition", descOperation: "plus"},
    {sign: "-", name: "Subtraction", descOperation: "minus"},
    {sign: "x", name: "Multiplication", descOperation: "times"},
    {sign: "/", name: "Division", descOperation: "divided"},
]

export interface Operator{
    number: number,
    sorted: boolean
}

export let operators: Operator[]=[
    {number: 0, sorted: false},
    {number: 1, sorted: false},
    {number: 2, sorted: false},
    {number: 3, sorted: false},
    {number: 4, sorted: false},
    {number: 5, sorted: false},
    {number: 6, sorted: false},
    {number: 7, sorted: false},
    {number: 8, sorted: false},
    {number: 9, sorted: false}
]

