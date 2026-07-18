  import { h, text, app } from "hyperapp";
  import { jsxify } from "./config/utilities.js";
  import { globalState } from "./state/globalState.js";
  import { HandleRoute, Hash } from "./lib/router.js";
  import "../../styles/main.scss";

  const jsx = jsxify(h) /** @jsx jsx */

  app({
    init: globalState,
    view: state => (
        <div class="">
          {state.page(state)}
        </div>
    ),  
    node: document.querySelector(".app"),
    subscriptions: state => [Hash(HandleRoute)]
  })
