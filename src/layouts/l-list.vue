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
    // margin: 10px;
    // width: 100%;
    // height: 100%;
    // text-align: center;
    // display: inline-block;
    
    display: grid;
    grid-template-columns: repeat(3, 1fr );
    gap: 10px;
    // flex-direction: column;
    //align-items: center;
    //justify-content: center;
    // gap: 20px;
    text-align: center;
    border: 5px solid red;

}

</style>