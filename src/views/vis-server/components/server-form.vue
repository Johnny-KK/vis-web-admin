<template>
  <el-form ref="form" :model="server.form" label-width="80px">
    <el-form-item label="服务器">
      <el-input v-model="server.form.name"></el-input>
    </el-form-item>
    <el-form-item label="IP">
      <el-input v-model="server.form.ip"></el-input>
    </el-form-item>
    <el-form-item label="域名">
      <el-input v-model="server.form.domain"></el-input>
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model="server.form.rmk" type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="submit">提交</el-button>
      <el-button @click="$emit('reload')">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

import { ServerVo } from '@/core/entities';
import { apiSaveServer } from '@/core/apis';

export default defineComponent({
  name: 'server-form',
  setup() {
    const server: { form: ServerVo } = reactive({ form: { name: '', ip: '', domain: '', rmk: '' } });

    return { server };
  },
  methods: {
    // 提交表单
    submit() {
      apiSaveServer(this.server.form).then(res => {
        if (res.success) {
          this.$emit('reload');
        }
      });
    }
  }
});
</script>
