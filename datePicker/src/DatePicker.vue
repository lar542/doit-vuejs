<template>
  <div id="app">
    <input id="calender">
  </div>
</template>

<script>
export default {
  mounted() {
    $('#calender').datepicker();
  }
}
</script>
