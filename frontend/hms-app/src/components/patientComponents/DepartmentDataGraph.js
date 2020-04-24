import React from 'react'
import { useSelector } from "react-redux";
const DepartmentsDataGraph =() => {
    let title = '# Of Records Per Department';
    const departmentsVisitsList = useSelector(state => state.patientEntriesReducer.departmentsCount);
    const departmentsTypesList = useSelector(state => state.departmentReducer.departmentsTypes);
    const { filters } = useSelector(state => state.patientReducer);
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
                        departmentsVisitsList.map(item => {
                            const allVisits = departmentsVisitsList.map(item => parseInt(item.visits)).reduce((prev, next) => prev + next);
                            return (
                                <tr key={item.departmentId} style={{ height:  (item.visits/allVisits*100)}}>
                                    <th scope="row">{(departmentsTypesList.find(type => type.id ==item.departmentId) != undefined?departmentsTypesList.find(type => type.id ==item.departmentId).name:"")}</th>
                                    <td><span>{item.visits}</span></td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default DepartmentsDataGraph;
