// console.log("this is a test")
const app = new Vue({
  el: "#app",
  data: {
    hidden: false
  },
  methods: {
    hideHeader() {
      this.hidden = !this.hidden;
    }
  }
});
