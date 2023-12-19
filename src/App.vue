<template>
  <div class="layout">
    <el-container v-if="state.showMenu" class="container">

      <el-aside class="aside">
        <div class="head">
          <div>vue3后台管理</div>
        </div>
        <div class="line" />
        <el-menu background-color="#222832" text-color="#fff" :router="true" :default-openeds="state.defaultOpen" :default-active='state.currentPath'>
          <el-menu-item index="/">首页</el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <span>模块管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/category"><el-icon>
                  <Menu />
                </el-icon>分类管理</el-menu-item>
              <el-menu-item index="/good"><el-icon>
                  <Goods />
                </el-icon>商品管理</el-menu-item>
              <el-menu-item index="/guest"><el-icon>
                  <User />
                </el-icon>会员管理</el-menu-item>
              <el-menu-item index="/order"><el-icon>
                  <List />
                </el-icon>订单管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <span>配置管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/swiper"><el-icon>
                  <Picture />
                </el-icon>轮播图配置</el-menu-item>
              <el-menu-item index="/hot"><el-icon>
                  <StarFilled />
                </el-icon>热销商品配置</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/account"><el-icon>
                  <Lock />
                </el-icon>修改密码</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container class="content">
        <Header />
        <div class="main">
          <router-view />
        </div>
        <Footer />
      </el-container>

    </el-container>
    <el-container v-else class="container">
      <router-view />
    </el-container>

  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { localGet, pathMap } from '@/utils'

const noMenu = ['/login']
const router = useRouter()
const state = reactive({
  showMenu: true,
  defaultOpen: ['1', '2', '3', '4'],
  currentPath: '/',
})

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    // 如果路径是 /login 则正常执行
    next()
  } else {
    // 如果不是 /login，判断是否有 token
    if (!localGet('token')) {
      // 如果没有，则跳至登录页面
      next({ path: '/login' })
    } else {
      // 否则继续执行
      next()
    }
  }
  state.showMenu = !noMenu.includes(to.path)
  state.currentPath = to.path
  document.title = pathMap[to.name]
})
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background-color: #ffffff;
}
.container {
  height: 100vh;
}
.aside {
  width: 200px !important;
  background-color: #222832;
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.head > div {
  display: flex;
  align-items: center;
}

.head {
  font-size: 20px;
  color: #ffffff;
}
.line {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}
.main {
  height: calc(100vh - 100px);
  overflow: auto;
  padding: 10px;
}
</style>