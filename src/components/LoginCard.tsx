import { Password } from "./LoginCards/Password";
import { Username } from "./LoginCards/Username";


interface Loginprops {

    loginLogo:  string ; 

}



export const LoginCard = (props: Loginprops) => {

    
    
    return (
        <>


            <form action="" className="form-login container-lg">

                <img src={props.loginLogo} alt="Error-Logo" />

                <div className="row gap-4">
                    <div className="gcol col-md-6">
                        <Username/>
                    </div>

                    <div className="col col-md-6">
                        <Password/>
                    </div>
                </div>

                
                <div className="mb-3">
                    <button type="button" className="btn btn-primary">Log in</button>
                </div>
                

            </form>

        </>
    ) ;
}