<template>
  <div id="app">
    <header>
      <h1>Craig Harris</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    </header>
    <main>
    <router-view/>
    </main>
  </div>
</template>

<style>

body {
  margin: 0;
  background-color: #698996;
}

header {
  display: flex;
  background-color: #1B2E37;
}

header h1 {
  padding-left: 5vw;
  color:aliceblue;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
}

main {
  
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #698996;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
