// console.log("this is a test")
const app = new Vue({
  el: '#app',
  data: {
    hidden: false,
    scroll: null,
    copyright: 2018,
    projects: projectData,
    visible: false,
    modal: {}
    // projects: projects
  },
  methods: {
    hideNav() {
      document.getElementById('nav-toggle').checked = false;
    },
    showModal(project) {
      this.visible = true;

      this.modal = {
        ...project
      };
    },
    clickHideModal(e) {
      if (e.target.className === 'modal') {
        this.visible = false;
        this.modal = {};
      }
    },
    hideModal() {
      this.visible = false;
      this.modal = {};
    },
    preventMoveTouch(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  },
  watch: {
    visible: vis => {
      if (vis === true) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = 'auto';
      }
    }
  },
  created() {
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this.hideModal();
      }
    });
  },
  destroyed() {
    window.removeEventListener('keydown');
  }
});
// created() {
//   window.addEventListener('scroll', this.handleScroll);
// },
// destroyed() {
//   window.removeEventListener('scroll', this.handleScroll);
// }
// hideHeader() {
//   this.hidden = !this.hidden;
//   this.scroll = window.scrollY;
// },
// handleScroll(event) {
//   this.hidden = true;
// }
