const addOneItem = (state, todoItem) => {
    const obj = {completed: false, item: todoItem};
    state.todoItems.push(obj);
    localStorage.setItem(todoItem, JSON.stringify(obj));
}
const removeOneItem = (state, payload) => {
    state.todoItems.splice(payload.index, 1);
    localStorage.removeItem(payload.todoItem.item);
}
const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
const clearAll = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAll }