import { ACTION_TYPES } from '../actions/departmentActions'

const initState = {
    departmentsTypes: []
}

export const departmentReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_DEPARTMENTS_ALL:
            return {
                ...state,
                departmentsTypes: action.data
            }

        default:
            return state;
    }
}
