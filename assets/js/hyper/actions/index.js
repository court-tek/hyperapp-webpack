// Todo App actions
export const AddHashTag = (state) => ({
    ...state,
    value: "",
    annoyingHashTags: state.annoyingHashTags.add(state.value),
})

export const AddTodo = (state) => ({
    ...state,
    value: "",
    todos: state.todos.concat(state.value),
})

export const NewValue = (state, event) => ({
    ...state,
    value: event.target.value,
})

// State Machine Tutorial
const DURATION = 15000;

function test(name) {
    return function(data) {
        return `${name} ${data}`
    }
}