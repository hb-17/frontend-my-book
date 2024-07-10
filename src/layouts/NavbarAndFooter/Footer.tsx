export const Footer = () => {
    return (
        <div className="main-color">
            <footer className="container d-flex flex-wrap justify-content-between align-items-center py-5 main-color">
                <p className="col-md-4 mb-0 text-white">
                    © CyberLib App
                </p>
                <ul className="nav navbar-dark col-md-4 justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link px text-white"
                            href="#">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px text-white"
                            href="#">
                            Search
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}