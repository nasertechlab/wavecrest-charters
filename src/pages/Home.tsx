import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Anchor, Star, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedWaves from '@/components/AnimatedWaves';
import heroYacht from '@/assets/hero-yacht.jpg';
import yachtCollection from '@/assets/yacht-collection.jpg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroYacht})` }}
        >
          <div className="absolute inset-0 bg-background/60"></div>
        </div>

        {/* Animated Waves */}
        <AnimatedWaves />

        {/* Hero Content */}
        <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 floating">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Experience Luxury
            </span>
            <br />
            <span className="text-foreground">on the Water</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover our exclusive collection of luxury yachts for rent and sale. 
            Your gateway to unforgettable maritime adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/yachts">
              <Button className="btn-primary group">
                Explore Yachts
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="btn-secondary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose AquaLux?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide unmatched luxury yacht experiences with premium service and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center fade-in-left">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Premium Quality</h3>
              <p className="text-muted-foreground">
                Our fleet consists of the finest luxury yachts, meticulously maintained 
                and equipped with world-class amenities.
              </p>
            </div>

            <div className="text-center fade-in-up">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Expert Service</h3>
              <p className="text-muted-foreground">
                Our experienced team provides personalized service to ensure your 
                maritime experience exceeds expectations.
              </p>
            </div>

            <div className="text-center fade-in-right">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Safety First</h3>
              <p className="text-muted-foreground">
                All our yachts meet the highest safety standards with professional 
                crews and comprehensive insurance coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${yachtCollection})` }}
        >
          <div className="absolute inset-0 bg-background/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                20+ Years of Maritime Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Since 2004, AquaLux Yachts has been the premier destination for luxury yacht 
                rentals and sales. Our passion for the sea and commitment to excellence has 
                made us the trusted choice for discerning clients worldwide.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From intimate sunset cruises to grand celebrations, we create unforgettable 
                experiences on the world's most beautiful waters.
              </p>
              <Link to="/about">
                <Button className="btn-primary">
                  Learn More About Us
                </Button>
              </Link>
            </div>

            <div className="fade-in-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Luxury Yachts</div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Set Sail?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Contact us today to book your luxury yacht experience or browse our 
              exclusive collection of yachts for sale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservations">
                <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg">
                  Book Now
                </Button>
              </Link>
              <Link to="/yachts">
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg">
                  View Yachts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;