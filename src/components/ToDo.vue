<template>
  <label>
    {{ label }}
  </label>
</template>

<script>
export default {
  props: {
    label: String,
    completed: Boolean,
  },
};
</script>
