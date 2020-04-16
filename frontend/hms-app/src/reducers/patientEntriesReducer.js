import { ACTION_TYPES } from '../actions/patientEntriesActions'

const initState = {
    entriesList: [
        {
            id: 1,
            patientId: 15,
            departmentId: 11132111,
            entryDate: Date.now(),
            bill: 2500
        },
        {
            id: 2,
            patientId: 20,
            departmentId: 11155111,
            entryDate: Date.now(),
            bill: 7500
        },
        {
            id: 3,
            patientId: 20,
            departmentId: 11155111,
            entryDate: Date.now(),
            bill: 7900
        }
    ]
}

export const patientEntriesReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ENTRIES:
            return {
                entriesList: action.data
            }
        case ACTION_TYPES.CREATE_ENTRY:
            return {
                entriesList: [...state.entriesList, action.data]
            }
        case ACTION_TYPES.UPDATE_ENTRY:
            return {
                entriesList: state.entriesList.map(entry => entry.id == action.data.id? action.data:entry)
                
            }
        default:
            return state;
    }
}
