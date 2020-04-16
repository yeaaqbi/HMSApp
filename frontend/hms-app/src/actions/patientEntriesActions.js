
import api from './api'

export const ACTION_TYPES = {
    CREATE_ENTRY: "CREATE_ENTRY",
    UPDATE_ENTRY: "UPDATE_ENTRY",
    FETCH_ENTRIES: "FETCH_ENTRIES"

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

export const updatePatient = (id,patient, onSuccess) => dispatch => {
    api.patients().update(id,patient)
        .then(
            response => {
                dispatch(
                    {
                        type: ACTION_TYPES.UPDATE_PATIENT,
                        data: {id,...patient}
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