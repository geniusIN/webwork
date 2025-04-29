<script>
export default {
    data: function () {
        return {
            depts: [
                { dno: 10, dname: "개발" },
                { dno: 20, dname: "인사" },
                { dno: 30, dname: "총무" },
            ],
            emp: {
                employee_id: "100",
                first_name: "Steven",
                last_name: "King",
                email: "",
                phone_number: "",
                hire_date: "",
                job_id: "",
                salary: "",
                commission_pct: "",
                manager_id: "",
                department_id: 20,
            },
        };
    },
    methods: {
        update() {
            console.log(JSON.stringify(this.emp));
        },
    },
};
</script>
<template>
    <div class="form-wrapper">
        사번: <input v-model="emp.employee_id" /><br />
        이름: <input v-model="emp.first_name" /><br />
        성: <input v-model="emp.last_name" /><br />
        업무: <input type="radio" v-model="emp.job_id" value="it" />IT
        <input type="radio" v-model="emp.job_id" value="sales" />sales<br />
        부서:
        <select v-model="emp.department_id">
            <option v-for="dept in depts" :value="dept.dno" v-bind:key="dept">{{ dept.dname }}</option></select
        ><br />
        <button @click="update()">수정</button>
    </div>
</template>
<style>
/* input, select, button을 모두 block 요소로 세로 정렬 */
input,
select,
button {
    display: block;
    margin-bottom: 10px;
    padding: 6px;
    font-size: 14px;
    width: 100%;
    max-width: 300px;
    box-sizing: border-box;
}

/* 라디오 버튼은 인라인 유지 */
input[type="radio"] {
    display: inline-block;
    width: auto;
    margin-left: 6px;
    margin-right: 4px;
}

/* 폼 텍스트들까지 세로 정렬 시키기 위해 래퍼 클래스 지정 */
.form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
</style>
