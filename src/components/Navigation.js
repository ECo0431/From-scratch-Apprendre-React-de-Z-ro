import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="active">
                Acceuil
            </NavLink>
            <NavLink exact to="/a-propos" activeClassName="active">
                À propos
            </NavLink>
        </div>
    );
};

export default Navigation;