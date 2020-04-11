<template>
  <div>
    <h1>这是app组件</h1>
    <mybtn type="default">123</mybtn>
    <button type="button" class="mui-btn mui-btn-royal">紫色</button>
    <router-link to="/account">
      <mybtn type="default">account</mybtn>
    </router-link>
    <router-link to="/goodlist">
      <mybtn plain>goodlist</mybtn>
    </router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {};
  },
  methods: {
    show() {
      Toast({
        message: "收到",
        position: "top",
        iconClass: "glyphicon glyphicon-ok",
        // 自己的图标
        className: "mytoast" //自定义toast样式
      });
    }
  }
};
</script>