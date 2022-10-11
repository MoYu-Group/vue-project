<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item class="title" index="0">云监控</el-menu-item>
    <el-sub-menu index="1">
      <template #title>切换背景</template>
      <el-menu-item index="1-1" @click="toggleDark(false)">白天</el-menu-item>
      <el-menu-item index="1-2" @click="toggleDark(true)">黑夜</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style>
.title {
  font-size: 20px;
}
</style>
