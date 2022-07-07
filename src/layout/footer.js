import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FaTwitter, FaTelegram, FaInstagram, FaDiscord } from "react-icons/fa";

import { FooterStyle } from './style';

const Footer = () => {
  return (
    <footer class="footer-main">
        <div class="container">
            <div class="footer-inner">
                <div class="Social_list">
                    <ul class="social_list">
                        <li>
                            <a href="http://codemeg.com/demo-site/space/"><img src="./images/telegram.png" alt="Telegram" /></a>
                        </li>
                        <li>
                            <a href="http://codemeg.com/demo-site/space/"><img src="./images/twiter.png" alt="Twiter" /></a>
                        </li>
                        <li>
                            <a href="http://codemeg.com/demo-site/space/"><img src="./images/facebook.png" alt="Facebook" /></a>
                        </li>
                        <li>
                            <a href="http://codemeg.com/demo-site/space/"><img src="./images/youtube.png" alt="Youtube" /></a>
                        </li>
                    </ul>
                </div>
                <div class="cmpny-copyright">
                    Copyright © 2022 | All rights reserved
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;