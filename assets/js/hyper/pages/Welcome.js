import { h, app } from "hyperapp";
import { jsxify } from '../config/utilities.js';
import { Page } from "../components/page.js";
import { SiteNavigation } from "../components/siteNavigation.js";
const jsx = jsxify(h) /** @jsx jsx */


/*
    welcome page
*/
export default function Welcome(props) {
    return (
        <Page>
            <section class="welcome">
                <SiteNavigation />
                Hello World
            </section>
        </Page>
    )   
}