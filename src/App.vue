<template>
  <div id="app">
    <body class="text-black font-body">
      <div id="nav">
        <router-link to="/" class="bg-secondary text-primary-300">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </body>
  </div>
</template>

<style>
</style>
