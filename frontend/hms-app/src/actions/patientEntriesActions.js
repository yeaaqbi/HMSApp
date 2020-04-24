import api from './api'

export const ACTION_TYPES = {
    CREATE_ENTRY: "CREATE_ENTRY",
    UPDATE_ENTRY: "UPDATE_ENTRY",
    FETCH_ENTRIES: "FETCH_ENTRIES",
    FILTER_ENTRIES: "FILTER_ENTRIES"
}
const formatData = data => ({
    ...data,
    departmentId: parseInt(data.departmentId ? data.departmentId : 0),
    patientId: parseInt(data.patientId ? data.patientId : 0),
    bill: parseFloat(data.bill ? data.bill : 0),

})
export const fetchPatientEntries = (id, onSuccess) => dispatch => {
    api.patientRecords().fetchAll()
        .then(
            response => {
                dispatch(
                    {
                        type: ACTION_TYPES.FETCH_ENTRIES,
                        data: response.data,
                        patientId: id
                    }
                )
                onSuccess()
            }
        )
        .catch(err => console.log(err))
}

export const createNewPatientEntry = (entry, onSuccess) => dispatch => {
    entry = formatData(entry);
    api.patientRecords().create(entry)
        .then(
            response => {
                dispatch(
                    {
                        type: ACTION_TYPES.CREATE_ENTRY,
                        data: response.data
                    }

                )
                onSuccess()
            }
        )
        .catch(err => console.log(err))
}
export const updatePatientEntry = (id, entry, onSuccess) => dispatch => {
    entry = formatData(entry);
    api.patientRecords().update(id, entry)
        .then(
            response => {
                dispatch(
                    {
                        type: ACTION_TYPES.UPDATE_ENTRY,
                        data: { id, ...entry }
                    }
                )
                onSuccess()
            }
        )
        .catch(err => console.log(err))
}
export const filterPatientsEntries = (filters, onSuccess) => dispatch => {
    dispatch(
        {
            type: ACTION_TYPES.FILTER_ENTRIES,
            data: filters
        }
    )
}