import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Users, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import heroYacht from '@/assets/hero-yacht.jpg';
import yachtInterior from '@/assets/yacht-interior.jpg';
import sailingYacht from '@/assets/sailing-yacht.jpg';
import yachtCollection from '@/assets/yacht-collection.jpg';

interface Yacht {
  id: number;
  name: string;
  description: string;
  status: 'For Sale' | 'For Rent';
  price: string;
  type: 'Motor Yacht' | 'Sailing Yacht' | 'Catamaran' | 'Super Yacht';
  length: string;
  capacity: number;
  location: string;
  image: string;
  featured?: boolean;
}

const Yachts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const yachts: Yacht[] = [
    {
      id: 1,
      name: 'Azure Dream',
      description: 'Luxury motor yacht perfect for entertaining and long voyages.',
      status: 'For Rent',
      price: '$5,500/day',
      type: 'Motor Yacht',
      length: '85 ft',
      capacity: 12,
      location: 'Miami Beach',
      image: heroYacht,
      featured: true
    },
    {
      id: 2,
      name: 'Ocean Elegance',
      description: 'Sophisticated sailing yacht with premium amenities.',
      status: 'For Sale',
      price: '$2.8M',
      type: 'Sailing Yacht',
      length: '72 ft',
      capacity: 8,
      location: 'Newport',
      image: sailingYacht
    },
    {
      id: 3,
      name: 'Royal Serenity',
      description: 'Ultra-luxury super yacht with world-class service.',
      status: 'For Rent',
      price: '$12,000/day',
      type: 'Super Yacht',
      length: '150 ft',
      capacity: 20,
      location: 'Monaco',
      image: yachtCollection,
      featured: true
    },
    {
      id: 4,
      name: 'Marina Pearl',
      description: 'Beautiful catamaran ideal for family adventures.',
      status: 'For Sale',
      price: '$850K',
      type: 'Catamaran',
      length: '45 ft',
      capacity: 10,
      location: 'San Diego',
      image: yachtInterior
    },
    {
      id: 5,
      name: 'Golden Horizon',
      description: 'Classic motor yacht with modern luxury features.',
      status: 'For Rent',
      price: '$3,800/day',
      type: 'Motor Yacht',
      length: '68 ft',
      capacity: 10,
      location: 'Fort Lauderdale',
      image: heroYacht
    },
    {
      id: 6,
      name: 'Wind Dancer',
      description: 'Performance sailing yacht for the ultimate sailing experience.',
      status: 'For Sale',
      price: '$1.9M',
      type: 'Sailing Yacht',
      length: '62 ft',
      capacity: 8,
      location: 'Annapolis',
      image: sailingYacht
    },
    {
      id: 7,
      name: 'Sunset Paradise',
      description: 'Magnificent super yacht with helicopter pad and infinity pool.',
      status: 'For Rent',
      price: '$18,000/day',
      type: 'Super Yacht',
      length: '200 ft',
      capacity: 24,
      location: 'Monaco',
      image: yachtCollection,
      featured: true
    },
    {
      id: 8,
      name: 'Crystal Waters',
      description: 'Modern catamaran with panoramic views and spacious deck.',
      status: 'For Rent',
      price: '$2,200/day',
      type: 'Catamaran',
      length: '52 ft',
      capacity: 12,
      location: 'Key West',
      image: yachtInterior
    },
    {
      id: 9,
      name: 'Neptune\'s Crown',
      description: 'Prestigious motor yacht with onboard spa and cinema.',
      status: 'For Sale',
      price: '$4.2M',
      type: 'Motor Yacht',
      length: '95 ft',
      capacity: 14,
      location: 'Miami Beach',
      image: heroYacht
    },
    {
      id: 10,
      name: 'Atlantic Breeze',
      description: 'Classic sailing yacht with traditional charm and modern comfort.',
      status: 'For Rent',
      price: '$2,800/day',
      type: 'Sailing Yacht',
      length: '65 ft',
      capacity: 8,
      location: 'Nantucket',
      image: sailingYacht
    },
    {
      id: 11,
      name: 'Emerald Seas',
      description: 'Eco-friendly motor yacht with solar panels and hybrid engines.',
      status: 'For Sale',
      price: '$3.5M',
      type: 'Motor Yacht',
      length: '78 ft',
      capacity: 10,
      location: 'Seattle',
      image: heroYacht
    },
    {
      id: 12,
      name: 'Caribbean Star',
      description: 'Luxury catamaran perfect for island hopping adventures.',
      status: 'For Rent',
      price: '$3,200/day',
      type: 'Catamaran',
      length: '58 ft',
      capacity: 14,
      location: 'St. Thomas',
      image: yachtInterior
    },
    {
      id: 13,
      name: 'Majestic Explorer',
      description: 'Expedition super yacht designed for long-range cruising.',
      status: 'For Sale',
      price: '$8.5M',
      type: 'Super Yacht',
      length: '180 ft',
      capacity: 18,
      location: 'Fort Lauderdale',
      image: yachtCollection
    },
    {
      id: 14,
      name: 'Regatta Champion',
      description: 'High-performance racing yacht with luxury accommodations.',
      status: 'For Rent',
      price: '$4,500/day',
      type: 'Sailing Yacht',
      length: '75 ft',
      capacity: 10,
      location: 'Newport',
      image: sailingYacht
    },
    {
      id: 15,
      name: 'Diamond Princess',
      description: 'Opulent motor yacht with marble interiors and gold fixtures.',
      status: 'For Sale',
      price: '$6.8M',
      type: 'Motor Yacht',
      length: '110 ft',
      capacity: 16,
      location: 'Monaco',
      image: heroYacht,
      featured: true
    },
    {
      id: 16,
      name: 'Ocean Harmony',
      description: 'Stable catamaran with shallow draft for bay and coastal cruising.',
      status: 'For Rent',
      price: '$1,800/day',
      type: 'Catamaran',
      length: '42 ft',
      capacity: 8,
      location: 'San Francisco',
      image: yachtInterior
    },
    {
      id: 17,
      name: 'Midnight Express',
      description: 'Fast motor yacht with sleek design and powerful engines.',
      status: 'For Sale',
      price: '$2.1M',
      type: 'Motor Yacht',
      length: '58 ft',
      capacity: 8,
      location: 'Miami Beach',
      image: heroYacht
    },
    {
      id: 18,
      name: 'Tranquil Voyager',
      description: 'Peaceful sailing yacht perfect for romantic getaways.',
      status: 'For Rent',
      price: '$2,500/day',
      type: 'Sailing Yacht',
      length: '55 ft',
      capacity: 6,
      location: 'Martha\'s Vineyard',
      image: sailingYacht
    }
  ];

  const filteredYachts = yachts.filter(yacht => {
    const matchesSearch = yacht.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         yacht.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !typeFilter || yacht.type === typeFilter;
    const matchesStatus = !statusFilter || yacht.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

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

    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Luxury Yacht Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our exclusive fleet of premium yachts available for rent and purchase. 
              Each vessel offers uncompromising luxury and unforgettable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search yachts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Yacht Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                <SelectItem value="Motor Yacht">Motor Yacht</SelectItem>
                <SelectItem value="Sailing Yacht">Sailing Yacht</SelectItem>
                <SelectItem value="Catamaran">Catamaran</SelectItem>
                <SelectItem value="Super Yacht">Super Yacht</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Status</SelectItem>
                <SelectItem value="For Rent">For Rent</SelectItem>
                <SelectItem value="For Sale">For Sale</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Prices</SelectItem>
                <SelectItem value="under-1m">Under $1M</SelectItem>
                <SelectItem value="1m-3m">$1M - $3M</SelectItem>
                <SelectItem value="above-3m">Above $3M</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="w-full">
              <Filter className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Yacht Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredYachts.map((yacht, index) => (
              <div 
                key={yacht.id} 
                className={`yacht-card fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img 
                    src={yacht.image} 
                    alt={yacht.name}
                    className="w-full h-64 object-cover"
                  />
                  {yacht.featured && (
                    <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                      Featured
                    </Badge>
                  )}
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      yacht.status === 'For Sale' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    {yacht.status}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{yacht.name}</h3>
                  <p className="text-muted-foreground mb-4">{yacht.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Gauge className="h-4 w-4 text-primary mr-1" />
                      <span className="text-muted-foreground">{yacht.length}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-primary mr-1" />
                      <span className="text-muted-foreground">{yacht.capacity}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-primary mr-1" />
                      <span className="text-muted-foreground">{yacht.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-primary">{yacht.price}</div>
                    <Link to={`/yachts/${yacht.id}`}>
                      <Button className="btn-primary">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredYachts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No yachts found matching your criteria. Please adjust your filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Yachts;