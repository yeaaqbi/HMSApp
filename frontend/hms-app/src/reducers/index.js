import { combineReducers } from 'redux'
import { patientReducer } from './patientReducer'
import { patientEntriesReducer } from './patientEntriesReducer'
import { departmentReducer } from './departmentReducer'

export const reducers = combineReducers({
    patientReducer,
    patientEntriesReducer,
    departmentReducer
})