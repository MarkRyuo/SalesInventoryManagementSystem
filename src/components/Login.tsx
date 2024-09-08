import { LoginCard } from "./LoginCard";



export const Login = () => {

    const propslogin = {

        logo01 : {
            loginLogo: '/public/icons8-box.svg'
        }

    }

    return (

        <>
            <LoginCard {...propslogin.logo01}/>
        </>

    ) ;
}