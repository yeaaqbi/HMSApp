import { ACTION_TYPES } from '../actions/departmentActions'

const initState = {
    departmentsList: [
        {
            id:1,
            name:"Heart",
            visits:14
        },
        {
            id:2,
            name:"Teeth",
            visits:10
        },
        {
            id:3,
            name:"Eyes",
            visits:4
        }
    ]
}

export const departmentReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_DEPARTMENTS_FOR:
            return {
                departmentsList: action.data
            }

        default:
            return state;
    }
}
