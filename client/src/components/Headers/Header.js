import { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';
import NumberFormat from 'react-number-format';

// Core dependencies
import highestBy from '../../hooks/highestBy';

const Header = ({ transactions }) => {
  const [tops, setTops] = useState({ users: [], est: [], xRate: [] });
  useEffect(() => {
    const users = highestBy(transactions, 'user.firstName');
    const est = highestBy(transactions, 'establishment.name');
    const xRate = highestBy(transactions, 'rateId.name');
    setTops({ ...tops, users, est, xRate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions]);

  const { users: topUser, est, xRate } = tops;

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Top Exchange Pair
                        </CardTitle>
                        <p className="h2 font-weight-bold mb-0">
                          <ThousandsSeparator value={xRate[1]} />
                          <small className="ml-2 mb-0 text-muted text-sm">
                            Transaction
                          </small>
                        </p>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-nowrap">{xRate[0]}</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>

              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Top Employee
                        </CardTitle>
                        <p className="h2 font-weight-bold mb-0">
                          <ThousandsSeparator value={topUser[1]} />
                          <small className="ml-2 mb-0 text-muted text-sm">
                            Transaction
                          </small>
                        </p>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-nowrap">{topUser[0]}</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>

              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Top Establishment
                        </CardTitle>
                        <p className="h2 font-weight-bold mb-0">
                          <ThousandsSeparator value={est[1]} />
                          <small className="ml-2 mb-0 text-muted text-sm">
                            Transaction
                          </small>
                        </p>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-nowrap">{est[0]}</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>

              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Transactions Amount
                        </CardTitle>
                        <p className="h2 font-weight-bold mb-0">
                          <ThousandsSeparator value={transactions.length} />
                          <small className="ml-2 mb-0 text-muted text-sm">
                            Transaction
                          </small>
                        </p>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-nowrap">All Transaction Made</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

const ThousandsSeparator = ({ value }) => (
  <NumberFormat value={+value} displayType={'text'} thousandSeparator />
);
export default Header;
