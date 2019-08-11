export default {
  data: () => ({
    openModals: []
  }),
  directives: {
    'modal-open': {
      bind (el, binding, vnode) {
        el.addEventListener('click', () => {
          vnode.context.$refs[binding.value].show = true
          document.body.style.overflowY = 'hidden'
        })
      }
    },
    'modal-close': {
      bind (el, binding, vnode) {
        el.addEventListener('click', () => {
          vnode.context.$refs[binding.value].show = false
          document.body.style.overflowY = 'auto'
        })
      }
    }
  },
  methods: {
    closeModal (ref) {
      this.$refs[ref].show = false
      document.body.style.overflowY = 'auto'
      const index = this.openModals.indexOf(ref)
      if (index > -1) this.openModals.splice(index, 1)
    },
    openModal (ref) {
      this.$refs[ref].show = true
      document.body.style.overflowY = 'hidden'
    }
  }
}