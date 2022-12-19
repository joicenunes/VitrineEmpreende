import React from 'react';
import { Link } from 'react-router-dom';

import empreendeImg from '../../Assets/ft_condominio.png';

import { MdVpnKey } from 'react-icons/md';
import InputText from '../../Components/InputText';

import './style.css';
import Button from '../../Components/Button';
import portIcon from '../../Assets/icon_portfolio.png';

export default function Confirmation() {

    const imageConfig = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${empreendeImg})`;

    const handleLogin = async(evt) => {
        evt.preventDefault();
    }

    return ( <
        div className = 'access' >
        <
        div className = 'access-image'
        style = {
            { backgroundImage: imageConfig } }
        alt = 'Empreende UFC' >
        <
        div className = 'access-image-title' >
        Portfólio de Startups <
        /div> <
        /div> <
        div className = 'access-form' > { < img src = { portIcon }
            className = 'logo'
            alt = 'logo' / > } <
        form onSubmit = { handleLogin }
        className = 'form'
        alt = 'access-form' >
        <
        p >
        <
        strong > Confirme o seu cadastro! < /strong> <
        /p> <
        p > Um código foi enviado para o seu e - mail. < /p> <
        div className = 'access-fields' >
        <
        InputText color = 'primary'
        id = 'code'
        label = 'Código de confirmação'
        icon = { MdVpnKey }
        /> <
        /div> <
        Button block color = 'primary' >
        Entrar <
        /Button> <
        div className = 'form-links' >
        <
        p >
        Não recebeu ? < Link className = 'access-link'
        to = '/register' >
        Criar aqui para reenviar. <
        /Link> <
        /p> <
        /div> <
        /form> <
        /div> <
        /div>
    );
}