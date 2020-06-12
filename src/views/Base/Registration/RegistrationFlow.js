import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane } from 'reactstrap';

const Register = React.lazy(() => import('../../Pages/Register/Register'));

class ListGroups extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
               <strong>Registration</strong> 
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4">
                    <ListGroup id="list-tab" role="tablist">
                      <ListGroupItem onClick={() => this.toggle(0)} action active={this.state.activeTab === 0} >Agreement</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(1)} action active={this.state.activeTab === 1} >Add Device</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(2)} action active={this.state.activeTab === 2} >Add Users</ListGroupItem>                     
                    </ListGroup>
                  </Col>
                  <Col xs="8">
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId={0} >
                        <Register />
                      </TabPane>
                      <TabPane tabId={1}>
                        
                      </TabPane>
                      <TabPane tabId={2}>
                        <p>Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris
                          nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur
                          est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et
                          deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla
                          laborum elit adipisicing pariatur cillum.</p>
                      </TabPane>
                      <TabPane tabId={3}>
                        <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
                          sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
                          aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
                          nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
                          eiusmod eu pariatur culpa mollit in irure.</p>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListGroups;
