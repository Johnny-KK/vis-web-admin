<template>
  <el-select v-model="serve.form.server" placeholder="请选择">
    <el-option label="区域一" value="shanghai"></el-option>
    <el-option label="区域二" value="beijing"></el-option>
  </el-select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'remote-select',
  props: { api: { type: Function } },
  setup() {
    //
  },
  methods: {
    //
    getData() {
      // this.api().then(res => {});
    }
  }
});
</script>
