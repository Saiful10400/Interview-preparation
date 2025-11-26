import "./css/imageCardSlider.css"
import image1 from "../assets/photos/1.jpeg"
import image2 from "../assets/photos/2.jpeg"
import image3 from "../assets/photos/3.jpeg"
import image4 from "../assets/photos/4.jpeg"
import image5 from "../assets/photos/5.jpeg"
import image6 from "../assets/photos/6.jpeg"
const ImageCardSlider = () => {

    const Images = [image1, image2, image3, image4, image5, image6]

    return (
        <div className="carousel-wrapper">
            <div className="carousel-track" id="track">
                {
                    Images?.map((item, idx) => <div key={idx} className="card">
                        <img src={item} alt="Movie" className="card-image" />
                        <div className="card-title">The Dark Knight</div>
                        <div className="card-year">2008</div>
                    </div>)
                }
            </div>
            {/* {
                Images?.map((item, idx) => <img className="childImage" key={idx} src={item} />)
            } */}

        </div>
    );
};

export default ImageCardSlider;