import React, { useState } from 'react'
import Patient from './patientComponents/Patient'

export default function Filters() {
    const [filters, setFilters] = useState(
        {
            year: 1991,
            month: 13,
            ageFrom: 5,
            ageTo: 50,
            city: "Ramallah",
            department: "Children"
        },

    );
    const [filtersFilled, setFiltersFilled] = useState(
        {
            isFilled: false
        }
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        setFiltersFilled({ isFilled: true });
        setFilters(
            {
                year: e.target.elements.year.value,
                month: e.target.elements.month.value,
                ageFrom: e.target.elements.fromAge.value,
                ageTo: e.target.elements.toAge.value,
                city: e.target.elements.city.value,
                department: e.target.elements.department.value
            }
        )


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <span>Year</span>
                <select name="year">
                    <option value="">Please select date</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                </select>
                <span>Month</span>
                <select name="month">
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
                <input name="fromAge" type="number" min="1" />
                <span>Age To</span>
                <input name="toAge" type="number" min="1" />
                <span>City</span>
                <select name="city">
                    <option value="">Please select city</option>
                    <option value="Ramallah">Ramallah</option>
                    <option value="Jenin">Jenin</option>
                    <option value="Nablus">Nablus</option>
                </select>
                <span>Department</span>
                <select name="department">
                    <option value="">Please select department</option>
                    <option value="Children">Children</option>
                    <option value="Heart">Heart</option>
                    <option value="Teeth">Teeth</option>
                </select>
                <input type="submit" value="Filter" />
            </form>
            <Patient />
        </div>
    )
}
