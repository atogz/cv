<template>
<main class="project">
    <div class="project-title mt-20 flex flex-col text-md pl-3 border-l-2 ml-10 border-red-200"
    >
        <span class="text-gray-800 font-bold">{{ getContent.name }}</span>
    </div>
    <div class="project-summary w-full mt-10 text-md text-gray-600 ml-10">{{ getContent.summary }}</div>
    <div class="project-summary w-full mt-10 text-xl ml-10">{{ getContent.description }}</div>
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