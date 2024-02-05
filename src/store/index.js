import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            todos: [
                {
                    label: "Todo 1",
                    completed: true,
                },
                {
                    label: "Todo 2",
                    completed: false,
                },
            ]
        }
    },
    actions: {
        addToDo(context, item) {
            context.commit("ADD_TO_DO", item)
        },
        toggleToDo(context, item) {
            context.commit("UPDATE_TO_DO", item)
        }
    },
    mutations: {
        ADD_TO_DO(state, item) {
            state.todos.unshift(item)
        },
        UPDATE_TO_DO(state, item) {

            const index = state.todos.findIndex(
                (todoIterator) => todoIterator.label === item.label
            );

            state.todos[index] = item;

            console.log(state)
        }
    }
})

export default store
