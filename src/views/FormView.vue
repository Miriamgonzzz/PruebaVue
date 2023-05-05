<template>
    <l-showForm>
        <template #title>
            <CParagraph text="Formulario"></CParagraph>
        </template>
        <template #content>
            <form class="v-form__contain">
                <CInput v-model="title" type="text" placeholder="Title"></CInput>
                <CInput v-model="tipe" type="text" placeholder="Tipe"></CInput>
                <CInput v-model="episodes" type="text" placeholder="Episodes"></CInput>
                <CInput v-model="status" type="text" placeholder="Status"></CInput>
                <CInput v-model="score" type="text" placeholder="Score"></CInput>
                <CInput v-model="themes" type="text" placeholder="Themes"></CInput>
                <CInput v-model="url" type="text" placeholder="Url"></CInput>
                <CInput v-model="image_url" type="text" placeholder="Image_url"></CInput>
                <CInput v-model="synopsis" type="text" placeholder="Synopsis"></CInput>
                <CInput v-model="youtube" type="text" placeholder="Youtube"></CInput>
                <CButton type="submit" mensaje="Enviar"></CButton>
            </form>
        </template>
    </l-showForm>
</template>


<script>
import LShowForm from '../layouts/l-showForm.vue'
import CParagraph from '../components/c-paragraph.vue'
import CInput from '../components/c-input.vue'
import CButton from '../components/c-button.vue'

export default {
        components: {
            LShowForm,
           CParagraph,
           CInput,
           CButton,
        },
    }

</script>

<style lang="scss" scoped>

.v-form__contain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }



</style>