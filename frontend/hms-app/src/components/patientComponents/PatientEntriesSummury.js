import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { fetchSummuryForPatient } from '../../actions/summuryActions'
export default function PatientEntriesSummury(props) {

    const { patientId } = props;

    const dispatch = useDispatch();

    const summuryInfo = useSelector(state => state.summuryReducer.summuryInfo);

    useEffect(() => {
        dispatch(fetchSummuryForPatient(patientId));
    }, [])

    return (
        <>
            <Container>
                <Row xs="3">
                    <Col>
                        <Jumbotron fluid>
                            <Container fluid>
                                <h1 className="display-4">Patient<br/>Records</h1>
                                <p className="lead">{summuryInfo.patientRecordsCount}</p>
                            </Container>
                        </Jumbotron>
                    </Col>
                    <Col>
                        <Jumbotron fluid>
                            <Container fluid>
                                <h1 className="display-4">Departments<br/>Visited</h1>
                                <p className="lead">{summuryInfo.departmentsVisitedCount}</p>
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
