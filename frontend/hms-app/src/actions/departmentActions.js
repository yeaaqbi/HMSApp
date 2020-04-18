import api from './api'

export const ACTION_TYPES = {
    FETCH_DEPARTMENTS_ALL: "FETCH_DEPARTMENTS_ALL"

}

export const fetchAllDepartments = () => dispatch => {
    api.departments().fetchAll()
        .then(
            response => {
                dispatch(
                    {
                        type: ACTION_TYPES.FETCH_DEPARTMENTS_ALL,
                        data: response.data
                    }
                )
            }
        )
        .catch(err => console.log(err))
}