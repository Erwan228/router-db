<template>
    <div v-if="weapon">
        <h1>{{ weapon.name }}</h1>
        <p>{{ weapon.details }}</p>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script>
export default {
    //props: ['id'],
    data(){
        return{
            weapon: null,
            id: this.$route.params.id
        }
    },
    mounted(){
        fetch('http://localhost:3000/weapons/' + this.id)
        .then(res => res.json())
        .then(data => this.weapon = data)
        .catch(err => console.log(err.message))
    }
}
</script>