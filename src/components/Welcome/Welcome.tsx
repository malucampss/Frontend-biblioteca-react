import estilo from './Welcome.module.css'

function Welcome(){
    return(
        <main className={estilo.principal}>
            <p>Seja Bem-Vindo(a) á Biblioteca</p>
            <p>Para ter uma melhor experiência, faça login no sistema</p>

        </main>
    )
}

export default Welcome;