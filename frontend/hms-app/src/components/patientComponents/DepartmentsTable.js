import React from 'react'
import { useSelector } from "react-redux";
import { Table } from 'reactstrap';


export default function DepartmentsTable() {


    const departmentsTypesList = useSelector(state => state.departmentReducer.departmentsTypes);

    const departmentsVisitsList = useSelector(state => state.patientEntriesReducer.departmentsCount);

    return (
        <>
            <Table striped>
                <thead>
                    <tr>
                        <td>Department</td>
                        <td>Count (# patient records per department)</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        departmentsVisitsList.map(department => {
                            return (
                                <tr key={department.departmentId}>
                                    <td>{(departmentsTypesList.find(type => type.id ==department.departmentId) != undefined?departmentsTypesList.find(type => type.id ==department.departmentId).name:"")}</td>
                                    <td>{department.visits}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
