<template>
  <div class="flex items-center justify-between mb-9">
    <div @click="$router.back">
      <i class="fa-solid fa-arrow-left"></i>
    </div>
    <p class="font-bold text-18 ">{{$route.name == 'Order Investment' ? '' : $route.name}}</p>
    <div></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>