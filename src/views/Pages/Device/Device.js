import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
class AddDevice extends Component {
  render() {
    return (
        <Container>
          <Row className="justify-content-top">
            <Col md="15" lg="13" xl="12">
              <Card className="mx-0" style={{ border: 'none' }}>
                <CardBody className="p-4" >
                  <Form>
                    <h1>Add Device</h1>
                    <p className="text-muted">Add you device to make it compliant</p>
                    <Row>
                    <Col xs="6">
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FontAwesome name="laptop"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Device Id" autoComplete="username" />
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FontAwesome name="cog"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="IMEI" autoComplete="email" />
                      </InputGroup>
                      
                     <InputGroup className="mb-3">
                     <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <FontAwesome name="briefcase"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Device Type" autoComplete="username" />
                    </InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <FontAwesome name="android"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Device OS" autoComplete="username" />
                    </InputGroup>
                    </Col>

                    <Col xs="6">
                    
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-calendar"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="date" placeholder="Select Date" />
                    </InputGroup>
                    
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-shield"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Device Code" autoComplete="username" />
                    </InputGroup>
                   
                   
                    </Col>
                    </Row>
                  </Form>
                </CardBody>               
              </Card>
            </Col>
            
            <Button color="success" block>Accept Device</Button>
          </Row>
        </Container>
    );
  }
}

export default AddDevice;
