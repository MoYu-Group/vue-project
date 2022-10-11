<template>
    <el-container>
        <BaseHeader />
        <Main />
        <BaseFooter />
    </el-container>
  </template>
  
  <style>
    #app {
        color: var(--ep-text-color-primary);
    }

    .element-plus-logo {
        width: 50%;
    }
    .index {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .el-container {
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
    }

</style>