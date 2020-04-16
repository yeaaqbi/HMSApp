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
                patientsList: state.patientsList.filter(patient => patient.id !== action.data)
            }
        case ACTION_TYPES.CREATE_PATIENT:
            return {
                patientsList: [...state.patientsList, action.data]
            }
        case ACTION_TYPES.UPDATE_PATIENT:
            return {
                patientsList: state.patientsList.map(patient => patient.id == action.data.id? action.data:patient)
            }

        default:
            return state;
    }
}
