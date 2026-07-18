import { h, text } from "hyperapp";

export const jsxify = (h) => (type, props, ...children) =>
  typeof type === "function"
    ? type(props, children)
    : h(
        type,
        props || {},
        [].concat(...children).map((x) =>
          typeof x === "string" || typeof x === "number" ? text(x) : x
        )
      )
