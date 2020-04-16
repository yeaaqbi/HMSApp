import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { createNewPatientEntry, updatePatientEntry } from '../../actions/patientEntriesActions'
import { deletePatient } from '../../actions/patientActions'


export default function PatientEntriesTable(props) {

    const {patientId} = props;

    const dispatch = useDispatch();

    const patientEntriesList = useSelector(state => state.patientEntriesReducer.entriesList);

    const [patientEntry, setPatientEntry] = useState(
        {
            id: "",
            patientId: "",
            departmentId: "",
            entryDate: Date.now(),
            bill: ""
        }
    );

    const [update, setUpdate] = useState(false);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const removePatient = () => {
        if (window.confirm("Are you sure you want to delete this patient?")) {
            dispatch(deletePatient(patientId));
        }
    }

    const showCreateEntryDialog = () => {
        setPatientEntry({});
        setUpdate(false);
        setModal(!modal);
    }
    const onCreateUpdateEntry = e => {
        e.preventDefault();
        if (!update) {
            dispatch(createNewPatientEntry(patientEntry));
        }
        else {
            if (window.confirm("Are you sure you want to update this entry?")) {
                dispatch(updatePatientEntry(patientEntry));
            }
        }
        toggle();

    }

    const showUpdateEntryDialog = (entry) => {
        setPatientEntry(
            {
                id: entry.id,
                patientId: entry.patientId,
                departmentId: entry.departmentId,
                entryDate: entry.entryDate,
                bill: entry.bill

            }
        )
        setUpdate(true);
        setModal(!modal);
    }

    const handleInputValues = e => {
        e.preventDefault();
        setPatientEntry({ ...patientEntry, [e.target.name]: e.target.value })
    }
    return (
        <>
            <Button color="danger" className="float-right" onClick={() => removePatient()} >Delete Patient</Button>
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
                        patientEntriesList.map(entry => {
                            return (
                                <tr key={entry.id}>
                                    <td>{entry.id}</td>
                                    <td>{entry.departmentId}</td>
                                    <td>{entry.entryDate}</td>
                                    <td>{entry.bill}</td>
                                    <td><button onClick={() => showUpdateEntryDialog(entry)}>Edit</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Button color="primary" className="float-right" onClick={() => showCreateEntryDialog()} >Add New Entry</Button>

            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Add New Entry</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <FormGroup>
                                <Label for="entryDate">Entry Date</Label>
                                <Input
                                    type="date"
                                    value={patientEntry.entryDate}
                                    onChange={handleInputValues}
                                    name="entryDate"
                                    id="entryDate"

                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="select">Department</Label>
                                <Input
                                    onChange={handleInputValues}
                                    type="select"
                                    value={patientEntry.departmentId}
                                    name="departmentId"
                                    id="departmentId">
                                    <option>NA</option>
                                    <option>Test1</option>
                                    <option>Test2</option>
                                    <option>Test3</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="bill">Bill</Label>
                                <Input
                                    type="number"
                                    value={patientEntry.bill}
                                    onChange={handleInputValues}
                                    name="bill"
                                    id="bill"

                                />
                            </FormGroup>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onCreateUpdateEntry}>{(update ? "Update" : "Add")}</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
