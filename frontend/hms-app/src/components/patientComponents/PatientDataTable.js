import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Moment from 'moment';

import { fetchPatients, searchPatients, deletePatient, createNewPatient, updatePatient } from '../../actions/patientActions'
import { FormFeedback, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { fetchPatientEntries } from '../../actions/patientEntriesActions'

const PatientDataTable = props => {

    const dispatch = useDispatch();
    const patients = useSelector(state => state.patientReducer.patientsList);

    const [newPatient, setNewPatient] = useState(
        {
            name: "",
            email: "",
            dateOfBirth: Date.now,
            city: "NA",
        }
    );
    const [validate, setValidate] = useState({
        emailState: 'has-danger',
        nameState: 'has-danger',
        dateState: 'has-danger',
        cityState: 'has-danger'
    });
    const [update, setUpdate] = useState(false);
    const [modal, setModal] = useState(false);
    useEffect(() => {
        dispatch(fetchPatients());
        dispatch(fetchPatientEntries(0))
    }, [])
    const onDeletePatient = id => {
        if (window.confirm("Are you sure you want to delete this patient?")) {
            dispatch(deletePatient(id));
            dispatch(fetchPatientEntries(0));
        }

    }
    const handleSearchChange = value => {
        dispatch(searchPatients(value));
    };
    
    const onCreateUpdatePatient = e => {
        e.preventDefault();
        if (validate.emailState === 'has-success' && validate.nameState === 'has-success' && validate.dateState === 'has-success' && validate.cityState === 'has-success') {
            if (!update) {
                dispatch(createNewPatient(newPatient));
            }
            else {
                if (window.confirm("Are you sure you want to update this patient?")) {
                    dispatch(updatePatient(newPatient.id, newPatient));
                }
            }
            toggle();
        }

    }

    const showUpdatePatientDialog = (patient) => {
        setValidate({
            emailState: 'has-success',
            nameState: 'has-success',
            dateState: 'has-success',
            cityState: 'has-success'
        });
        setNewPatient(
            {
                id: patient.id,
                name: patient.name,
                email: patient.email,
                dateOfBirth: patient.dob,
                city: patient.city,
            }
        )
        setUpdate(true);
        setModal(!modal);
    }
    const showCreatePatientDialog = () => {
        setNewPatient({});
        setUpdate(false);
        setModal(!modal);
    }


    const toggle = () => setModal(!modal);


    const handleInputValues = e => {
        e.preventDefault();
        validateInput(e)
        setNewPatient({ ...newPatient, [e.target.name]: e.target.value });

    }
    const validateInput = (e) => {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (e.target.name == 'email') {
            if (emailRex.test(e.target.value)) {
                setValidate({ ...validate, emailState: 'has-success' });
            } else {
                setValidate({ ...validate, emailState: 'has-danger' });
            }
        }
        if (e.target.name == 'name') {
            if (e.target.value == '') {
                setValidate({ ...validate, nameState: 'has-danger' });
            } else {
                setValidate({ ...validate, nameState: 'has-success' });
            }
        }
        if (e.target.name == 'dateOfBirth') {
            if (e.target.value == null) {
                setValidate({ ...validate, dateState: 'has-danger' });
            } else {
                setValidate({ ...validate, dateState: 'has-success' });
            }
        }
        if (e.target.name == 'city') {
            if (e.target.value == '') {
                setValidate({ ...validate, cityState: 'has-danger' });
            } else {
                setValidate({ ...validate, cityState: 'has-success' });
            }
        }
    }
    return (
        <>
            <br />
            <span> <h3 className="title">PATIENTS LIST</h3></span>
            <span><button className="btn-normal" onClick={() => showCreatePatientDialog()}>Add Patient</button></span>
            <input
            style={{ marginLeft: '5px',width:'100%' }}
            type="text"
            placeholder="Type to search..."
            onChange={e => handleSearchChange(e.target.value)}
        />
            <table className="table">
               
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>City</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        patients.map(patient => {
                            return (
                                <tr key={patient.id}>
                                    <td>{patient.id}</td>
                                    <td><Link to={"/Patient/" + patient.id}>{patient.name}</Link></td>
                                    <td>{patient.email}</td>
                                    <td>{Moment(patient.dateOfBirth).format('MMMM DD, YYYY')}</td>
                                    <td>{patient.city}</td>
                                    <td><button onClick={() => onDeletePatient(patient.id)}>Delete</button><button onClick={() => showUpdatePatientDialog(patient)}>Edit</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Add New Patient</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                valid={validate.nameState === 'has-success'}
                                invalid={validate.nameState === 'has-danger'}
                                type="text"
                                value={newPatient.name}
                                onChange={handleInputValues}
                                name="name"
                                id="name"
                                placeholder="Please enter patient name" />
                            <FormFeedback invalid>
                                Make sure to fill patient name
                            </FormFeedback>
                            <FormFeedback valid>
                                Valid Name
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                valid={validate.emailState === 'has-success'}
                                invalid={validate.emailState === 'has-danger'}
                                type="email"
                                value={newPatient.email}
                                onChange={handleInputValues}
                                name="email"
                                id="email"
                                placeholder="Please enter patient email" />
                            <FormFeedback invalid>
                                Make sure to fill a valid email
                            </FormFeedback>
                            <FormFeedback valid>
                                Valid Email
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="dob">Date of birth</Label>
                            <Input
                                valid={validate.dateState === 'has-success'}
                                invalid={validate.dateState === 'has-danger'}
                                type="date"
                                value={newPatient.dateOfBirth}
                                onChange={handleInputValues}
                                name="dateOfBirth"
                                id="dateOfBirth"

                            />
                            <FormFeedback invalid>
                                Make sure to fill a valid date
                            </FormFeedback>
                            <FormFeedback valid>
                                Valid Date
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="select">City</Label>
                            <Input
                                valid={validate.cityState === 'has-success'}
                                invalid={validate.cityState === 'has-danger'}
                                onChange={handleInputValues}
                                type="select"
                                value={newPatient.city}
                                name="city"
                                id="city">
                                <option>NA</option>
                                <option>Ramallah</option>
                                <option>Jenin</option>
                                <option>Nablus</option>
                                <option>Hebron</option>
                                <option>Bethlahem</option>
                                <option>Gaza</option>
                                <option>Tubas</option>
                                <option>Qalqilya</option>
                            </Input>
                            <FormFeedback invalid>
                                Make sure to fill a select city
                        </FormFeedback>
                            <FormFeedback valid>
                                Well done!
                        </FormFeedback>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onCreateUpdatePatient}>{(update ? "Update" : "Add")}</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>


        </>
    )

}
export default PatientDataTable;
