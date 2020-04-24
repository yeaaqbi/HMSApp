import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Patient from './patientComponents/Patient'
import { fetchAllDepartments } from '../actions/departmentActions'
import { fetchPatientEntries, filterPatientsEntries } from '../actions/patientEntriesActions'
import { filterPatients } from '../actions/patientActions'
import { FormFeedback, Input } from 'reactstrap'
const Filters = () => {

    const dispatch = useDispatch();

    const departmentsTypes = useSelector(state => state.departmentReducer.departmentsTypes);

    const [validate, setValidate] = useState({
        ageFromState: 'has-success',
        ageToState: 'has-success',
        ageDiffr: 'has-success'
    });
    const [filters, setFilters] = useState(
        {
            year: 0,
            month: 0,
            ageFrom: 0,
            ageTo: 0,
            city: "",
            department: ""
        },

    );
    useEffect(() => {
        dispatch(fetchAllDepartments());
        dispatch(fetchPatientEntries(0));
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate.ageFromState == 'has-success' && validate.ageToState == 'has-success') {
            dispatch(filterPatients(filters));
            dispatch(filterPatientsEntries(filters));
        }
    }
    const handleInputValues = e => {
        e.preventDefault();
        validateInput(e);
        setFilters({ ...filters, [e.target.name]: e.target.value });
    }
    const validateInput = (e) => {
        if (e.target.name == 'fromAge') {
            if (e.target.value > 0) {
                setValidate({ ...validate, ageFromState: 'has-success' });
            } else {
                setValidate({ ...validate, ageFromState: 'has-danger' });
            }
        }
        if (e.target.name == 'toAge') {
            if (e.target.value > 0) {
                setValidate({ ...validate, ageToState: 'has-success' });
            } else {
                setValidate({ ...validate, ageToState: 'has-danger' });
            }
        }
    }
    return (
        <div className="main-container">
            <div className="filters-bar">
                <div className="filters-form">
                    <div className="input-field">
                        <label>Year</label>
                        <div className="custom-select">
                            <select name="year" onChange={handleInputValues} >
                                <option value="">Select</option>
                                <option value="1990">1990</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1990">1993</option>
                                <option value="1991">1994</option>
                                <option value="1992">1995</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-field">
                        <label>Month</label>
                        <div className="custom-select">
                            <select name="month" onChange={handleInputValues} >
                                <option value="">Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-field">
                        <label>Age From</label>
                        <Input
                            invalid={validate.ageFromState === 'has-danger'}
                            name="fromAge"
                            type="number"
                            min="1"
                            onChange={handleInputValues}
                            className="input" />
                        <FormFeedback invalid>
                            The age should be > 0
                            </FormFeedback>
                    </div>
                    <div className="input-field">
                        <label>Age To</label>
                        <Input
                            invalid={validate.ageToState === 'has-danger'}
                            name="toAge"
                            type="number"
                            min="1"
                            onChange={handleInputValues}
                            className="input" />
                        <FormFeedback invalid>
                            The age should be > 0
                            </FormFeedback>
                    </div>
                    <div className="input-field">
                        <label>City</label>
                        <div className="custom-select">
                            <select name="city" onChange={handleInputValues}  >
                                <option value="">Select</option>
                                <option value="Ramallah">Ramallah</option>
                                <option value="Jenin">Jenin</option>
                                <option value="Nablus">Nablus</option>
                                <option value="Hebron">Hebron</option>
                                <option value="Bethlahem">Bethlahem</option>
                                <option value="Gaza">Gaza</option>
                                <option value="Tubas">Tubas</option>
                                <option value="Qalqilya">Qalqilya</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-field">
                        <label>Department</label>
                        <div className="custom-select">
                            <select name="department" onChange={handleInputValues} >
                                <option value="">Select</option>
                                {
                                    departmentsTypes.map(dept => {
                                        return (
                                            <option key={dept.id} value={dept.id}>{dept.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="input-field">
                        <label></label>
                        <input type="submit" onClick={handleSubmit} value="Filter" className="btn" />
                    </div>
                </div>

            </div>

            <div className="patients-container">
                <Patient />
            </div>
        </div>
    )
}
export default Filters;
