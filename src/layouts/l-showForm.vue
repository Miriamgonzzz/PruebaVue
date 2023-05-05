<template>
    <section class="l-show__container">
        <slot name="title"></slot>
        <div  :class="{'l-show__cardShow':$route.path !== '/form','l-show__cardForm':$route.path === '/form'}" >
            <slot name="content"></slot>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.l-show__container{
    display: flex;
    flex-direction: column;
    align-items: center;

}

.l-show__cardShow{

    padding: 20px;
    width: 60%;
    display: grid;
    grid-template-columns: repeat(2,50%);
    grid-gap: 10px;
    justify-content: center;
    text-align: center;
    background: var(--color-background-showForm);
    border: 1px solid black;
    border-radius: 10px;

}
.l-show__cardForm{
    padding: 20px;
    width: 60%;
    background: var(--color-background-showForm);
}

</style>