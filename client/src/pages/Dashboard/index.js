import React from 'react'
import { Link } from 'react-router-dom'
import { Container, List, Card, CardBody, Row, Col, Button } from 'reactstrap'

function DashBoard() {
  return (
    <Container fluid>
      <div className="pb-8 pt-5 pt-md-8" />

      <div className="mt-">
        <Card className="border-0 border-bottom border-right">
          <CardBody>
            <p>
              <h1>We’ve been waiting for you!</h1>
              <h5 className="text-muted">WELCOME TO THE CONTRIBUTOR PANEL!</h5>
              Now that you’re here, let’s make the most of our time together.
              You’re one step away from becoming a Collabo-stock contributor and
              converting your resources into earnings. This is what you have to
              do next:
              <List className="mt-2">
                <li>
                  <Link to="/">
                    <i className="fa fa-file-upload text-success mr-2" />
                    Upload and send your best resources. Quality is a must:
                    let’s see how amazing you are.
                  </Link>
                </li>
                <li>
                  <i className="fa fa-star text-success mr-2" />
                  We believe in second chances, so you have two attempts to show
                  your true potential.
                </li>
                <li>
                  <i className="fa fa-book text-success mr-2" />
                  To make sure your resources are accepted, read first our
                  Guidelines.
                </li>
              </List>
            </p>
          </CardBody>
          To see the onboarding again, click here
        </Card>
        <hr />
        <Row>
          <Col>
            <h4>Your last files</h4>
          </Col>
          <Col>
            <h4>Freepik's top files</h4>
          </Col>
        </Row>
        <Row>
          <h4>Recommended categories</h4>
          <h5>
            Our recommendations of what to design or shoot on these upcoming
            events
          </h5>
          Bunch of buttons
        </Row>
        <Row>
          <h4>Hall of fame</h4>
          <h5>These artist are on the top of the ranking</h5>
          Bunch of component for the users
        </Row>

        <Row>
          <h4>Latest trend</h4>
          Bunch of component for the users
        </Row>
      </div>
    </Container>
  )
}

export default DashBoard
