import { defineStore } from  'pinia'

export const useTodoListStore = defineStore('todoList', {
  // state
  state: () => ({
    todoList: [],
    id: 0
  }),
  // getters
  // actions
  actions: {
    addTodo(item) {
      this.todoList.push({
        item, 
        id: this.id++,
        completed: false
      })
    },
    deleteTodo(itemId) {
      this.todoList = this.todoList.filter((todoObject) => todoObject.id !== itemId)
    },
    toggleCompleted(idToFind) {
      const todo = this.todoList.find((todoObject) => todoObject.id === idToFind)
      if(todo) {
        todo.completed = !todo.completed
      }
    }
  }
})