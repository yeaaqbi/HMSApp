import React from 'react'
import PatientDataTable from './PatientDataTable'
import PatientDataGraph from './PatientDataGraph'
import DepartmentsTable from './DepartmentsTable'
import DepartmentsDataGraph from './DepartmentDataGraph'

const Patient = props => {
    return (
        <div>
            <div className="bars-table">
                <div className='cell'><PatientDataGraph /></div>
                <div className='cell'><DepartmentsDataGraph /></div>
            </div>
            <br />
            <br />
            <PatientDataTable />
            <DepartmentsTable />
            <br />
        </div>
    )
}
export default Patient;
