<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <ul>
        <li><a class="active"><router-link to="/Referencias_Anatomia">Anatomia y Referencias</router-link></a></li>
      <li><a><router-link to="/Adobe_Recursos">Adobe Recursos</router-link></a></li>
      <li><a><router-link to="/Recursos_Fotografia">Recursos Fotografico</router-link></a></li>
      <li><a><router-link to="/Libreria_Sonido">Libreria Sonido</router-link></a></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

#nav a {
  color: black;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  background-color: mediumpurple;
}

li {
  float: left;
  border-right:1px solid #bbb;
}

li:last-child {
  border-right: none;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4CAF50;
}
</style>
