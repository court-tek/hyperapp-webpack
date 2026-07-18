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
            <SiteNavigation />
            <section class="welcome">
                <h1 class="welcome__title">hyperapp</h1>
            </section>
        </Page>
    )   
}