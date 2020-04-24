import React from 'react'
import PatientEntriesTable from './PatientEntriesTable'
import PatientEntriesSummury from './PatientEntriesSummury'
import DepartmentsTable from './DepartmentsTable'
import { useParams } from "react-router-dom";

const PatientReport =() => {
    const { id } = useParams();
    const patientId = parseInt(id);
    return (
        <>
            <PatientEntriesSummury patientId={patientId} />
            <PatientEntriesTable patientId={patientId} />
            <DepartmentsTable patientId={patientId} />

        </>
    )
}

export default PatientReport;
