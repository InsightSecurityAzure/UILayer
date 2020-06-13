import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
class AddUser extends Component {
  render() {
    return (
        <Container>
          <Row className="justify-content-top">
            <Col md="15" lg="13" xl="12">
              <Card className="mx-0" style={{ border: 'none' }}>
                <CardBody className="p-4" >
                  <Form>
                    <h1>Add User</h1>
                    <p className="text-muted">IAM Access</p>
                    <Row>
                    <Col xs="6">
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="User Id" autoComplete="username" />
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="First Name" autoComplete="email" />
                      </InputGroup>
                      
                     <InputGroup className="mb-3">
                    
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Last Name" autoComplete="username" />
                    </InputGroup>
                   
                    </Col>

                    <Col xs="6">
                    
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Contact" autoComplete="username" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Role" />
                    </InputGroup>
                
                   
                    </Col>
                    </Row>
                  </Form>
                </CardBody>               
              </Card>
            </Col>
            
            <Button color="success" block>Add User</Button>
          </Row>
        </Container>
    );
  }
}

export default AddUser;
