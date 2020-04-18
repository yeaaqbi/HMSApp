import React from 'react'
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { useSelector } from "react-redux";
export default function PatientEntriesSummury(props) {

    const summuryInfo = useSelector(state => state.patientEntriesReducer.summuryInfo);


    return (
        <>
            <Container>
                <Row xs="3">
                    <Col>
                        <Jumbotron fluid>
                            <Container fluid>
                                <h1 className="display-4">Patient<br/>Records</h1>
                                <p className="lead">{summuryInfo.entriesCount}</p>
                            </Container>
                        </Jumbotron>
                    </Col>
                    <Col>
                        <Jumbotron fluid>
                            <Container fluid>
                                <h1 className="display-4">Departments<br/>Visited</h1>
                                <p className="lead">{summuryInfo.departmentsVisited}</p>
                            </Container>
                        </Jumbotron>
                    </Col>
                    <Col>
                        <Jumbotron fluid>
                            <Container fluid>
                                <h1 className="display-4">Bills<br/>Average</h1>
                                <p className="lead">{summuryInfo.billsAvg}$</p>
                            </Container>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
