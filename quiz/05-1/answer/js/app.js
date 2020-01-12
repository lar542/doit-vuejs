var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    //할 일 #1
    secondMessage: 'with Do it! Easys Publishing',
    uid: '20',
    //할 일 #2
    flag: true,
    //할 일 #4
  },
  methods: {
    //ES6 문법
    clickBtn() {
      console.log("hi");
    },
    //ES5 문법
    /*
    clickBtn: function() {
      console.log("hi");
    }
    */
    //할 일 #3
    clickBtn2() {
      console.log("btn2 is clicked");
    }
  }
});
