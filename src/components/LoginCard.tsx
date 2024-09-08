

interface Loginprops {

    loginLogo:  string ; 

}



export const LoginCard = (props: Loginprops) => {

    
    
    return (
        <>

            <img src={props.loginLogo} alt="Error-Logo" />

            <form action="" className="form-login">
                
                <div className="mb-3">
                    <button type="button" className="btn btn-primary">Log in</button>
                </div>
                

            </form>

        </>
    ) ;
}