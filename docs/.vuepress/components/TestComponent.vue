<template>
  <div class="flex">
    <div class="mx-2 text-red-700" v-for="(msg, idx) in messages" :key="idx">
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { messages: ["This", "is", "message", "from", "test", "component"] };
  },
};
</script>
