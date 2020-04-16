import { ACTION_TYPES } from '../actions/summuryActions'

const initState = {
    summuryInfo: {
        patientRecordsCount: 122,
        departmentsVisitedCount: 13,
        billsAvg: 2500
    }
}

export const summuryReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_SUMMURY_FOR:
            return {
                summuryInfo: action.data
            }

        default:
            return state;
    }
}
