

export const ACTION_TYPES = {
    FETCH_SUMMURY_FOR: "FETCH_SUMMURY_FOR"

}

export const fetchSummuryForPatient = id => {

    return (
        {
            type: ACTION_TYPES.FETCH_SUMMURY_FOR,
            data: {
                patientRecordsCount: 122,
                departmentsVisitedCount: 13,
                billsAvg: 2500
            }
        }
    )
}