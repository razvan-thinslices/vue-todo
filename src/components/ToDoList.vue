<template>
  <div class="bg-slate-700 text-white">
    <ul>
      <li v-for="(item, index) in items" class="py-4 px-8 text-lg border-t border-t-slate-600 first:border-t-0">
        <label class="flex gap-4 items-center" :class="{ 'line-through': item.completed }">
          <input
          type="checkbox"
          v-model="item.completed"
          @change="toggle($event, item)"
          hidden />
            <div class="shrink-0 rounded-full w-6 h-6 border relative overflow-hidden">
              <div v-if="item.completed" class="absolute inset-0 bg-slate-400" />
            </div>
            <span>{{ item.label }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "ceva"
    }
  },  
  props: {
    items: Array,
  },
  methods: {
    toggle(ev, item) {
      // ev.preventDefault();
      // ev.stopPropagation();
      // this.$emit("onTodoClick", {
      //   ...item,
      //   completed: ! item.completed
      // });
    },
  },
};
</script>
