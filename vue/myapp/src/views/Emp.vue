<script>
export default{
      data() {
        return {
          detps : [{dno: 10, dname:"개발"},
                  {dno: 20, dname:"인사"},
                  {dno: 30, dname:"총무"}
          ],
          emp: {
            employee_id: "100",
            first_name: "길동",
            last_name: "홍",
            email: "",
            phone_number: "",
            hire_date: "",
            job_id: "",
            salary: "",
            commission_pct: "",
            manager_id: "",
            department_id: "20"
          }
        }
      },
      methods: {
        empUpdate(){
          console.log(JSON.stringify(this.emp));
        }
      }
}
</script>
<template>
     사번: <input v-model="emp.employee_id"><br>
    이름: <input v-model="emp.first_name"><br>
    직업: <input type="radio" v-model="emp.job_id" value="it">IT
          <input type="radio" v-model="emp.job_id" value="sales">SALES<br>
    부서 : <select v-model="selected">
            <option v-for="detp in detps" :value="detp.dno">{{ detp.dname }}</option>
          </select><br>
    <button @click="empUpdate()">수정</button>
    <div>
      {{ emp }}
    </div>
</template>
<style>

</style>