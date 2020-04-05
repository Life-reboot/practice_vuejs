var app = new Vue({
  el: "#app",
  data: {
    message: "Hello from JavaScript!",
    name: "Peter",
    showExtraInfo: true,
  },
  methods: {
    changeMessage: function () {
      this.message = "Whoa...";
    },
  },
});
