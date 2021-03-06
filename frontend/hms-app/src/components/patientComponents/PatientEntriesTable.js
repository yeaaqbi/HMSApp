import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { createNewPatientEntry, updatePatientEntry } from '../../actions/patientEntriesActions'
import { deletePatient } from '../../actions/patientActions'
import { fetchAllDepartments } from '../../actions/departmentActions'
import { fetchPatientEntries } from '../../actions/patientEntriesActions'
import Moment from 'moment';


const PatientEntriesTable = props => {
    const dispatch = useDispatch();
    const { patientId } = props;
    useEffect(() => {
        dispatch(fetchAllDepartments());
        dispatch(fetchPatientEntries(patientId));

    }, [])

    const departmentsTypesList = useSelector(state => state.departmentReducer.departmentsTypes);

    const patientEntriesList = useSelector(state => state.patientEntriesReducer.entriesList);


    const [patientEntry, setPatientEntry] = useState(
        {
            id: 0,
            patientId: patientId,
            departmentId: 0,
            entryDate: Date.now(),
            bill: null
        }
    );

    const [update, setUpdate] = useState(false);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const removePatient = () => {
        if (window.confirm("Are you sure you want to delete this patient?")) {
            dispatch(deletePatient(patientId));
            window.location = '/';
        }
    }

    const showCreateEntryDialog = () => {
        setPatientEntry({
            id: 0,
            patientId: patientId,
            departmentId: 0,
            entryDate: Date.now(),
            bill: null
        });
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
                dispatch(updatePatientEntry(patientEntry.id, patientEntry));
            }
        }
        toggle();

    }


    const showUpdateEntryDialog = (entry) => {
        setPatientEntry(
            {
                id: entry.id,
                patientId: patientId,
                departmentId: entry.departmentId,
                departmentName: entry.departmentName,
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
            <span><h3 className="title" >PATIENT ENTRIES</h3></span>
            <span>
                <button className="btn-red" onClick={() => removePatient()} >Delete Patient</button>
                <button className="btn-normal" onClick={() => showCreateEntryDialog()} >Add New Entry</button>
            </span>
            <table className="table">
                <thead>
                    <th>Entry Id</th>
                    <th>Department</th>
                    <th>Entry Date</th>
                    <th>Bill</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        patientEntriesList.map(entry => {
                            return (
                                <tr key={entry.id}>
                                    <td>{entry.id}</td>
                                    <td>{(departmentsTypesList.find(type => type.id == entry.departmentId) != undefined ? departmentsTypesList.find(type => type.id == entry.departmentId).name : "")}</td>
                                    <td>{Moment(entry.entryDate).format('MMMM DD, YYYY')}</td>
                                    <td>{entry.bill}$</td>
                                    <td><button onClick={() => showUpdateEntryDialog(entry)}>Edit</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

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
                                    {
                                        departmentsTypesList.map(dept => {
                                            return (
                                                <option key={dept.id} value={dept.id}>{dept.name}</option>
                                            )
                                        })
                                    }
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
export default PatientEntriesTable;
