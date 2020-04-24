
import api from './api'
import { fetchPatientEntries } from '../actions/patientEntriesActions'
export const ACTION_TYPES = {
    CREATE_PATIENT: "CREATE_PATIENT",
    UPDATE_PATIENT: "UPDATE_PATIENT",
    DELETE_PATIENT: "DELETE_PATIENT",
    FETCH_PATIENTS: "FETCH_PATIENTS",
    FILTER_PATIENTS: "FILTER_PATIENTS",
    SEARCH_PATIENTS_TABLE: "SEARCH_PATIENTS_TABLE"

}

export const fetchPatients = () => dispatch => {
    api.patients().fetchAll()
        .then(
            response => {
                dispatch(
                    {
                        type: ACTION_TYPES.FETCH_PATIENTS,
                        data: response.data
                    }
                )
            }
        )
        .catch(err => console.log(err))
}

export const createNewPatient = (patient, onSuccess) => dispatch => {
    api.patients().create(patient)
        .then(
            response => {
                dispatch(
                    {
                        type: ACTION_TYPES.CREATE_PATIENT,
                        data: response.data
                    }
                )
                onSuccess()
            }
        )
        .catch(err => console.log(err))
}

export const updatePatient = (id, patient, onSuccess) => dispatch => {
    api.patients().update(id, patient)
        .then(
            response => {
                dispatch(
                    {
                        type: ACTION_TYPES.UPDATE_PATIENT,
                        data: { id, ...patient }
                    }
                )
                onSuccess()
            }
        )
        .catch(err => console.log(err))
}

export const deletePatient = (id, onSuccess) => dispatch => {
    api.patients().delete(id)
        .then(
            response => {
                dispatch(
                    {
                        type: ACTION_TYPES.DELETE_PATIENT,
                        data: id
                    }
                )
                onSuccess(dispatch(fetchPatientEntries(0)))
            }
        )
        .catch(err => console.log(err))
}

export const filterPatients = (filters) => {
    return (
        {
            type: ACTION_TYPES.FILTER_PATIENTS,
            data: filters
        }
    )
}

export const searchPatients = (key) => {
    return (
        {
            type: ACTION_TYPES.SEARCH_PATIENTS_TABLE,
            data: key
        }
    )
}

