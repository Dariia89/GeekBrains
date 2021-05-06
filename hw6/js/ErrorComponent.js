Vue.component('err', {
    template: ` <div v-show="$root.error === true" class="error">
                    <span>Server error!</span> 
                </div>
    `
});