import { h, text } from "hyperapp";
import { jsxify } from "../config/utilities.js";
const jsx = jsxify(h) /** @jsx jsx */
import { NewValue, AddHashTag } from "../actions/index.js";
import { SiteNavigation } from "./siteNavigation.js";

export default function ColtComponent(state) {
    const { movies, reviews, annoyingHashTags } = state.data;
    const movieSearch = movies.find(function(movie) {
        return movie.includes("Meteor")
    })

    const cenimaSearch = movies.find(function(param) {
        return param.indexOf("Under") === 0
    })

    const getStats = (arr) => {
        const max = Math.max(...arr);
        const min = Math.min(...arr);
        const sum = arr.reduce((sum, r) => sum + r);
        const avg = sum / arr.length;
        return {
            max,
            min,
            sum,
            avg
        }
    }

    const stats = getStats(reviews);

    const formStyle = {
        background: "hsl(234, 44%, 50%)",
        display: "grid",
        gap: "0.5rem",
    }

    const btnStyle = {
        background: "hsl(83, 45%, 61%)",
        padding: "10px 30px",
        border: "none",
        color: "000",
        fontWeight: 600,
        cursor: "pointer"
    }
    const uniqueTags = [...annoyingHashTags]
    const bannedTags = uniqueTags.map(element => {
        return <li style={{background: "#e5b73a", padding: "10px 15px", borderRadius: "5px"}}>{element}</li>;
    });
    return (
        <div>
            <div className="sets" style={{display: "grid", gap: "0.6rem"}}>
                <div className="sets__form-group" style={formStyle}>
                    <label for="">Annoying Hash Tags</label>
                    <input type="text" className="sets__input" oninput={NewValue} style={{padding: "10px 15px"}} />
                </div>
                <button className="sets__btn" onclick={AddHashTag} style={btnStyle}>Add</button>
            </div>
            <ul className="">
            </ul>
            <div>
                {stats.sum},{stats.min}
            </div>
            <div className="">
                {cenimaSearch}
            </div>
            <div className="">
                {2 + 2}
            </div>
            <div className="">
                {movieSearch}
            </div>
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
            <ul style={{display: "grid", gridTemplateColumns: "repeat(4, 100px)", alignItems: "center", gap: "1rem", marginTop: "20px"}}>
                {bannedTags}
            </ul>
        </div>
    )
}