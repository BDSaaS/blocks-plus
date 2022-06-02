<script>
export default {
  name: "Teleport",
  props: {
    to: {
      type: String,
      required: true
    }
  },

  mounted() {
    document.querySelector(this.to).appendChild(this.$el)
  },

  destroyed() {
    document.querySelector(this.to).removeChild(this.$el)
  },

  render() {
    return <div>{this.$scopedSlots.default()}</div>
  }
}
</script>
