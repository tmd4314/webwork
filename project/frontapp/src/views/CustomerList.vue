<template>
<div class="container">
    <table class="table table-hover">
    <thead>
        <tr>
            <th>ID</th>
            <th>이름</th>
            <th>이메일</th>
            <th>전화번호</th>
            <th>주소</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="customer in customers">
            <td>{{ customer.id }}</td>
            <td>{{ customer.name }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.phone }}</td>
            <td>{{ customer.address }}</td>
        </tr>
    </tbody>
    </table>
</div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                customers: []
            }
        },
        created() {
            this.customersList();
        },
        methods : {
            async customersList(){
                let result = await axios.get("/api/customer")
                console.log(result.data);
                this.customers = result.data;
            }
        }
    }
</script>
<style scoped>
    table * {
        text-align: center;
    }
</style>
