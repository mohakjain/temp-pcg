/** Author: Mohak Jain */

import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Subtitle from "../components/subtitle"


import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/nav-bar.css'


import accenture from "../images/careers/accenturelogo-min.png"
import amazon from "../images/careers/amazonlogo-min.png"
import amgen from "../images/careers/amgenlogo-min.png"
import apple from "../images/careers/applelogo-min.png"
import bain from "../images/careers/bainlogo-min.png"
import bcg from "../images/careers/bcglogo-min.png"
import citi from "../images/careers/citilogo-min.png"
import columbia from "../images/careers/columbiauniversitylogo.png"
import forbes from "../images/careers/forbeslogo-min.jpg"
import gates from "../images/careers/gatesfoundationlogo-min.png"
import genentech from "../images/careers/genentech-logo-min.png"
import google from "../images/careers/googlelogo-min.png"
import ibm from "../images/careers/ibmlogo-min.png"
import jane from "../images/careers/janestreet-min.png"
import jnj from "../images/careers/johnsonandjohnsonlogo-min.png"
import mayo from "../images/careers/mayoclinic-min.png"
import merrill from "../images/careers/merrilllogo-min.png"
import morgan from "../images/careers/morganstanleylogo-min.png"
import neuralink from "../images/careers/neuralinklogo-min.png"
import roche from "../images/careers/rochelogo-min.png"
import stanford from "../images/careers/stanfordlogo.png-min.png"
import ushouse from "../images/careers/USHouseofReps-min.png"


// Manipulate MaxHeight and MaxWidth here to best align pictures
var mh = 100;
var mw = 180;

const Careers = ({}) => {

    return (
        <Container fluid style={{paddingBottom: '1rem'}}>

            {/* Title that says Careers */}
            <Subtitle text='Future Careers'/>

            {/* text about careers */}
            <p style = {{textAlign: 'center', }}>
            Phoenix members go on to work in a variety of industries and companies. Ranging from working in the healthcare field to exploring tech and of course consulting, our alumni carry the lessons and experience they've gained from Phoenix far into the future.
            </p>

            {/* a bunch of pictures */}

            <center>
            {/* Consulting */}
            <img src={accenture} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />
            <img src={bain} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />
            <img src={bcg} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />

            {/* Tech */}
            <img src={google} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />
            <img src={amazon} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />
            <img src={apple} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />
            <img src={ibm} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />            

            {/* Pharma/Biotech */}
            <img src={jnj} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />
            <img src={amgen} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />
            <img src={roche} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />
            <img src={neuralink} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />

            {/* Banking/Finance */}
            <img src={merrill} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />
            <img src={morgan} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />
            <img src={citi} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />  
            <img src={jane} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />

            <img src={forbes} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />

            {/* Universities */}
            <img src={columbia} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />
            <img src={stanford} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />
            <img src={mayo} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />

            {/* Misc. */}
            <img src={ushouse} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />
            <img src={gates} style={{maxWidth: mw, maxHeight: mh, paddingRight: '1rem'}} />

            </center>
        </Container>
    )
}
export default Careers
