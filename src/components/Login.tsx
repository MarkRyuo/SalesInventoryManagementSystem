import { LoginCard } from "./LoginCard";



export const Login = () => {

    const propslogin = {

        logo01 : {
            loginLogo: ''
        }

    }

    return (

        <>
            <LoginCard {...propslogin.logo01}/>
        </>

    ) ;
}