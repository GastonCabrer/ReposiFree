<template>
<div class="Recursos_Fotografia">
  <h1>Recursos_Fotografia</h1>
  <body>
  <div class="gallery">
    <a target="_blank" href="Feliz jueves 3.png">
      <img src="@/img/Feliz jueves 3.png" alt="Feliz jueves 3.png" width="600" height="400">
    </a>
    <div class="desc">Feliz jueves</div>
  </div>
  </body>
</div>
</template>

<style scoped>
div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}

</style>
