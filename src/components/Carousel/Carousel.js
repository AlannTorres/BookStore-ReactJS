import CarouselBS from 'react-bootstrap/Carousel';

export const Carousel = ({ carroselData }) => {
    return (
        <CarouselBS>
            {carroselData.map(slide => {
                return (
                    <CarouselBS.Item>
                        <img
                            className="d-block w-100"
                            src={slide.image}
                            alt={slide.alt}
                        />
                        <CarouselBS.Caption>
                            <h3>{slide.title}</h3>
                            <p>{slide.subtitle}</p>
                        </CarouselBS.Caption>
                    </CarouselBS.Item>
                )
            })}
        </CarouselBS>
    )
}