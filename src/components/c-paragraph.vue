<template>
    <p class="c-paragraph">{{ text }}</p>
</template>

<script>
export default {
    name: 'CParagraph',
    props:{
        text:String
    }
}
</script>

<style lang="scss" scoped>

.c-paragraph {
    font-size: 50px;
    text-align: center;
    font-weight: bold;
  }
</style>

