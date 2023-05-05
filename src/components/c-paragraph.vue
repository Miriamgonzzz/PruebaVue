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
    margin: 30px 0 10px  0;
    font-size: 50px;
    text-align: center;
    font-weight: bold;
  }
</style>

