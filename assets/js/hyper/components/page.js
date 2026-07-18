import { h, app } from "hyperapp";
import { jsxify } from '../config/utilities.js';
import { SiteNavigation } from "./siteNavigation.js";
const jsx = jsxify(h) /** @jsx jsx */


/*
    Page component
*/
export const Page = (_, content) => (
    <main class="page">
        {content}
    </main>
)