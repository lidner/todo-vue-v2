<template>
    <div>
        <button :class="{ activeFilter: filter == 'all' }" @click="changeFilter('all')">
          All
        </button>
        <button
          :class="{ activeFilter: filter == 'active' }"
          @click="changeFilter('active')"
        >
          Active
        </button>
        <button
          :class="{ activeFilter: filter == 'completed' }"
          @click="changeFilter('completed')"
        >
          Completed
        </button>
      </div>
</template>

<script>
    export default {
        name: 'todo-filtered',
        computed: {
            filter() {
                return this.$store.state.filter
            }
        },
        methods: {
            changeFilter(filter) {
                this.$store.dispatch('updateFilter', filter)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>