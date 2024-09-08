



export const Login = () => {
    
    return (
        <>

            <form action="" className="form-login">

                <div className="mb-3">
                    <label htmlFor="username">Username: </label>
                    <input type="text" className="username"/>
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="text" className="password"/>    
                </div>

                

                <button type="button" className="btn btn-primary">Log in</button>

            </form>

        </>
    ) ;
}