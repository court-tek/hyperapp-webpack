// global actions
export const WithEnterKey = action => (state, payload) => {
    if (payload.key && payload.key === 'Enter') return action
    return state
}

export const WithTargetValue = action => (state, payload) => {
    if (payload.target && payload.target.value) return [action, payload.target.value]
    return state
}