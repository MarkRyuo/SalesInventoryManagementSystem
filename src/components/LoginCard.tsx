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

                <div style={{width: "75vw", height: "100px"}}></div>{/* Spacing */}

                <div className="text-center pt-5">  
                    <img src={props.loginLogo} alt="Error-Logo" width={"100px"}/>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="row">
                    <div className="col-12 col-md-12 ms-2">
                        <Username/>
                    </div>

                    <div className="col-12 col-md-12 ms-2">
                        <Password/>
                    </div>
                </div>
                </div>

                <div className="mt-3 text-center">
                    <button type="button" className="btn btn-primary btn-lg">Log in</button>
                </div>
                
                <div className="col-4 pt-4">
                    <a href="http://" className="btn btn-outline-primary d-block d-sm-none" download={"..."}>Download App</a> {/* Input the .app */}
                </div>

            </form>

        </>
    ) ;
}