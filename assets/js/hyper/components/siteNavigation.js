import { h, app } from "hyperapp";
import { jsxify } from '../config/utilities.js';
import Welcome from "../pages/Welcome.js";
import { HyperappLogo } from "./hyperappLogo.js";
import TimerTutorial from "../pages/TimerTutorial.js";
import TodoTutorial from "../pages/TodoTutorial.js";
import AboutPage from "../pages/About.js";
const jsx = jsxify(h) /** @jsx jsx */

/*
    Site navigation
*/
export const SiteNavigation = () => (
    <header class="header">
        <div class="header__logo">
            <HyperappLogo hue={"#fff"} />
        </div>

        <nav class="header__nav">
            <a href="#" class="header__link">home</a>
            <a href="#timer" class="header__link">timer app</a>
            <a href="#todo" class="header__link">todo app</a>
            <a href="#about" class="header__link">about</a>
            <a href="#about" class="header__link">
                <i class="fa fa-cog"></i>
            </a>
            <a href="#about" class="header__link">
                <i class="fa fa-user"></i>
            </a>
        </nav>
    </header> 
)

export const ROUTES = {
    '#': Welcome,
    '#timer': TimerTutorial,
    '#todo': TodoTutorial,
    '#about': AboutPage,
}

{/* <nav class="navbar">
        <div class="navbar__menu-area">
            <div class="navbar__logo">
                <a href="#">
                    <HyperappLogo hue={"#111"} />
                </a>
            </div>

            <div class="navbar__main-menu">
                <ul class="navbar__u-list">
                    <li class="navbar__l-item">
                        <a href="#" class="navbar__link">home</a>
                    </li>
                    <li class="navbar__l-item">
                        <a href="#timer" class="navbar__link">tutorial</a>
                    </li>
                    <li class="navbar__l-item">
                        <a href="" class="navbar__link">
                            <i class="fa fa-cog"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav> */}