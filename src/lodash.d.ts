declare module "lodash" {
    export const zipWith: <T, U, R>(arrays: T[][], iteratee: (a: T, b: U) => R) => R[];
}