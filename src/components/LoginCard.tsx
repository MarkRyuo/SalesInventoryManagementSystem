

interface loginprops {

    loginLogo = string ; 

}



export const LoginCard = (props: loginprops) => {

    
    
    return (
        <>

            <p className="">{props.loginLogo}</p>

            <form action="" className="form-login">

                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username: </label>
                    <input type="text" className="username form-control"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>


                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password: </label>
                    <input type="text" className="password form-control"/>    
                </div>
                
                <div className="mb-3">
                    <button type="button" className="btn btn-primary">Log in</button>
                </div>
                

            </form>

        </>
    ) ;
}