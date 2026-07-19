import { h, text } from "hyperapp";
import { jsxify } from "../config/utilities.js";
const jsx = jsxify(h) /** @jsx jsx */

/*
    actions
*/
/*
    Template page to create new pages quickly
*/
export default function NameHere(props) {
    return (
        <div className="template">
            <h1>This is a template.</h1>
        </div>  
    )
}