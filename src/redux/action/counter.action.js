export const ADD_COUNT = 'ADD_COUNT'
export const SUB_COUNT = 'SUB_COUNT'


export function addCount(value) {
    return {
        type: ADD_COUNT,
        value
    };
}

export function subCount(value) {
    return {
        type: SUB_COUNT,
        value
    };
}
