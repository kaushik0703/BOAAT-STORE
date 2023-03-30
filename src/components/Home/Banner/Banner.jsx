import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Minus quasi doloremque quos labore quibusdam, laudantium possimus 
                    fugiat hic accusamus unde quo adipisci atque ratione eius rem 
                    voluptatibus iste expedita ullam.
                </p>
                <div className="ctas">
                    <div className="banner-cta"> READ MORE</div>
                    <div className="banner-cta v2"> SHOP NOW</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="banner-img"/>
        </div>
    </div>;
};

export default Banner;
