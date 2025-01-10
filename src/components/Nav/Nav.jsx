import { Form, NavLink } from "react-router-dom";
import logomark from "../../assets/logomark.svg";
import { TrashIcon } from '@heroicons/react/24/solid'
import PropTypes from "prop-types";
const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to={`/`} aria-label="Go To Home">
        <img src={logomark} height={30} alt="" />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form method="post" action="/logout" onSubmit={e => {
            if(!confirm("Delete User and All Data?")){
                e.preventDefault();
            }
        }}>
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20}/>
          </button>
        </Form>
      )}
    </nav>
  );
};

Nav.propTypes = {
    userName: PropTypes.string
}

export default Nav;
