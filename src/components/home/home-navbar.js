import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/home-nav-bar.css'


const HomeNavBar = ({}) => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pcg-logo-light.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
    return (
        <Container className='pcg-hnavbar-container' fluid>
            <Navbar expand='md' className='pcg-hnavbar-all'>
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
                    <Nav.Item className='pcg-hnavbar-item'>
                        <Link to='/about' className='pcg-hnavbar-link pcg-hnav-underline' activeClassName='active'>About</Link>
                    </Nav.Item>
                    <Nav.Item className='pcg-hnavbar-item'>
                        <Link to='/projects' className='pcg-hnavbar-link pcg-hnav-underline' activeClassName='active'>Projects</Link>
                    </Nav.Item>
                    <Nav.Item className='pcg-hnavbar-item'>
                        <Link to='/blog' className='pcg-hnavbar-link pcg-hnav-underline' activeClassName='active'>Blog</Link>
                    </Nav.Item>
                    <Nav.Item className='pcg-hnavbar-item'>
                        <Link to='/join' className='pcg-hnavbar-link pcg-hnav-underline' activeClassName='active'>Join</Link>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default HomeNavBar
