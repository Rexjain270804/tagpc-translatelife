import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const images = [
    {
        src: "/images/carousel/1.jpeg",
        alt: "Conference Highlight 1",
    },
    {
        src: "/images/carousel/2.jpeg",
        alt: "Conference Highlight 2",
    },
    {
        src: "/images/carousel/3.jpeg",
        alt: "Conference Highlight 3",
    },
    {
        src: "/images/carousel/4.jpeg",
        alt: "Conference Highlight 4",
    },
];

const ImageCarousel = () => {
    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-primary">Gallery</h2>
                </div>
                <div className="flex justify-center">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-5xl"
                    >
                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default ImageCarousel;
