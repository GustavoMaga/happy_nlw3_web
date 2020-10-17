import React from 'react';

//import de imagens
import logoImg from '../images/logo.svg';

//import de icons do react
import {FiArrowRight} from 'react-icons/fi';

//style da page
import '../styles/pages/landing.css';

//import do Link para virar uma SPA
import { Link } from 'react-router-dom'

function Landing() {

    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Logo Happy" />
                <main>
                    <h1>Leve felicidade para o mundo.</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>
                <div className="location">
                    <strong>Osasco</strong>
                    <span>São Paulo</span>
                </div>
                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba( 0, 0, 0, 0.7)" />
                </Link>
            </div>
        </div>
    );

}

export default Landing;