import React from 'react'
import { useSelector } from "react-redux";

const PatientDataGraph = () => {
    let title = '# Of Patients Per City';
    const { citiesCount, filters } = useSelector(state => state.patientReducer);
    if (filters != null) {
        if (filters.month) {
            title += ' Month: ' + filters.month;
        }
        if (filters.year) {
            title += ' Year: ' + filters.year;
        }
    }
    return (
        <>
            <table className="graph">
                <caption className="title">{title}</caption>
                <tbody>
                    {
                        citiesCount.map(item => {
                            const cityCount = citiesCount.map(item => parseInt(item.patients)).reduce((prev, next) => prev + next);
                            return (
                                <tr style={{ height: (item.patients / cityCount * 100) }}>
                                    <th scope="row">{item.city}</th>
                                    <td><span>{item.patients}</span></td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default PatientDataGraph;
