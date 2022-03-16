<template>
  <div id="app">
    <header>
      <h1>Craig Harris</h1>
    <nav>
      <p> craigharris@byu.net | (512)781-2452 | <a href="../assets/1.2022 Resume.pdf" download>Resume</a></p>
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
  border-bottom: #42b983 5px solid;
}

header h1 {
  padding-left: 5vw;
  color:aliceblue;
  align-self: center;
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
  font-weight: bold;
  color: #698996;
}

nav a {
  font-weight: bold;
  color: #698996;
  text-decoration: none;
}

nav a:hover {
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
