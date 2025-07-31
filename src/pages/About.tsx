import { useEffect } from 'react';
import { Anchor, Award, Users, Globe, Heart, Shield } from 'lucide-react';
import yachtCollection from '@/assets/yacht-collection.jpg';
import heroYacht from '@/assets/hero-yacht.jpg';

const About = () => {
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

  const teamMembers = [
    {
      name: 'Captain James Mitchell',
      role: 'Founder & CEO',
      experience: '25+ years',
      description: 'Former naval officer with extensive experience in luxury yacht operations and maritime safety.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Marina Rodriguez',
      role: 'Operations Director',
      experience: '15+ years',
      description: 'Expert in yacht management and client relations, ensuring every experience exceeds expectations.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Thomas Chen',
      role: 'Head of Sales',
      experience: '12+ years',
      description: 'Specialist in luxury yacht sales and acquisitions with deep market knowledge.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Sophie Williams',
      role: 'Customer Experience Manager',
      experience: '8+ years',
      description: 'Dedicated to creating personalized yacht experiences and maintaining client relationships.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every aspect of our service, from yacht maintenance to customer care.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Safety is our top priority. All our vessels meet stringent safety standards with professional crews.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for the sea and luxury yachting drives us to create unforgettable experiences for our clients.'
    },
    {
      icon: Users,
      title: 'Service',
      description: 'Personalized attention and exceptional service are at the heart of everything we do.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We are committed to protecting the oceans we love through responsible yachting practices.'
    },
    {
      icon: Anchor,
      title: 'Heritage',
      description: 'Built on maritime tradition and innovation, we honor the rich heritage of luxury yachting.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroYacht})` }}
        >
          <div className="absolute inset-0 bg-background/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About AquaLux
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              For over two decades, we've been setting the standard for luxury yacht experiences, 
              combining maritime expertise with uncompromising service to create unforgettable journeys on the water.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2004 by Captain James Mitchell, AquaLux Yachts began as a vision to 
                  democratize luxury yachting experiences. After spending over two decades in the 
                  maritime industry, Captain Mitchell saw an opportunity to bridge the gap between 
                  yacht ownership and accessible luxury.
                </p>
                <p>
                  What started with a single yacht has grown into a fleet of over 50 premium vessels, 
                  each carefully selected and maintained to our exacting standards. Our commitment to 
                  excellence has made us the preferred choice for discerning clients seeking 
                  unparalleled yacht experiences.
                </p>
                <p>
                  Today, AquaLux Yachts operates across multiple prime locations, offering both 
                  charter services and yacht sales. Our reputation is built on trust, expertise, 
                  and an unwavering dedication to creating memories that last a lifetime.
                </p>
              </div>
            </div>
            
            <div className="fade-in-right">
              <img 
                src={yachtCollection} 
                alt="AquaLux yacht collection"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center fade-in-left">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Anchor className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide exceptional luxury yacht experiences that create lasting memories while 
                maintaining the highest standards of safety, service, and environmental responsibility. 
                We believe everyone deserves to experience the freedom and beauty of the open seas.
              </p>
            </div>

            <div className="text-center fade-in-right">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the world's most trusted and innovative luxury yacht company, recognized for 
                our commitment to excellence, sustainability, and creating transformative experiences 
                that connect people with the beauty and majesty of the ocean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className={`text-center fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced professionals are passionate about yachting and dedicated to 
              providing you with exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name} 
                className={`text-center yacht-card fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-secondary mb-3">{member.experience}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">20+</div>
              <div className="text-primary-foreground/90">Years Experience</div>
            </div>
            <div className="fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">50+</div>
              <div className="text-primary-foreground/90">Luxury Yachts</div>
            </div>
            <div className="fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/90">Happy Clients</div>
            </div>
            <div className="fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-primary-foreground/90">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ready to Sail With Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Experience the AquaLux difference. Contact us today to discuss your yacht rental 
              or purchase needs, and let us help you create unforgettable memories on the water.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Explore Our Fleet
              </button>
              <button className="btn-secondary">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;