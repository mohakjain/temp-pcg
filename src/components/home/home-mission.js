import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/home-mission.css'

const HomeMission = () => {
    return (
        <div className='pcg-wrapper-white'>
            <Container>
                <Row className='pcg-home-mission-row'>
                    <Col md={8}>
                    <h1 className='pcg-home-mission-h1'>tl;dr</h1>
                    <p className='pcg-home-mission-p'>
                        We are a consulting group, a hub of healthcare interest,
                        and a tight-knit student community at UC Berkeley. 
                        Our members engage in deep projects with carefully chosen firms, 
                        and we are committed
                        to driving healthcare innovation and access on campus and
                        across the world.
                    </p>
                    <Link to='/about' className='pcg-home-mission-link'>Read more</Link>
                    </Col>
                </Row>

            </Container>
        </div>

    )
}

export default HomeMission
