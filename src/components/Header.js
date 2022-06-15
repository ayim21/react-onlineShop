import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <div className="limitedWidthBlockContainer informations">
                <div className="limitedWidthBlock">
                    <ul>
                        <li><img src="../images/icons/phone.svg" alt="logo de téléphone" className="informations__phone" />01 23 45 67 89</li>
                        <li><img src="../images/icons/mail.svg" alt="logo d'une enveloppe" className="informations__mail" />support@name.com</li>
                        <li><img src="../images/icons/adress.svg" alt="logo d'un point de géolocalisation" className="informations__address" />10 quai de la charente | 75019 Paris 19</li>
                    </ul>
                </div>
            </div>
            <div className="limitedWidthBlockContainer menu">
                <div className="limitedWidthBlock">
                    <div>
                        <img className="logo" src="../images/logo.png" alt="Logo de l'entreprise" />
                    </div>
                    <nav>
                        <ul>
                            <div><li>Accueil</li></div>
                            <div><li>Panier</li></div>
                        </ul>
                    </nav>
                </div>
            </div>
            <img className="banniere" src="../images/banniere.png" alt="Bannière" />
        </header>
    );
};

export default Header;