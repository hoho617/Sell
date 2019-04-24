<template>
	<div>
    <h3>我是商品列表页面</h3>
    <span>{{$route.params.username}}</span>
    <span>{{$route.params.postid}}</span>
    <router-link to="/goods/title">显示商品标题</router-link>
    <router-link to="/goods/image">显示商品图片</router-link>
    <div>
      <router-view></router-view>
    </div>

    <div class="border-block">
      <h4>编程式路由--通过js跳转路由</h4>
      <router-link to="/cart">普通的跳转到购物车列表页面</router-link>
      <br>
      <button @click="toCart">button--js事件跳转路由到购物车页面</button>
    </div>


    <div class="border-block">
      <h4>命名路由--通过:to="{name:'子路由的name',params:{参数}}"</h4>
      <router-link :to="{name:'cart',params:{cartId:111}}">普通的跳转到购物车列表页面</router-link>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'GoodsList',
		data () {
		  return {

		  }
		},
    methods:{
      toCart(){
        /****方法1 this.$router.push('/cart')***/
        // this.$router.push('/cart')
        /****方法2 this.$router.push({path:'/cart'})****/
        // this.$router.push({path:'/cart'})
        /***方法3 this.$router.push({path:'/cart?goodsId=123'})
         * 或者  取得goodsId用$route.query.goodsId
         * this.$router.push({path:'/cart',query:{goodsId:123}})
         * ***/
        // this.$router.push({path:'/cart?goodsId=123'})
        this.$router.push({path:'/cart',query:{goodsId:123}})
      }
    }
	}
</script>

<style>
  .border-block {
     border:2px solid #eee;
    padding:20px;
  }
</style>
