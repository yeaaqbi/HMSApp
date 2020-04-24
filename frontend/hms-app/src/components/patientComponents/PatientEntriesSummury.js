import React from 'react'
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { useSelector } from "react-redux";
const PatientEntriesSummury = props => {

    const summuryInfo = useSelector(state => state.patientEntriesReducer.summuryInfo);


    return (
        <div className="container-summury">
            <div className="col col1">
                <h1 >Patient<br />Records</h1>
                <br />
                <h2 >{summuryInfo.entriesCount}</h2>

            </div>
            <div className="col col2">
                <h1 >Departments<br />Visited</h1>
                <br />
                <h2 >{summuryInfo.departmentsVisited}</h2>
            </div>
            <div className="col col3">
                <h1 >Bills<br />Average</h1>
                <br />
                <h2 >{summuryInfo.billsAvg}$</h2>

            </div>
        </div>
    )
}
export default PatientEntriesSummury;
