<template>
    <div class="container">
        <emp-list></emp-list>
        <emp-form class="right"></emp-form>
    </div>
</template>

<script>
import EmpForm from "./EmpForm.vue";
import EmpList from "./EmpList.vue";

export default {
    components: { EmpForm, EmpList },
    data() {
        return {};
    },
    methods: {},
    mounted() {},
};
</script>

<style scoped>
.container {
    display: flex;
    max-width: 100%;
    gap: 20px;
    align-items: flex-start;
}

.emp-form {
    margin-left: 20px;
    flex: 1;
}

emp-list {
    flex: 1;
}
</style>
