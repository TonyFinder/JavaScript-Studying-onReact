//JS Lesson #7.

export const sum = (a: number, b: number) => a + b
export const multi = (a: number, b: number) => a * b
export const dev = (a: number, b: number) => a / b
export const sub = (a: number, b: number) => a - b

export type ActionType = {
    type: "sum" | "multi" | "dev" | "sub"
    curNumber: number
}

export const reducerForNumbers = (state: number, action: ActionType): number => {
    switch (action.type) {
        case 'sum':
            return state + action.curNumber
        case "multi":
            return state * action.curNumber
        case "dev":
            return state / action.curNumber
        case "sub":
            return state - action.curNumber
        default:
            return state
    }
}