import { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  quote: string;
  yacht: string;
  date: string;
  avatar: string;
}

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Michael Thompson',
      location: 'New York, NY',
      rating: 5,
      quote: 'Absolutely incredible experience! The Azure Dream exceeded all our expectations. The crew was professional, the yacht was immaculate, and the views were breathtaking. We celebrated our anniversary in style and created memories that will last a lifetime.',
      yacht: 'Azure Dream',
      date: 'September 2024',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      location: 'Los Angeles, CA',
      rating: 5,
      quote: 'From the moment we stepped aboard Royal Serenity, we knew we were in for something special. The luxury amenities, attentive service, and stunning vessel made our corporate retreat unforgettable. Highly recommend AquaLux!',
      yacht: 'Royal Serenity',
      date: 'August 2024',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'David Chen',
      location: 'Miami, FL',
      rating: 5,
      quote: 'The Ocean Elegance sailing yacht provided the perfect escape. The combination of luxury and adventure was exactly what we were looking for. The sunset dinner on the deck was magical. We\'ll definitely be booking again!',
      yacht: 'Ocean Elegance',
      date: 'October 2024',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      location: 'Chicago, IL',
      rating: 5,
      quote: 'Our family vacation on Marina Pearl was absolutely perfect. The catamaran was spacious, safe for the kids, and the crew went above and beyond to ensure everyone had a great time. Thank you for an amazing week!',
      yacht: 'Marina Pearl',
      date: 'July 2024',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Robert Wilson',
      location: 'Boston, MA',
      rating: 5,
      quote: 'Professional service, immaculate yacht, and an unforgettable experience. The Golden Horizon was the perfect venue for our business client entertainment. AquaLux delivers on every promise.',
      yacht: 'Golden Horizon',
      date: 'September 2024',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      location: 'Seattle, WA',
      rating: 5,
      quote: 'Wind Dancer gave us the ultimate sailing experience. The yacht was beautiful, the crew was knowledgeable, and the journey along the coast was breathtaking. Already planning our next adventure!',
      yacht: 'Wind Dancer',
      date: 'August 2024',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              What Our Clients Say
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover why our clients choose AquaLux for their luxury yacht experiences. 
              Read testimonials from satisfied customers who have sailed with us.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Quote className="h-8 w-8 text-primary" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-light text-foreground mb-8 leading-relaxed">
              "AquaLux Yachts provided us with the most incredible luxury yacht experience. 
              From the moment we stepped aboard until we reluctantly disembarked, every detail 
              was perfect. This is luxury yachting at its finest."
            </blockquote>
            <div className="flex justify-center mb-4">
              {renderStars(5)}
            </div>
            <cite className="text-lg text-muted-foreground">
              — Jennifer Martinez, VIP Client
            </cite>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Client Reviews</h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of satisfied customers who have experienced luxury with AquaLux
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className={`yacht-card fade-in-up h-full`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  <blockquote className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="border-t border-border pt-4 mt-auto">
                    <p className="text-sm text-primary font-medium">{testimonial.yacht}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                      <Card className="yacht-card">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                              <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                              <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                            </div>
                          </div>

                          <div className="flex mb-4">
                            {renderStars(testimonial.rating)}
                          </div>

                          <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                            "{testimonial.quote}"
                          </blockquote>

                          <div className="border-t border-border pt-4">
                            <p className="text-sm text-primary font-medium">{testimonial.yacht}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center mt-6 space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  className="rounded-full w-10 h-10 p-0"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  className="rounded-full w-10 h-10 p-0"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Return Clients</div>
            </div>
            <div className="fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Successful Charters</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Create Your Own Story?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join our community of satisfied clients and experience luxury yachting at its finest.
            </p>
            <Button 
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg"
            >
              Book Your Experience
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;