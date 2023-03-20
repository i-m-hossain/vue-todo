<script>
export default {
  props: {
    containerTitle: {
      type: String,
      required: true,
    },
    list: {
      type: Object,
      required: true,
    },
  },
};
</script>
<template>
  <div class="border p-3 bg-gray-100 rounded">
    <h2>{{ containerTitle }}</h2>

    <div class="mt-4 p-2 rounded">
      <h2 v-if="list.length < 1" class="bg-red-100 px-2">No data found</h2>
      <div
        v-else
        v-for="item of list"
        :key="item.id"
        class="flex justify-between space-x-2"
      >
        <slot :todo="item"></slot>
      </div>
    </div>
  </div>
</template>
