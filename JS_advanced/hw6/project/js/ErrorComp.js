Vue.component('error', {
    data() {
        return {
            errorMessage: ""
        }
    },
    methods: {
        showError(error) {
            this.errorMessage = error;

        },
    },
    computed: {
        isShown() {
            return this.errorMessage !== ""
       }
    },
    template: `
        <div class="err-cont">
            <article class="message is-danger err-message" v-if="isShown">
                <div class="message-header">
                    <p>Error</p>
                    <button class="delete" @click="showError('')" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    {{ errorMessage }}
                </div>
            </article>
        </div>
    `
})