


export const Navbar1 = () => {

    return (

        <>
            <div className="row ">
                <nav className="navbar col-1 d-none d-sm-block pb-5">
                    <div className="">
                        <a className="navbar-brand" href="#">
                            <img src="/public/icons8-boxLogo.svg" alt="Bootstrap" width="70" height="70"/>
                        </a>
                    </div>
                </nav>
                <div className="col-8">
                    <p className="lead pt-4">Sales Inventory</p>
                </div>

                <div className="col-2 pt-4">
                    <a href="http://" className="btn btn-outline-primary d-none d-lg-block" download={"..."}>Download App</a>
                </div>
            </div>
        </>

    ) ;
}