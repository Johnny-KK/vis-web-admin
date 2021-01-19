<template>
  <div class="contain">
    <el-table :data="tableData" border fit highlight-current-row style="width: 100%">
      <el-table-column type="index" width="50" />
      <el-table-column label="IP" prop="IP" width="120" />
      <el-table-column label="name" prop="name" width="120" />
      <el-table-column label="remark" prop="rmk" />
      <!-- <el-table-column v-for="fruit in formThead" :key="fruit" :label="fruit">
        <template slot-scope="scope">
          {{ scope.row[fruit] }}
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Server',
  data() {
    return {
      tableData: [
        { IP: '192.168.0.222', name: 'NAS', rmk: '' },
        { IP: '192.168.1.1', name: 'WS5200', rmk: '' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.contain {
  padding: 20px;
}
</style>
