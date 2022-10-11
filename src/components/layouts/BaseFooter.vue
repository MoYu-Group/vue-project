<template>
    <el-footer>
        <div class="footer-div">
            <span class="footer-span">&copy; {{year}} Powered By CHN-STUDENT | Using Vue 3 Build</span>
        </div>
    </el-footer>
</template>

<script setup>
   const year = new Date().getFullYear();
</script>


<style>
    .el-footer {
        display: flex;
        height: 4vh;
        width: 100%;
    }
    .footer-span {
        text-align: center;
    }
</style>