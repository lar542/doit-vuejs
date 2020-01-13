<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
    return {
      todoItems: [] //로컬 스토리지의 데이터를 담을 뷰 데이터
    }
  },
  //뷰 인스턴스가 생성되자마자 뷰 데이터에 접근할 수 있도록
  //로컬 스토리지의 데이터를 뷰 데이터로 옮긴다
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem); //로컬 스토리지에 추가
      this.todoItems.push(todoItem);            //뷰 데이터에 추가
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);  //로컬 스토리지에서 삭제
      this.todoItems.splice(index, 1);    //뷰 데이터에서 삭제
      //배열의 특정 인덱스에서 부여한 숫자만큼의 인덱스를 삭제하는 자바스크립트 내장 API
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
