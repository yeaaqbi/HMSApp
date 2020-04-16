

export const ACTION_TYPES = {
    FETCH_DEPARTMENTS_FOR: "FETCH_DEPARTMENTS_FOR"

}

export const fetchDepartmentsForPatient = id => {

    return (
        {
            type: ACTION_TYPES.FETCH_DEPARTMENTS_FOR,
            data: id
        }
    )
}