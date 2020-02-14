<template>
<main class="project">
    <div class="project-title mt-20 flex flex-col text-md pl-3 border-l-2 ml-10 border-red-200"
    >
        <span class="text-gray-800 font-bold">{{ getContent.name }}</span>
    </div>
</main>
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