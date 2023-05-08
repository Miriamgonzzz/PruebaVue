<template>
  <span class="c-element__title">{{ src.title }}</span>
  <img class="c-element__img" :src="src.image_url" alt="Imagen" />
  <div class="c-element__contain">
    <span class="c-element__contain__type">Tipo: {{ src.type }}</span>
    <span class="c-element__contain__episodes">Episodios: {{ src.episodes }}</span>
    <span class="c-element__contain__status">Estado: {{ src.status }}</span>
    <span class="c-element__contain__score">Puntuacion: {{ src.score }}</span>
    <span class="c-element__contain__theme">Tema: {{ src.Themes }}</span>
  </div>
  <span class="c-element__synopsis">{{ src.synopsis }}</span>
  <a class="c-element__youtube" :href="src.youtube">Trailer YouTube</a>
  <a class="c-element__url" :href="src.url">Mas informacion</a>
  <!-- <iframe class="c-element__yputube" width="560" height="315" :src="showYoutubeModal(src.youtube)" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>   -->
</template>

<script>
export default {
  props: {
    src: {
      type: Object,
      required: true
    }
  },
  methods: {
    showYoutubeModal(url) {
      return 'https://www.youtube.com/watch?v=' + url + ''
    }
  }
}
</script>

<style lang="scss" scoped>
.c-element__title {
  padding: 10px;
  grid-column: 1/3;
  grid-row: 1;
  text-align: center;
  font-size: 50px;
  background: black;
  color: white;
  border-radius: 30px;
}
.c-element__img {
  //padding-left:70px;
  width: 100%;
  object-fit: cover;
  grid-column: 1;
  grid-row: 3/6;
}
.c-element__contain {
  padding: 20px;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
  grid-column: 2;
  grid-row: 4;
  font-size: 25px;
  background: white;
  border-radius: 30px;
}
.c-element__synopsis {
  padding: 30px;
  justify-content: center;
  align-items: center;
  text-align: justify;
  grid-column: 1/3;
  grid-row: 7;
  font-size: 25px;
  background: white;
  border-radius: 30px;
}
.c-element__youtube {
  //width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1/3;
  grid-row: 8;
  font-size: 40px;
  color: black;
  text-decoration: none;
  background: var(--color-background-button);
  border-radius: 30px;
}

.c-element__url {
  //width:500px ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1/3;
  grid-row: 9;
  font-size: 40px;
  color: black;
  text-decoration: none;
  background: var(--color-background-button);
  border-radius: 30px;
}
</style>
