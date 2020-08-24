/** Author: Mohak Jain */

import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/nav-bar.css"
import { Col } from "react-bootstrap"

const Subtitle = ({ text }) => {
  return (
    <Container fluid>
        <Row >
        <Col>
        <center>
        <h3
        style={{
          backgroundColor: "black",
          height: "2px",
          maxWidth: 1000,
          margin: '1.1rem 0 0 0',
          verticalAlign: 'middle',
          
        }}
      >
      </h3>
      </center>
        </Col>
        <Col md="auto"> 
        <center>
        <h3> {text} </h3>
      </center>
      </Col>

        <Col>
        <center>
        <h3
        style={{
          backgroundColor: "black",
          height: "2px",
          maxWidth: 1000,
          margin: '1.1rem 0 0 0',
        }}
      >
      </h3>
      </center>
        </Col>
     </Row>
      

    </Container>
  )
}
export default Subtitle
