import React, { useState } from 'react'

export default function PatientDataTable() {
    const [patients, setPatients] = useState(
        [
            {
                id: 123123123,
                name: "Mohammed",
                email: "moh@gmail.com",
                dob: "13/9/1991",
                city: "Ramallah"

            },
            {
                id: 123123123,
                name: "Mohammed",
                email: "moh@gmail.com",
                dob: "13/9/1991",
                city: "Ramallah"

            },
            {
                id: 123123123,
                name: "Mohammed",
                email: "moh@gmail.com",
                dob: "13/9/1991",
                city: "Ramallah"

            }

        ]
    );
    return (
        <div>
            <h1>PatientDataTable</h1>
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
                                <td>{patient.dob}</td>
                                <td>{patient.city}</td>
                                <td><button>Delete</button><button>Edit</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </div>
    )
}
