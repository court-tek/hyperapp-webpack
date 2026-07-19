import { h, app } from "hyperapp";
import { jsxify } from '../config/utilities.js';
import { Page  } from "../components/page.js";
import { SiteNavigation } from "../components/siteNavigation.js";
const jsx = jsxify(h) /** @jsx jsx */
/*
    Actions
*/
const AddValue = (state) => ({
    ...state,
    value: "",
    todos: state.todos.concat(state.value)
})

const NewValue = (state, event) => ({
    ...state,
    value: event.target.value,
})
/*
    Todo App page
*/
export default function TodoTutorial(props) {
    const { value, todos } = props;
    return (
        <Page>
            <SiteNavigation />
            <section class="todo">
                <h1 class="todo__header">To do list</h1>
                
                <div class="todo__content-area">
                    <div class="todo__form-group">
                        <input class="todo__input" type="text" oninput={NewValue} />
                        <button class="todo__submit-btn" onclick={AddValue}>new!</button>
                    </div>

                    <ul class="todo__unordered-list">
                        {todos.map((todo) => <li class="todo__list-item">{todo}</li> )}
                    </ul>
                </div>
            </section>
        </Page>
    )   
}