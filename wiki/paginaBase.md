essa é a pagina base

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../framework/bootstrap-5.1.3/css/bootstrap.css">
    <title>Cadastro</title>
</head>
<body>

    <section id="topo">
    </section>
    <section id="app">
        
    </section>
    <section id="footer">
    </section>
    
    <script src="../../framework/bootstrap-5.1.3/js/bootstrap.js"></script>
    <script src="../../framework/jquery-3.6.0.min.js"></script>
    <script src="../../framework/vue.global.js"></script>
    <script src="../../core/vars.js"></script>
    <script>
        const Dados = {
            data() {
                return {
                    NomeApp: _NomeApp
                }
            }
        }
        Vue.createApp(Dados).mount('#app')
    </script>
</body>
</html>
```