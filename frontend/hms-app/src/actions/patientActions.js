
import api from './api'

export const ACTION_TYPES = {
    CREATE_PATIENT: "CREATE_PATIENT",
    UPDATE_PATIENT: "UPDATE_PATIENT",
    DELETE_PATIENT: "DELETE_PATIENT",
    FETCH_PATIENTS: "FETCH_PATIENTS"

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
                onSuccess()
            }
        )
        .catch(err => console.log(err))
}