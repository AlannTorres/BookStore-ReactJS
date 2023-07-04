import CarouselBS from 'react-bootstrap/Carousel';

import './index.css'

export const Carousel = ({ carouselData }) => {
    return (
        <CarouselBS>
            {carouselData.map((item, itemIndex) => {
                return (
                    <CarouselBS.Item key={itemIndex}>
                        <img
                            className="d-block w-100"
                            src={item.image}
                            alt={item.alt}
                        />
                        <CarouselBS.Caption>
                            <h3 className="carousel-title text-center">{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </CarouselBS.Caption>
                    </CarouselBS.Item>
                )
            })}
        </CarouselBS>
    )
}