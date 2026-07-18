import { h, app } from "hyperapp";
import { jsxify } from '../config/utilities.js';
import { Page  } from "../components/page.js";
import { SiteNavigation } from "../components/siteNavigation.js";
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
            <SiteNavigation />
            <section class="template">
                <p>About pagecontent goes here</p>
            </section>
        </Page>
    )   
}