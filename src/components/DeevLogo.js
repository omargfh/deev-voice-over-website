const DeevLogo = (props) => {
    return (
        <div className="logo">
            <img src={`${process.env.PUBLIC_URL}/img/logo.png`} className="logoImage" />
            <div className="logoText">
                <h1 className="logoMain">
                    Deev
                </h1>
                <h2 className="logoHeadline">Voice Over</h2>
            </div>
        </div>
    )
}

export default DeevLogo