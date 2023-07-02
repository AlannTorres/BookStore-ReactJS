import CarouselBS from 'react-bootstrap/Carousel';

import './index.css'

export const Carousel = ({ carouselData }) => {
    return (
        <CarouselBS>
            {carouselData.map(slide => {
                return (
                    <CarouselBS.Item>
                        <img
                            className="d-block w-100"
                            src={slide.image}
                            alt={slide.alt}
                        />
                        <CarouselBS.Caption>
                            <h3 className="carousel-title text-center">{slide.title}</h3>
                            <p>{slide.subtitle}</p>
                        </CarouselBS.Caption>
                    </CarouselBS.Item>
                )
            })}
        </CarouselBS>
    )
}