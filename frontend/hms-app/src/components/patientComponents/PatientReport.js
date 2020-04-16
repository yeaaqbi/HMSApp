import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function PatientReport() {
    const [patientEntries, setPatientEntries] = useState(
        {
            patientRecordsList: [
                {
                    id: 1,
                    patientId: 15,
                    departmentId: 11132111,
                    entryDate: Date.now(),
                    bill: 2500
                },
                {
                    id: 2,
                    patientId: 20,
                    departmentId: 11155111,
                    entryDate: Date.now(),
                    bill: 7500
                }
            ]
        }
    )

    return (
        <>
        <Button color="danger" className="float-right" >Delete Patient</Button>
            <Table striped>
                <thead>
                    <tr>
                        <td>Entry Id</td>
                        <td>Department</td>
                        <td>Entry Date</td>
                        <td>Bill</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        patientEntries.patientRecordsList.map(entry => {
                            return (
                                <tr key={entry.id}>
                                    <td>{entry.id}</td>
                                    <td>{entry.departmentId}</td>
                                    <td>{entry.entryDate}</td>
                                    <td>{entry.bill}</td>
                                    <td><button>Edit</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Button color="primary" className="float-right" >Add New Entry</Button>
        </>
    )
}
