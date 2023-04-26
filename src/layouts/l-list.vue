<template>
    <section class="l-list__container">
        <slot name="title"></slot>
        <div class="l-list__cards" >
            <slot name="list"></slot>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.l-list__cards{
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 500px );
    gap: 25px;
    text-align: center;
}

</style>