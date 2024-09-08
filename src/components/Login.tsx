



export const Login = () => {
    
    return (
        <>

            <form action="" className="form-login">

                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" className="username"/>
                </div>

                <label htmlFor="password">Password: </label>
                <input type="text" className="password"/>

                <button type="button" className="btn btn-primary">Log in</button>

            </form>

        </>
    ) ;
}