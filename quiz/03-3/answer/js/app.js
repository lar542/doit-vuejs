//할일 #1 sibling-component 등록
Vue.component('sibling-component', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
});

Vue.component('child-component', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'This is message',
    //할일 #2
    anotherMessage: 'This is anotherMessage'
  }
});
