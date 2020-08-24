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


import gladstone from "../images/research/gladstone.png"
import hms from "../images/research/hms.png"
import igi from "../images/research/igi.png"
import lbnl from "../images/research/lbnl.jpg"
import nasaames from "../images/research/nasaames.png"
import stanfordmed from "../images/research/stanfordmed.png"
import ucsf from "../images/research/ucsf.png"

const Research = ({}) => {
    
    return (
        <Container fluid style={{paddingBottom: '1rem'}}>
           
            {/* Title that says Research */}
            <Subtitle text='Research Involvement'/>
            
            {/* text about research */}
            <p style = {{textAlign: 'center', }}> 
            Members from Phoenix are often involved with research in and out of Berkeley. We demonstrate our passion for research through our hefty list of undergraduate research involvements, both on and off campus.  
            </p>
            
            {/* a bunch of pictures */}
            <center>
            <Link a target='_blank' href='https://gladstone.org/' >
            <img src={gladstone} style={{maxWidth: 250, maxHeight: 100, paddingRight: '1rem'}} />
            </Link>
            <Link a target='_blank' href='https://hms.harvard.edu/' >
            <img src={hms} style={{maxWidth: 250, maxHeight: 100, paddingRight: '1rem'}} />
            </Link>
            <Link a target='_blank' href='https://innovativegenomics.org/' >
            <img src={igi} style={{maxWidth: 250, maxHeight: 100, paddingRight: '1rem'}} />
            </Link>
            <Link a target='_blank' href='https://www.lbl.gov/' >
            <img src={lbnl} style={{maxWidth: 250, maxHeight: 100, paddingRight: '1rem'}} />
            </Link>
            </center>
            <center>
            <Link a target='_blank' href='https://www.nasa.gov/ames/' >
            <img src={nasaames} style={{maxWidth: 250, maxHeight: 100, paddingRight: '1rem'}} />
            </Link>
            <Link a target='_blank' href='http://med.stanford.edu/' >
            <img src={stanfordmed} style={{maxWidth: 250, maxHeight: 100, paddingRight: '1rem'}} />
            </Link>
            <Link a target='_blank' href='https://www.ucsf.edu/' >
            <img src={ucsf} style={{maxWidth: 250, maxHeight: 100, paddingRight: '1rem'}} />
            </Link>
            </center>
            
            
            {/* and scores of other UC Berkeley labs */}
            <p style = {{textAlign: 'right', }}> ... and scores of UC Berkeley labs</p>


        </Container>
    )
}
export default Research