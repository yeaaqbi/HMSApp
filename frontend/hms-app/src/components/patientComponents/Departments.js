import React from 'react'
import DepartmentsTable from './DepartmentsTable'
import DepartmentsDataGraph from './DepartmentDataGraph'

const Departments = () => {


    return (
        <>
            <DepartmentsTable patientId="0" />
            <DepartmentsDataGraph />
        </>
    )
}
export default Departments;
