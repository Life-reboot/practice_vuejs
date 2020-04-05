var app = new Vue({
  el: "#app",
  data: {
    message: "Hello from JavaScript!",
    name: "Peter",
    showExtraInfo: false,
    fruits: ["apple", "banana", "cantaloupe"],
    newFruit: "",
  },
  methods: {
    changeMessage: function () {
      this.message = "Whoa...";
    },
    createFruit: function () {
      console.log(this.newFruit);
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    },
  },
});
