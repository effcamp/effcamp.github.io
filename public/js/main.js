// console.log("this is a test")
const app = new Vue({
  el: "#app",
  data: {
    hidden: false,
    scroll: null,
    copyright: 2018
  },
  methods: {
    hideHeader() {
      this.hidden = !this.hidden;
      this.scroll = window.scrollY;
    },
    handleScroll(event) {
      this.hidden = true;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
});
