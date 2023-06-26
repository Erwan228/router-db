<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Documents' }">Documents</router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  padding: 5px;
  border-radius: 4px;
  background-color: #a43457;
  }
body {
  background: linear-gradient(to right,  #a43457, #575b5b, #575b5b, #575b5b, #575b5b, #a43457 ) fixed; 
}
div{
  display: flex;
    flex-direction: column;
    align-items: center;
}
p {
  width: 50%;
  font-size: large;
  line-height: 25px;
}
</style>
