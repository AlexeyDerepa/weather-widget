const updateTabsList = (state, action) => {
    let newTab = state.tabsList.find(item => item.id === action.payload.id);
    let tabsList = !!newTab
        ? state.tabsList.map(item => item.id === action.payload.id ? action.payload : item)
        : state.tabsList.concat(action.payload);
        return tabsList;
}

export const deleteTabFromTabsList = (state, action) => {
    return state.tabsList.filter(item => item.id !== action.payload.id)
}

export const activeTab = (state, action) => {
    return state.currentActiveTab === action.payload.id? null: state.currentActiveTab
}



export default updateTabsList;