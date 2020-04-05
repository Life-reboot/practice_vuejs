var app = new Vue({
  el: "#app",
  data: {
    message: "Hello from JavaScript!",
    name: "Peter",
  },
  methods: {
    changeMessage: function () {
      this.message = "Whoa...";
    },
  },
});
