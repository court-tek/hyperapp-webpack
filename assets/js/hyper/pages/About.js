import { h, app } from "hyperapp";
import { jsxify } from '../config/utilities.js';
import { Page  } from "../components/page.js";
const jsx = jsxify(h) /** @jsx jsx */
/*
    Actions
*/

/*
    About page
*/
export default function AboutPage(props) {
    return (
        <Page>
            <section class="template">
                <div class="container">
                    <h1>About</h1>
                    <p>content goes here</p>
                </div>
            </section>
        </Page>
    )   
}