import React from 'react'
import { useSelector } from "react-redux";


const DepartmentsTable = () => {


    const departmentsTypesList = useSelector(state => state.departmentReducer.departmentsTypes);

    const departmentsVisitsList = useSelector(state => state.patientEntriesReducer.departmentsCount);

    return (
        <div>
            <h3 className="title" >DEPARTMENTS VISITED</h3>
            <table className="table">
                <thead>
                    <th>Department</th>
                    <th>Visits</th>
                </thead>
                <tbody>
                    {
                        departmentsVisitsList.map(department => {
                            return (
                                <tr key={department.departmentId}>
                                    <td>{(departmentsTypesList.find(type => type.id == department.departmentId) != undefined ? departmentsTypesList.find(type => type.id == department.departmentId).name : "")}</td>
                                    <td>{department.visits}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default DepartmentsTable;
