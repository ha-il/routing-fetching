import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Root() {
  return (
    <>
      <Nav>
        <ul>
          <li>
            <Link to={`/`}>HOME</Link>
          </li>
        </ul>
      </Nav>
      <Outlet />
    </>
  );
}

const Nav = styled.nav`
  padding: 1rem 1rem 0 1rem;

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
  }
  a:hover {
    color: #e1b12c;
  }
`;
