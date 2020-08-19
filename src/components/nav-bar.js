import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/nav-bar.css'


const NavBar = ({}) => {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "pcg-logo-dark.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)
    
    return (
        <header>
        <Container className='pcg-navbar-container' fluid>
            <Navbar expand='md' className='pcg-navbar-all'>
                <Navbar.Brand>
                    <Link to='/'>
                    <Img
                        fixed={data.file.childImageSharp.fixed}
                        alt="PCG logo"
                    />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navBarResponsive"/>
                <Navbar.Collapse id="navBarResponsive">
                <Nav defaultActiveKey="/home" className='ml-auto'>
                    <Nav.Item className='pcg-navbar-item'>
                        <Link to='/about' className='pcg-navbar-link pcg-nav-underline' activeClassName='active'>About</Link>
                    </Nav.Item>
                    <Nav.Item className='pcg-navbar-item'>
                        <Link to='/projects' className='pcg-navbar-link pcg-nav-underline' activeClassName='active'>Projects</Link>
                    </Nav.Item>
                    <Nav.Item className='pcg-navbar-item'>
                        <Link to='/blog' className='pcg-navbar-link pcg-nav-underline' activeClassName='active'>Blog</Link>
                    </Nav.Item>
                    <Nav.Item className='pcg-navbar-item'>
                        <Link to='/join' className='pcg-navbar-link pcg-nav-underline' activeClassName='active'>Join</Link>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        </header>
    )
}

export default NavBar
