<template>
    <div v-if="specimen">
        <h1>{{ specimen.name }}</h1>
        <p>{{ specimen.details }}</p>
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
            specimen: null,
            id: this.$route.params.id
        }
    },
    mounted(){
        fetch('http://localhost:3000/specimens/' + this.id)
        .then(res => res.json())
        .then(data => this.specimen = data)
        .catch(err => console.log(err.message))
    }
}
</script>