

export const ACTION_TYPES = {
    CREATE_ENTRY: "CREATE_ENTRY",
    UPDATE_ENTRY: "UPDATE_ENTRY",
    FETCH_ENTRIES: "FETCH_ENTRIES"

}

export const fetchPatientEntries = id => {

    return (
        {
            type: ACTION_TYPES.FETCH_ENTRIES,
            data: id
        }
    )
}

export const createNewPatientEntry = entry => {

    return (
        {
            type: ACTION_TYPES.CREATE_ENTRY,
            data: entry
        }
    )

}

export const updatePatientEntry = entry => {

    return (
        {
            type: ACTION_TYPES.UPDATE_ENTRY,
            data: entry
        }
    )
}