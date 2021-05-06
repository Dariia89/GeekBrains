Vue.component('search', {
    // props: ['userSearch'],
    template: ` <form action="#" class="search form-container" @submit.prevent="$root.filter">
                    <input class="search-field" v-model="$root.userSearch" type="search" placeholder="Search for item...">
                    <button class="search-btn"></button><i class="fas fa-search"></i></button>
                </form>
    `
});