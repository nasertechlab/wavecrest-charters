import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Gauge, Anchor, Calendar, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import heroYacht from '@/assets/hero-yacht.jpg';
import yachtInterior from '@/assets/yacht-interior.jpg';
import sailingYacht from '@/assets/sailing-yacht.jpg';

const YachtDetails = () => {
  const { id } = useParams();

  // Mock yacht data - in real app, this would come from an API
  const yacht = {
    id: parseInt(id || '1'),
    name: 'Azure Dream',
    description: 'Experience ultimate luxury aboard Azure Dream, a magnificent 85-foot motor yacht that redefines elegance on the water. This stunning vessel combines sophisticated design with cutting-edge technology to provide an unforgettable maritime experience.',
    status: 'For Rent',
    price: '$5,500/day',
    type: 'Motor Yacht',
    length: '85 ft',
    capacity: 12,
    maxSpeed: '25 knots',
    cruiseSpeed: '18 knots',
    cabins: 4,
    bathrooms: 4,
    crew: 3,
    location: 'Miami Beach, Florida',
    yearBuilt: 2019,
    builder: 'Luxury Yachts International',
    images: [heroYacht, yachtInterior, sailingYacht],
    amenities: [
      'Master suite with king bed',
      'Full kitchen with chef services',
      'Sun deck with jacuzzi',
      'Water sports equipment',
      'Premium sound system',
      'Air conditioning throughout',
      'WiFi and entertainment system',
      'Professional crew included'
    ],
    specifications: {
      'Length': '85 ft (26m)',
      'Beam': '22 ft (6.7m)',
      'Draft': '6 ft (1.8m)',
      'Engines': 'Twin diesel engines',
      'Fuel Capacity': '2,500 gallons',
      'Water Capacity': '600 gallons',
      'Generator': 'Kohler 25kW',
      'Construction': 'Fiberglass'
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/yachts" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Yachts
        </Link>
      </div>

      {/* Image Gallery */}
      <section className="mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <img 
                src={yacht.images[0]} 
                alt={yacht.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {yacht.images.slice(1).map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${yacht.name} ${index + 2}`}
                  className="w-full h-44 lg:h-60 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Yacht Info */}
      <section className="mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-4xl font-bold mb-2 text-foreground">{yacht.name}</h1>
                  <p className="text-xl text-muted-foreground">{yacht.type} • {yacht.location}</p>
                </div>
                <Badge 
                  className={`text-lg px-4 py-2 ${
                    yacht.status === 'For Sale' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {yacht.status}
                </Badge>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {yacht.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-card rounded-lg">
                  <Gauge className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground">{yacht.length}</div>
                  <div className="text-sm text-muted-foreground">Length</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground">{yacht.capacity}</div>
                  <div className="text-sm text-muted-foreground">Guests</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <Anchor className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground">{yacht.cabins}</div>
                  <div className="text-sm text-muted-foreground">Cabins</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground">{yacht.yearBuilt}</div>
                  <div className="text-sm text-muted-foreground">Year Built</div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Amenities & Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {yacht.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Specifications</h3>
                <div className="bg-card rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(yacht.specifications).map(([key, value], index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-border last:border-b-0">
                        <span className="font-medium text-foreground">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Video Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Video Tour</h3>
                <div className="bg-card rounded-lg p-6 text-center">
                  <div className="bg-primary/10 rounded-lg p-12 flex flex-col items-center justify-center">
                    <Play className="h-16 w-16 text-primary mb-4" />
                    <h4 className="text-xl font-semibold mb-2 text-foreground">Virtual Yacht Tour</h4>
                    <p className="text-muted-foreground mb-4">
                      Take a detailed virtual tour of this magnificent yacht
                    </p>
                    <Button className="btn-primary">
                      Watch Video Tour
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">{yacht.price}</div>
                  <p className="text-muted-foreground">
                    {yacht.status === 'For Rent' ? 'Per day' : 'Purchase price'}
                  </p>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-primary mr-3" />
                    <span className="text-muted-foreground">{yacht.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-primary mr-3" />
                    <span className="text-muted-foreground">Up to {yacht.capacity} guests</span>
                  </div>
                  <div className="flex items-center">
                    <Gauge className="h-4 w-4 text-primary mr-3" />
                    <span className="text-muted-foreground">{yacht.maxSpeed} max speed</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link to="/reservations" className="w-full">
                    <Button className="btn-primary w-full">
                      {yacht.status === 'For Rent' ? 'Book This Yacht' : 'Inquire About Purchase'}
                    </Button>
                  </Link>
                  <Link to="/contact" className="w-full">
                    <Button variant="outline" className="w-full">
                      Contact Agent
                    </Button>
                  </Link>
                </div>

                <Separator className="my-6" />

                {/* Map Placeholder */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-3 text-foreground">Location</h4>
                  <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">{yacht.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YachtDetails;