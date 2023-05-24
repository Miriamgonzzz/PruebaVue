<template>
  <p class="title">Los mejores animes</p>
  <div class="wrap">
    <div
      class="c-banner__container"
      v-for="(cube, cubeIndex) in [cube1, cube2, cube3]"
      :key="cubeIndex"
    >
      <div :class="claseFace[index]" v-for="(product, index) in cube" :key="index">
        <img class="c-banner__container__img" :src="product.image.image_url" />
      </div>
    </div>
  </div>
</template>
<script>
import { productsStore } from '../stores/products'

const claseFace = ['top', 'bottom', 'left', 'right', 'back', 'front']

export default {
  data() {
    return { products: [], fetched: false, claseFace: claseFace }
  },
  computed: {
    cube1() {
      return this.products.slice(0, 6).map((product, index) => {
        return {
          image: product,
          faceIndex: index
        }
      })
    },
    cube2() {
      return this.products.slice(6, 12).map((product, index) => {
        return {
          image: product,
          faceIndex: index
        }
      })
    },
    cube3() {
      return this.products.slice(12).map((product, index) => {
        return {
          image: product,
          faceIndex: index
        }
      })
    }
  },
  methods: {
    async getAllProducts() {
      try {
        const useProductStore = productsStore()
        this.products = await useProductStore.fetchProducts()
        this.fetched = true
      } catch (e) {
        this.error = true
      }
    }
  },
  created() {
    this.getAllProducts()
  }
}
</script>

<style>
.title {
  font-size: 23px;
}

.wrap {
  height: 100%;
  display: flex;
  justify-content: center;
  perspective: 800px;
  perspective-origin: 50% -300px;
}
.c-banner__container {
  margin: 60px;
  width: 200px;
  height: 30px;
  display: inline-block;
  position: relative;
  transform-style: preserve-3d;
}
.c-banner__container div {
  position: absolute;
  width: 200px;
  height: 200px;
}
.back {
  border: 1px solid black;
  transform: translateZ(-100px) rotateY(180deg);
}
.right {
  border: 1px solid black;
  transform: rotateY(-270deg) translateX(100px);
  transform-origin: top right;
}
.left {
  border: 1px solid black;
  transform: rotateY(270deg) translateX(-100px);
  transform-origin: center left;
}
.top {
  border: 1px solid black;
  transform: rotateX(-90deg) translateY(-100px);
  transform-origin: top center;
}
.bottom {
  border: 1px solid black;
  transform: rotateX(90deg) translateY(100px);
  transform-origin: bottom center;
}
.front {
  border: 1px solid black;
  transform: translateZ(100px);
}
.c-banner__container__img {
  width: 100%;
  height: 100%;
}
@keyframes spin {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(360deg);
  }
}

.c-banner__container {
  animation: spin 20s infinite linear;
}
</style>
