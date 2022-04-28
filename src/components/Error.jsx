const Error = ({message}) => {
    return(
        <>
            <h2 className="display-4">Ha ocurrido un error</h2>
            <h2 className="mt-2">Por favor intente de nuevo mas tarde</h2>
            <h5 className="mt-4">Si el problema persiste, por favor contáctese con el administrador.</h5>
            <p className="mt-5">{message}</p>
        </>
    );
}

export default Error;