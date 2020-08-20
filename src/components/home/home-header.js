import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Carousel from 'react-bootstrap/Carousel'
import header1 from "../../images/header1.jpg"
import header2 from "../../images/header2.jpg"
import header3 from "../../images/header3.png"
import HomeNavBar from "./home-navbar"


import "../../styles/home-header.css"
import 'bootstrap/dist/css/bootstrap.min.css';



const HomeHeader = () => {
    const header4 = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "header2.jpg" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)

    return (
        <div className='homeheader-frame'>
        <div className='homeheader-nav'>
            <HomeNavBar/>
        </div>
        <div className='homeheader-carousel'>
        <Carousel controls={false} slide={true} fade={true} interval={3000} indicators={false} className="pcg-homeheader-bg" as='div'>
            <Carousel.Item className="pcg-homeheader-item" activeClassName="pcg-homeheader-item" as='div'>
            <img src={header3} alt="header2" className="pcg-homeheader-img"/>
            <Container className='pcg-homeheader-container' fluid>
                <div className='pcg-homeheader-row'>
                    <Col lg={6} md={8}>
                    <h5 className='pcg-homeheader-tag'>PROJECT UPDATES</h5>
                    </Col>
                </div>
                <div className='pcg-homeheader-row'>
                    <Col lg={6} md={8}>
                    <h1 className='pcg-homeheader-msg'>Phoenix's Upcoming Projects and Initiatives</h1>
                    </Col>
                </div>
                    <div className='pcg-homeheader-row'>
                    <Col lg={6} md={8}>
                    <Link to='/about' className='pcg-homeheader-read-more'>Read more</Link>
                    </Col>
                </div>
            </Container>
            </Carousel.Item>
            <Carousel.Item className="pcg-homeheader-item" activeClassName="pcg-homeheader-item">
            <img src={header2} alt="header2" className="pcg-homeheader-img"/>
            <Container className='pcg-homeheader-container' fluid>
                <div className='pcg-homeheader-row'>
                    <Col lg={6} md={8}>
                    <h5>BLOG</h5>
                    </Col>
                </div>
                <div className='pcg-homeheader-row'>
                    <Col lg={6} md={8}>
                    <h1 className='pcg-homeheader-msg'>Demystifying Complex Payer Systems</h1>
                    </Col>
                </div>
                    <div className='pcg-homeheader-row'>
                    <Col lg={6} md={8}>
                    <Link to='/about' className='pcg-homeheader-read-more'>Read more</Link>
                    </Col>
                </div>
            </Container>
            </Carousel.Item>
            <Carousel.Item className="pcg-homeheader-item" activeClassName="pcg-homeheader-item">
            <img src={header2} alt="header2" className="pcg-homeheader-img"/>
            <Container className='pcg-homeheader-container' fluid>
                <div className='pcg-homeheader-row'>
                    <Col lg={6} md={8}>
                    <h5>JOIN US</h5>
                    </Col>
                </div>
                <div className='pcg-homeheader-row'>
                    <Col lg={6} md={8}>
                    <h1 className='pcg-homeheader-msg'>How Phoenix Trains the Healthcare Leaders of the Future</h1>
                    </Col>
                </div>
                    <div className='pcg-homeheader-row'>
                    <Col lg={6} md={8}>
                    <Link to='/about' className='pcg-homeheader-read-more'>Read more</Link>
                    </Col>
                </div>
            </Container>
            </Carousel.Item>
        </Carousel>
        </div>
        </div>
    );
}

export default HomeHeader


