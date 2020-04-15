import React from 'react'
import PatientDataTable from './PatientDataTable'
import PatientDataGraph from './PatientDataGraph'

export default function Patient() {
    return (
        <>
            <hr />
            <PatientDataTable />
            <hr />
            <PatientDataGraph />
            <hr />
        </>
    )
}
