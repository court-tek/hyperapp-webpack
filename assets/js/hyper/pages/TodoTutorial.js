import { h, app } from "hyperapp";
import { jsxify } from '../config/utilities.js';
import { Page  } from "../components/page.js";
import { SiteNavigation } from "../components/siteNavigation.js";
const jsx = jsxify(h) /** @jsx jsx */
/*
    Actions
*/

/*
    Todo App page
*/
export default function TodoTutorial(props) {
    return (
        <Page>
            <section class="todo">
                <SiteNavigation />
                <div class="container">
                    <h1>Template</h1>
                    <p>content goes here</p>
                </div>
            </section>
        </Page>
    )   
}