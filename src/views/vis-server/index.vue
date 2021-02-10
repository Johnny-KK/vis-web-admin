<template>
  <el-form :inline="true" :model="server.params">
    <el-form-item label="模糊搜索">
      <el-input v-model="server.params.fuzzy" placeholder="模糊搜索"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="queryServerList">查询</el-button>
      <el-button @click="showServerForm">添加服务器</el-button>
      <el-button @click="delServer">删除服务器</el-button>
      <el-button @click="editServer">修改服务器</el-button>
      <el-button @click="showServeForm">添加服务</el-button>
    </el-form-item>
  </el-form>

  <el-table :data="server.list" border style="width: 100%" highlight-current-row @current-change="handleCurrentChange">
    <el-table-column type="expand">
      <template #default="{row}">
        <el-table :data="row.serveList" :border="false" :stripe="true" style="width: 100%">
          <el-table-column type="index" width="50"> </el-table-column>
          <el-table-column prop="serveName" label="服务"> </el-table-column>
          <el-table-column prop="servePort" label="端口" width="180"> </el-table-column>
        </el-table>
      </template>
    </el-table-column>
    <el-table-column type="index" width="50"> </el-table-column>
    <el-table-column prop="serverName" label="服务器" width="180"> </el-table-column>
    <el-table-column prop="serverOs" label="操作系统" width="180"> </el-table-column>
    <el-table-column prop="serverIp" label="IP" width="180"> </el-table-column>
    <el-table-column prop="serverDomain" label="域名" width="180"> </el-table-column>
    <el-table-column prop="rmk" label="备注"> </el-table-column>
  </el-table>

  <el-dialog title="添加服务器" v-model="isShowServerForm" width="60%" :close-on-click-modal="false" :destroy-on-close="true">
    <server-form @reload="reload"></server-form>
  </el-dialog>

  <el-dialog title="添加服务" v-model="isShowServeForm" width="60%" :close-on-click-modal="false" :destroy-on-close="true">
    <serve-form :server="server.selected" @reload="reload"></serve-form>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

// TODO 换成统一引入
import { ElMessage } from 'element-plus';

import ServerForm from './components/server-form.vue';
import ServeForm from './components/serve-form.vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ServerVo, ServerWithServeVo } from '@/core/entities';
import { apiQueryServerListWithServe, apiDelServerById } from '@/core/apis';

export default defineComponent({
  name: 'vis-server',
  components: { [ServerForm.name]: ServerForm, [ServeForm.name]: ServeForm },
  setup() {
    const server: { list: ServerWithServeVo[]; params: { fuzzy: string; page: number; rows: number }; selected: ServerWithServeVo | null } = reactive({
      list: [],
      params: { fuzzy: '', page: 0, rows: 20 },
      selected: null
    });
    const isShowServerForm = ref(false);
    const isShowServeForm = ref(false);

    return { server, isShowServerForm, isShowServeForm };
  },
  mounted() {
    this.queryServerList();
  },
  methods: {
    // 获取数据
    queryServerList() {
      apiQueryServerListWithServe(this.server.params).then(res => {
        if (res.success) {
          this.server.list = res.data;
        }
      });
    },
    // 处理选择事件
    handleCurrentChange(val: ServerWithServeVo) {
      this.server.selected = val;
    },
    // 显示新增服务器表单弹窗
    showServerForm() {
      this.isShowServerForm = true;
    },
    //  显示新增服务表单窗口
    showServeForm() {
      if (this.server.selected === null) {
        ElMessage.warning('请先选择一条数据');
        return false;
      }
      this.isShowServeForm = true;
    },
    // 删除服务器
    delServer() {
      if (this.server.selected === null) {
        ElMessage.warning('请先选择一条数据');
        return false;
      }
      apiDelServerById(this.server.selected.id).then(res => {
        if (res.success) {
          ElMessage.success(res.msg);
          this.reload();
        }
      });
    },
    // 修改服务器
    editServer() {
      if (this.server.selected === null) {
        ElMessage.warning('请先选择一条数据');
        return false;
      }
      this.isShowServerForm = true;
    },
    // 重载数据
    reload() {
      this.isShowServerForm = false;
      this.isShowServeForm = false;
      this.queryServerList();
    }
  }
});
</script>
