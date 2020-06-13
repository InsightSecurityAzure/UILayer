import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
class Register extends Component {
  render() {
    return (
        <Container>
          <Row className="justify-content-top">
            <Col md="15" lg="13" xl="12">
              <Card className="mx-0" style={{ border: 'none' }}>
                <CardBody className="p-4" >
                  <Form>
                    <h1>Agreement</h1>
                    <p className="text-muted">Welcome to Continous Compliance</p>
                    <Row>
                    <Col xs="6">
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Organization Name" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-check"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Billing Period" autoComplete="email" />
                      </InputGroup>
                     <InputGroup className="mb-3">
                     <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-shield"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Device Quota (Linux)" autoComplete="username" />
                    </InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-calendar"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Subscription Tenure" autoComplete="username" />
                    </InputGroup>
                    </Col>

                    <Col xs="6">
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Agreement Name" autoComplete="username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-shield"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Device Quota (Android)" autoComplete="username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-shield"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Device Quota (Windows)" autoComplete="username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-tag"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="--">-- Select Currency --</option>
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                       </Input>
                    </InputGroup>
                    </Col>
                    </Row>
                  </Form>
                </CardBody>               
              </Card>
            </Col>
            <Button color="success" block>Accept Agreement</Button>
          </Row>
        </Container>
    );
  }
}

export default Register;
