<style>
.modal {
  padding-right: 17px;
  display: block;
  background: rgba(0, 0, 0, 0.6);
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal {
  position: fixed;
  overflow-x: auto;
  overflow-y: scroll;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}
</style>

<template>
  <transition name="modal">
    <div class="modal fade" v-if="show" :class="{'show': show }">
      <slot @close="show = false"></slot>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    show: false
  })
};
</script>