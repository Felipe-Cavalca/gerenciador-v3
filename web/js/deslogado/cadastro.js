const Dados = {
    data() {
        return {
            erros: [],
            nome: null,
            email: null,
            senha: null,
            confirmaSenha: null
        }
    },
    methods: {
        validaDados: function (e) {
            e.preventDefault();
            var valido = true;
            this.erros = [];

            if (!this.nome) {
                valido = false;
                this.erros.push('O nome é obrigatório.');
                $("#nome").addClass('is-invalid');
            } else {
                $("#nome").removeClass('is-invalid');
            }

            if (!this.email) {
                valido = false;
                this.erros.push('O email é obrigatório.');
                $("#email").addClass('is-invalid');
            } else {
                $("#email").removeClass('is-invalid');
            }

            if (!this.senha) {
                valido = false;
                this.erros.push('O senha é obrigatório.');
                $("#senha").addClass('is-invalid');
            } else {
                $("#senha").removeClass('is-invalid');
            }

            if (!this.confirmaSenha) {
                valido = false;
                this.erros.push('O confirmaSenha é obrigatório.');
                $("#confirmaSenha").addClass('is-invalid');
            } else {
                if(this.senha != this.confirmaSenha) {
                    valido = false;
                    this.erros.push('As senhas não batem');
                    $("#confirmaSenha").addClass('is-invalid');
                }else{
                    $("#confirmaSenha").removeClass('is-invalid');
                }
            }

            if (valido) {

                        // if(response.data.status){
        //     window.location('../home.html');
        // }else if(response.data.erroInterno){
        //     throw new Error('erro')
        // }else {
        //     this.erros.push(response.data.msg);
        // }
            }
        }
    }
}
Vue.createApp(Dados).mount('#app')