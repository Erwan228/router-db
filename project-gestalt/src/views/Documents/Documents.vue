<template>
    <h1>Detailed documents</h1>
    <h2>Specimens</h2>
        <div v-if="specimens.length" class="specimens">
            <div v-for="specimen in specimens" :key="specimen.id" class="specimen">
                <router-link :to="{ name: 'Specimens', params: {id: specimen.id} }">
                    <h3>{{ specimen.name }}</h3>
                </router-link>
            </div>
        </div>
</template>

<script>
export default{
    data() {
        return{
            specimens: [],
            weapons: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/specimens')
        .then(res => res.json())
        .then(data => this.specimens = data)
        .catch(err => console.log(err.message))

        fetch('http://localhost:3000/weapons')
        .then(res => res.json())
        .then(data => this.weapons = data)
        .catch(err => console.log(err.message))
    }
}

</script>

<style scoped>
h2 {
    margin-top: 70px;
}
</style>