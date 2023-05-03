<template>
    <section class="l-show__container">
        <slot name="title"></slot>
        <div class="l-show__card" >
            <slot name="list"></slot>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.l-show__container{
    display: flex;
    flex-direction: column;
    align-items: center;

}

.l-show__card{

    padding: 20px;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(2,50%);
    grid-gap: 10px;
    justify-content: center;
    border: 1px solid black;
    border-radius: 10px;

}

</style>