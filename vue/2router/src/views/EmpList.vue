<script>
    import axios from "axios";
    export default{
      data(){
        return { emps: []}
      },
      mounted(){
        axios.get("/empdata.json")
          .then(response => this.emps = response.data);
      }
    };
</script>
<template>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>성</th>
      <th>이메일</th>
      <th>월급</th>
    </tr>
    <tr v-for="emp in emps">
      <td>{{ emp.employee_id }}</td>
      <td>{{ emp.first_name }}</td>
      <td>{{ emp.last_name }}</td>
      <td>{{ emp.email }}</td>
      <td>{{ emp.salary }}</td>
    </tr>
  </table>
</template>
<style></style>