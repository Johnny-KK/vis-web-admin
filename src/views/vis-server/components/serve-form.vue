<template>
  <el-form ref="form" :model="serve.form" label-width="100px">
    <el-form-item label="服务名">
      <el-input v-model="serve.form.name"></el-input>
    </el-form-item>

    <el-form-item label="所属服务器">
      <el-input v-model="serve.form.serverName" readonly></el-input>
    </el-form-item>

    <el-form-item label="端口">
      <el-input v-model="serve.form.port"></el-input>
    </el-form-item>

    <el-form-item label="Docker">
      <el-radio-group v-model="serve.form.isDocker">
        <el-radio label="Y">是</el-radio>
        <el-radio label="N">否</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="备注">
      <el-input v-model="serve.form.rmk" type="textarea"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button @click="submit">提交</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue';

import { ServerWithServeVo, ServeVo } from '@/core/entities';
import { apiSaveServe } from '@/core/apis';

export default defineComponent({
  name: 'serve-form',
  props: { server: { type: Object as PropType<ServerWithServeVo>, default: null } },
  setup() {
    const serve: { form: ServeVo } = reactive({ form: { serverId: '', serverName: '', name: '', port: '', isDocker: 'N', rmk: '' } });

    return { serve };
  },
  created() {
    // 赋值服务器相关
    this.serve.form.serverName = this.server.serverName;
    this.serve.form.serverId = this.server.id;
  },
  methods: {
    // 提交表单
    submit() {
      apiSaveServe(this.serve.form).then(res => {
        if (res.success) {
          this.$emit('reload');
        }
      });
    }
  }
});
</script>
