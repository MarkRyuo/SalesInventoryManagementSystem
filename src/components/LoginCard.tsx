import { Password } from "./LoginCards/Password";
import { Username } from "./LoginCards/Username";
import { Navbar1 } from "./NavBars/Navbar1";


interface Loginprops {

    loginLogo:  string ; 

}



export const LoginCard = (props: Loginprops) => {

    
    
    return (
        <>


            <form action="" className="form-login container-lg">

                <Navbar1/>

                <div className="text-center">
                    <img src={props.loginLogo} alt="Error-Logo" width={"100px"}/>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="row">
                    <div className="col-12 col-md-12 ms-1">
                        <Username/>
                    </div>

                    <div className="col-12 col-md-12 ms-1">
                        <Password/>
                    </div>
                </div>
                </div>

                <div className="mt-3 text-center">
                    <button type="button" className="btn btn-primary btn-lg">Log in</button>
                </div>
                

            </form>

        </>
    ) ;
}