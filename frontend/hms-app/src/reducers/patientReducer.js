import { ACTION_TYPES } from '../actions/patientActions'

const initState = {
    patientsList: []
}

export const patientReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_PATIENTS:
            return {
                patientsList: action.data
            }
        case ACTION_TYPES.DELETE_PATIENT:
            return {
                patientsList: state.patientsList.filter(x => x.id !== action.data)
            }
        case ACTION_TYPES.CREATE_PATIENT:
            return {
                patientsList: [...state.patientsList,action.data]
            }

        default:
            return state;
    }
}
