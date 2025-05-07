import Cabecalho from "../../components/Cabecalho/Cabecalho";
import FormAluno from "../../components/Formularios/FormAlunos/FormAluno";
import LoginForm from "../../components/LoginForm/LoginForm";
import Rodape from "../../components/Rodape/Rodape";

function PLogin() {
    return (
        <>
            <Cabecalho />
            {/*<LoginForm />*/}
            <FormAluno/>
            <Rodape />
        </>
    );
}

export default PLogin;