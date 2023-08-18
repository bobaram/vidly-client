import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = { navCollapsed : false, linkName: '' }
    handleToggle = (e) => {
        this.setState({ navCollapsed: !this.state.navCollapsed, linkName: e.target.name ? e.target.name : '' });
    }
    render() { 
        const { user } = this.props;
        const { navCollapsed } = this.state;
        const getClassName = (linkName) => {
            return linkName === this.state.linkName ? 'nav-link text-white opacity-5' : 'nav-link text-white';
        };
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <Link className="navbar-brand text-white pr-5" to="/" >Vidly </Link>
                <button onClick={this.handleToggle} className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={ navCollapsed ? "navbar-collapse" : "collapse navbar-collapse" } id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink onClick={this.handleToggle} name="movies" className={getClassName('movies')} to="/movies">Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={this.handleToggle} name="customers" className={getClassName('customers')} to="/customers">Customers</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={this.handleToggle} name="rentals" className={getClassName('rentals')} to="/rentals">Rentals</NavLink>
                        </li>
                        {
                            !user &&
                            <React.Fragment>
                                <li className="nav-item">
                                    <NavLink onClick={this.handleToggle} name="login" className={getClassName('login')} to="/login">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={this.handleToggle} name="register" className={getClassName('register')} to="/register">Register</NavLink>
                                </li>
                            </React.Fragment>
                        }
                        {
                            user &&
                            <React.Fragment>
                                <li className="nav-item">
                                    <NavLink onClick={this.handleToggle} name="profile" className={getClassName('profile')} to="/profile">{user.name}</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={this.handleToggle} name="logout" className={getClassName('logout')} to="/logout">Logout</NavLink>
                                </li>
                            </React.Fragment>
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;