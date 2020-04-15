import React from 'react'
import PatientDataTable from './PatientDataTable'
import PatientDataGraph from './PatientDataGraph'

export default function Patient() {
    return (
        <div>
            <h1>Patient</h1>
            <PatientDataTable/>
            <PatientDataGraph/>
        </div>
    )
}
