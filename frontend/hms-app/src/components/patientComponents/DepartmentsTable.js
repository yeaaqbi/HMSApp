import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Table } from 'reactstrap';


export default function DepartmentsTable(props) {
    const { patientId } = props;

    const dispatch = useDispatch();

    const departmentsList = useSelector(state => state.departmentReducer.departmentsList);


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
                        departmentsList.map(department => {
                            return (
                                <tr key={department.id}>
                                    <td>{department.name}</td>
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
