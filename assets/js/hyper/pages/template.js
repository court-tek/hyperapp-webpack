import { h, app } from "hyperapp";
import { jsxify } from '../config/utilities.js';
import { Page  } from "../components/page.js";
const jsx = jsxify(h) /** @jsx jsx */
/*
    Actions
*/

/*
    Template page to create new pages quickly
*/
export default function Template(props) {
    return (
        <Page>
            <section class="template">
                <div class="container">
                    <h1>Template</h1>
                    <p>content goes here</p>
                </div>
            </section>
        </Page>
    )   
}