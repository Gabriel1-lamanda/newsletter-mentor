const app = Vue.createApp({
    data(){
        return{
            email: '',
            errorMessage: '',
            isActive: false
        }
    },
    methods: {
        validate(){
            if(!this.email || this.email.indexOf('@') !== -1){
                this.errorMessage = 'The email field is not valid'
            }
            this.errorMessage = 'The email field is not valid'
        },
        changebutton(){
            this.isActive = true

        }
    }
});
app.mount('#app');