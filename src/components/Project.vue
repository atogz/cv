<template>
    <div class="w-full h-full">
{{ id }}
        {{ getContent }}
    </div>
</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                id: null,
            }
        },
        computed: {
            getContent() {
                return this.$store.getters.getProjectData(this.id);
            }
        },
        created() {
            this.id = this.$route.params.id;
        }
    }
</script>

<style scoped>

</style>