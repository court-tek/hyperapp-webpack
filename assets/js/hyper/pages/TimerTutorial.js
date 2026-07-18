import { h, app } from "hyperapp";
import { jsxify } from '../config/utilities.js';
import { Page  } from "../components/page.js";
import { SiteNavigation } from "../components/siteNavigation.js";
const jsx = jsxify(h) /** @jsx jsx */

/*
    actions
*/
const DURATION = 15000 //ms = 15s

const Start = (state, event) =>
state.mode === "stopped"
? { 
    ...state,
    mode: "running",
    startedTime: event.timeStamp,
    remainingTime: DURATION,
    duration: DURATION
}
: state

const Pause = state =>
state.mode === "running"
? { ...state, mode: "paused" }
: state

const Continue = (state, event) =>
state.mode === "paused"
? { 
    ...state, 
    mode: "running",
    startedTime: event.timeStamp,
    duration: DURATION
}
: state

const Cancel = state => ({ ...state, mode: "stopped" })

/*
    Timer Tutorial page
*/
export default function TimerTutorial(props) {
    const { mode, remainingTime } = props;
    return (
        <Page>
            <SiteNavigation />
            <section class="timer">
                <button onclick={mode === "stopped" ? Start : Cancel}>
                    {mode === "stopped" ? "START" : "CANCEL"}
                </button>
                <button onclick={mode === "paused" ? Continue : Pause} disabled={mode === "stopped"}>
                    PAUSE
                </button>
                <p>current state: {mode}</p>
                {remainingTime && <p>Remaining {remainingTime} ms</p>}
            </section>
        </Page>
    )
}