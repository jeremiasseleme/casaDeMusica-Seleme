import React from 'react'
import "./Slider.css"

export default function Slider() {
  return (
    <div id="carouselExampleIndicators" className="slider carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active" data-bs-interval="2900">
                        <img src="https://yamahamusical.co/wp-content/uploads/2019/11/banner-home.jpg"
                            className="d-block w-100" alt="slide1"/>
                    </div>

                    <div className="carousel-item" data-bs-interval="2900">
                        <img src="https://es.yamaha.com/es/files/Neo_banner_002d9e965ba65309bd38e8739f46edca.JPG"
                            className="d-block w-100" alt="slide2"/>
                    </div>

                    <div className="carousel-item" data-bs-interval="2900">
                        <img src="https://m.media-amazon.com/images/S/aplus-media/sota/4076464f-a717-429d-a2f7-56665a1ed4d0.__CR61,0,1028,318_PT0_SX970_V1___.png"
                            className="d-block w-100" alt="slide3"/>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
  )
}
