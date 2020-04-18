import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Patient from './patientComponents/Patient'
import { fetchAllDepartments } from '../actions/departmentActions'
import { fetchPatientEntries } from '../actions/patientEntriesActions'
import Departments from './patientComponents/Departments';
export default function Filters() {

    const dispatch = useDispatch();

    const departmentsTypes = useSelector(state => state.departmentReducer.departmentsTypes);


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
        

    }
    const handleInputValues = e => {
        e.preventDefault();
        setFilters({ ...filters, [e.target.name]: e.target.value });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <span>Year</span>
                <select name="year" onChange={handleInputValues}>
                    <option value="">Please select date</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1990">1993</option>
                    <option value="1991">1994</option>
                    <option value="1992">1995</option>
                </select>
                <span>Month</span>
                <select name="month" onChange={handleInputValues}>
                    <option value="">Please select month</option>
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
                <span>Age From</span>
                <input name="fromAge" type="number" min="1" onChange={handleInputValues} />
                <span>Age To</span>
                <input name="toAge" type="number" min="1" onChange={handleInputValues} />
                <span>City</span>
                <select name="city" onChange={handleInputValues} >
                    <option value="">Please select city</option>
                    <option value="Ramallah">Ramallah</option>
                    <option value="Jenin">Jenin</option>
                    <option value="Nablus">Nablus</option>
                    <option value="Hebron">Hebron</option>
                    <option value="Bethlahem">Bethlahem</option>
                    <option value="Gaza">Gaza</option>
                    <option value="Tubas">Tubas</option>
                    <option value="Qalqilya">Qalqilya</option>
                </select>
                <span>Department</span>
                <select name="department" onChange={handleInputValues}>
                    <option value="">Please select department</option>
                    {
                        departmentsTypes.map(dept => {
                            return (
                                <option key={dept.id} value={dept.id}>{dept.name}</option>
                            )
                        })
                    }
                </select>
                <input type="submit" value="Filter" />
            </form>
            <hr />
            <Patient />
            <hr />
            <Departments />
        </div>
    )
}
