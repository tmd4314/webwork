<template>
  <DataTable class="display" :options="options"></DataTable>
</template>


<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';

DataTable.use(DataTablesCore);

const options = {
  ajax: {
    url: '/api/board',
    dataSrc: ''  // <- 배열 응답이라면 이걸 꼭 추가
  },
  columns: [
    { data: 'id' },
    { data: 'title' },
    { data: 'writer' }
  ]
};
</script>
