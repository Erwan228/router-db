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
        <div v-else>
            <p>Loading specimens...</p>
        </div>
        <h2>Weapons</h2>
        <div v-if="weapons.length" class="weapons">
            <div v-for="weapon in weapons" :key="weapon.id" class="weapon">
                <router-link :to="{ name: 'Weapons', params: {id: weapon.id} }">
                    <h3>{{ weapon.name }}</h3>
                </router-link>
            </div>
        </div>
        <div v-else>
            <p>Loading specimens...</p>
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
a{
    color: white;
}
</style>