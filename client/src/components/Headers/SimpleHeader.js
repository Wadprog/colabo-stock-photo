import { Container } from 'reactstrap';

const Header = ({ children }) => {
  return (
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-8 d-print-none">
      <Container fluid>
        <div className="header-body">{children}</div>
      </Container>
    </div>
  );
};

export default Header;
