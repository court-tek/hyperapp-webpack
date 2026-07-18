import { h, app } from "hyperapp";
import { jsxify } from '../config/utilities.js';
import { Menu } from "./siteNavigation.js";
const jsx = jsxify(h) /** @jsx jsx */

/*
    Hyperapp logo style objects y functions
*/
const svgStyle = {
    fillrule: "evenodd",
    cliprule: "evenodd",
    strokeLineJoin: "round",
    strokeMiterLimit: 2
}
const pathStyle = {
    fill: "#000000",
    fillRule: "nonzero"
}

const getPathStyle = (color) => {
    const fill = color;   
    return {
        fill, 
        fillRule: "nonzero"
    }
}
/*
    Hyperapp logo component
*/
export const HyperappLogoDos = (props) => (
    <svg class="hyperapp-logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSerif="http://www.serif.com/" width="100%" height="100%" viewBox="0 0 105 65" version="1.1" xmlSpace="preserve" style={svgStyle}>
          <path d="M64.409,37.484l-26.925,0l0,26.989l-10.5,0l0,-26.989l-26.984,0l0,-10.5l26.984,0l0,-26.984l10.5,0l0,26.984l21.803,0l5.122,10.5Zm8.694,-37.484l-12.384,0l31.444,64.473l12.383,0l-31.443,-64.473Z" style={getPathStyle(props.hue)}></path>
    </svg>
)