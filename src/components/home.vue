<style>
.menu {

  color: black;
  border: 2px white;
  margin: 1px;
  padding: 2px;

}

nav a{
  text-decoration:none;
  color:inherit;
  font-size:14px;
}
nav li{
  display:inline-block;
  width:10%;
  padding:5px 10px;
  background-color:#000;
  border:1px solid #000;
  color:#fff;
}
nav li:hover{
  background-color:#fff;
  color:#000;
}
#nav li{
  float:left;
  width:10%;
  padding:5px 10px;
  background-color:#000;
  border:10px solid #000;
  text-align:center;
  color:#fff;
}
</style>
<template>

  <div class="menu">
    <h1>ReposiFree</h1>
    <p>repositorio gratuito para estudiantes</p>
    <nav>
      <ul>
        <li><a href=”#”>Inicio</a></li>
        <li><a href=”#”>Anatomia y Perspectiva</a></li>
        <li><a href=”#”>Recursos Adobe</a></li>
        <li><a href=”#”>FreeSound</a></li>
        <li><a href=”#”>Contacto</a></li>
      </ul>
    </nav>
    <body>
    <h1>Imagen de prueba </h1>
    <img src="../img-ejemplo/Feliz jueges 3.png" alt="Italian Trulli">
    </body>
  </div>
</template>
<body>
<h1>HOLA </h1>
</body>
<script>
export default {
name: "home"
}
</script>

<style scoped>

</style>