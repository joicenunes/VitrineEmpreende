import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Avatar from '../Avatar';
import empLogo from '../../Assets/logo_port.png';

export default function Header(props) {
    let [logged, /* setLogged */ ] = useState(localStorage.getItem('userId') !== null);
    let [userName, /* setUserName */ ] = useState(localStorage.getItem('userName'));

    return ( <
        header className = 'topbar' >
        <
        div className = 'col' >

        { < img src = { empLogo }
            className = 'logotipo'
            alt = 'logo' / > }

        <
        /div> <
        div className = 'col' > < /div> <
        div className = 'col right' >
        <
        div className = 'search-startup' >
        <
        Link to = '/showcase' > Buscar startup < /Link> <
        /div> <
        /div> <
        div className = 'col right' >
        <
        div className = 'user-avatar' > {
            logged ?
            <
            Link to = { `/management` } >
            <
            Avatar name = { userName }
            /> <
            /Link> : <
            Link to = '/login' >
            Entrar <
            /Link>
        }

        <
        /div> <
        /div> <
        /header>
    );
}