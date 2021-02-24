const HomeCard = () =>{
    return (
        <div className="homeCard">
            <h2>&nbsp;About</h2>
            <div className="homeCard-Image">
                <img src={`${process.env.PUBLIC_URL}/img/donia.png`} />
            </div>
            <div className="homeCard-Text">
                <h3>&nbsp;Donia Osama</h3>
                <p>Voiceover artist with over 5 years of professional experience in TV ads, dubbing and radio in various Arabic dialects,American English, as well as a passionate singer in    multi nati ...</p>
                <p className="red"><a href="#">Read More</a></p>
            </div>
        </div>
    )
}

export default HomeCard