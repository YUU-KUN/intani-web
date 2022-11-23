<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="h-screen flex flex-col justify-between">
    <div class="py-12 px-10 h-full">
      <router-view name="AppBar"/>
      <router-view class="h-full" :class="$route.name == 'Dashboard' ? '' : 'pb-16'"/>
    </div>
    <router-view name="BottomNavigationBar" class="bottom-0 w-full sticky"/>
  </div>
</template>

<style>
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
