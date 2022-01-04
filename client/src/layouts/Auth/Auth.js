import { useEffect, useRef } from "react";
import { Container, Row } from "reactstrap";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";

// core components
import AuthNavbar from "../../components/Navbars/AuthNavbar";
import AuthFooter from "../../components/Footers/AuthFooter";

import routes from "../../Navigation/routes";

const Auth = () => {
  const mainContent = useRef(null);
  const location = useLocation();

  useEffect(() => {
    //document.body.classList.add("bg-default");
    return () => document.body.classList.remove("bg-default");
  }, []);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={"routes-" + key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <Row className="mt-2 mr-2">
          <div className="col-md-3 offset-md-10 mr-2"></div>
        </Row>
        <AuthNavbar />

        {/* Page content */}
        <Container className="mt-8 pb-5">
          <Row className="justify-content-center">
            <Switch>
              {getRoutes(routes)}

              <Redirect path="/" to="/auth/landing" />
            </Switch>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default Auth;
