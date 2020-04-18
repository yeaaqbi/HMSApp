import React from 'react'
import PatientEntriesTable from './PatientEntriesTable'
import PatientEntriesSummury from './PatientEntriesSummury'
import DepartmentsTable from './DepartmentsTable'
import {useParams } from "react-router-dom";

export default function PatientReport() {
    const { id } = useParams();
    const patientId = parseInt(id);
    return (
        <>
            <PatientEntriesTable patientId={patientId} />
            <hr />
            <DepartmentsTable patientId={patientId} />
            <hr />
            <PatientEntriesSummury patientId={patientId} />
        </>
    )
}
