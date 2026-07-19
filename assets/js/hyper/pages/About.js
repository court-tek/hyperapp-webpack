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
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt, tortor mattis porttitor consequat, velit libero vulputate augue, at pharetra enim eros quis ipsum. Curabitur volutpat ullamcorper placerat. Ut cursus odio ante, ac convallis ligula tincidunt non. Morbi porta id tortor varius dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Mauris vehicula eleifend neque, in luctus purus venenatis vitae. Praesent eu mi odio. Donec vel tellus hendrerit, semper dui id, auctor nulla. Curabitur mauris elit, fringilla vitae nisl in, pellentesque aliquet purus. In consectetur laoreet libero eget eleifend. Maecenas sollicitudin sit amet velit at ullamcorper.
                </p>
                <p>
                    Sed non neque dictum mi pretium dictum et quis nibh. Aliquam porta nunc mauris, ut iaculis risus posuere eget. Donec at purus convallis, tincidunt ipsum sed, tincidunt risus. Nunc id diam vitae ante venenatis consequat. Aenean diam dui, accumsan porta lobortis id, feugiat in urna. Fusce cursus mi ex, quis gravida ipsum facilisis sed. Quisque bibendum turpis nisi, nec aliquet mauris vulputate volutpat. Aenean tempus odio eget mollis mattis. Praesent vitae feugiat justo. Nullam leo nibh, suscipit quis posuere ut, mollis iaculis felis. Donec rhoncus molestie neque, vel iaculis tortor condimentum a.
                </p>
            </section>
        </Page>
    )   
}