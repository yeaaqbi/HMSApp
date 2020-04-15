import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchPatients, deletePatient, createNewPatient } from '../../actions/patientActions'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function PatientDataTable() {

    const dispatch = useDispatch();
    const patients = useSelector(state => state.patientReducer.patientsList);
    const [newPatient, setNewPatient] = useState(
        {
            name: "",
            email: "",
            dateOfBirth: Date.now,
            city: "",
        }
    );
    useEffect(() => {
        dispatch(fetchPatients());
    }, [])


    const onDeletePatient = id => {
        if (window.confirm("Are you sure you want to delete this patient?")) {
            dispatch(deletePatient(id));
        }
    }

    const onCreatePatient = e => {
        e.preventDefault();
        dispatch(createNewPatient(newPatient));
        toggle();

    }

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const handleInputValues = e => {
        e.preventDefault();
        setNewPatient({...newPatient,[e.target.name]: e.target.value })
    }
    return (
        <div>
            <h3 className="text-left">Patients List</h3>
            <Button color="primary" className="float-right" onClick={toggle}>Add Patient</Button>
            <Table striped>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Date of Birth</td>
                        <td>City</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        patients.map(patient => {
                            return (
                                <tr key={patient.id}>
                                    <td>{patient.id}</td>
                                    <td>{patient.name}</td>
                                    <td>{patient.email}</td>
                                    <td>{patient.dateOfBirth}</td>
                                    <td>{patient.city}</td>
                                    <td><button onClick={() => onDeletePatient(patient.id)}>Delete</button><button>Edit</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Add New Patient</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" onChange={handleInputValues} name="name" id="name" placeholder="Please enter patient name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" onChange={handleInputValues} name="email" id="email" placeholder="Please enter patient email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="dob">Date of birth</Label>
                            <Input
                                type="date"
                                onChange={handleInputValues}
                                name="dateOfBirth"
                                id="dateOfBirth"
                                
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="select">City</Label>
                            <Input onChange={handleInputValues} type="select" name="city" id="city">
                                <option>Ramallah</option>
                                <option>Jenin</option>
                                <option>Nablus</option>
                                <option>Hebron</option>
                                <option>Salfit</option>
                            </Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onCreatePatient}>Add</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>


        </div>
    )

}

