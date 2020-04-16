import React, { useState, useEffect } from 'react'
import PatientEntriesTable from './PatientEntriesTable'
import PatientEntriesSummury from './PatientEntriesSummury'
import DepartmentsTable from './DepartmentsTable'


export default function PatientReport() {
    return (
        <>
            <PatientEntriesTable patientId="1" />
            <hr />
            <DepartmentsTable patientId="1" />
            <hr />
            <PatientEntriesSummury patientId="1" />
        </>
    )
}
