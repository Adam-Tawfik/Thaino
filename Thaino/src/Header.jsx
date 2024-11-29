import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="title">Thaino</h1>
                <ul className="nav options">
                    <li>
                        <a href="#" className="nav-link text-secondary">
                            <svg
                                className="bi d-block mx-auto mb-1"
                                width="24"
                                height="24"
                            >
                                <use xlinkHref="#home"></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg
                                className="bi d-block mx-auto mb-1"
                                width="24"
                                height="24"
                            >
                                <use xlinkHref="#speedometer2"></use>
                            </svg>
                            
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg
                                className="bi d-block mx-auto mb-1"
                                width="24"
                                height="24"
                            >
                                <use xlinkHref="#table"></use>
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg
                                className="bi d-block mx-auto mb-1"
                                width="24"
                                height="24"
                            >
                                <use xlinkHref="#grid"></use>
                            </svg>
                            Summary 
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg
                                className="bi d-block mx-auto mb-1"
                                width="24"
                                height="24"
                            >
                                <use xlinkHref="#people-circle"></use>
                            </svg>
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
