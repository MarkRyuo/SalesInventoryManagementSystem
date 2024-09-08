



export const Login = () => {
    
    return (
        <>

            <form action="" className="form-login">

                <div className="mb-3">
                    <label htmlFor="username">Username: </label>
                    <input type="text" className="username"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="password">Password: </label>
                    <input type="text" className="password"/>    
                </div>
                
                <div className="mb-3">
                    <button type="button" className="btn btn-primary">Log in</button>
                </div>
                

            </form>

        </>
    ) ;
}