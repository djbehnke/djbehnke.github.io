Vue.component('nav-button', {
  props: ['nav'],
  template: '<li>{{nav.text}}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    siteList: [
      {id: 0, text: 'Home'},
      {id: 1, text: 'Resume'},
      {id: 2, text: 'Blog'}
    ]
  }
});

