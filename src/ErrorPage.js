import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`
.container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

const ErrorPage = () => {
    return (
        <Wrapper>
            <div className="container">
                <h2>404 - Page Not Found</h2>
                <p>Oops! The page you’re looking for doesn’t exist.</p>
                <NavLink to="/">
                    <Button>Go To Home Page</Button>
                </NavLink>
            </div>
        </Wrapper>
    )
}

export default ErrorPage;