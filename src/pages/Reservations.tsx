import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const reservationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  yachtSelection: z.string().min(1, 'Please select a yacht'),
  startDate: z.date({
    required_error: 'Please select a start date',
  }),
  endDate: z.date({
    required_error: 'Please select an end date',
  }),
  guests: z.string().min(1, 'Please specify number of guests'),
  specialRequests: z.string().optional(),
});

type ReservationForm = z.infer<typeof reservationSchema>;

const Reservations = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ReservationForm>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      yachtSelection: '',
      guests: '',
      specialRequests: '',
    },
  });

  const yachts = [
    { id: '1', name: 'Azure Dream - Motor Yacht (85ft)', price: '$5,500/day' },
    { id: '2', name: 'Ocean Elegance - Sailing Yacht (72ft)', price: '$2,800/day' },
    { id: '3', name: 'Royal Serenity - Super Yacht (150ft)', price: '$12,000/day' },
    { id: '4', name: 'Marina Pearl - Catamaran (45ft)', price: '$1,800/day' },
    { id: '5', name: 'Golden Horizon - Motor Yacht (68ft)', price: '$3,800/day' },
    { id: '6', name: 'Wind Dancer - Sailing Yacht (62ft)', price: '$2,200/day' },
  ];

  const onSubmit = (data: ReservationForm) => {
    console.log('Reservation data:', data);
    setIsSubmitted(true);
    toast({
      title: "Reservation Submitted!",
      description: "We'll contact you within 24 hours to confirm your booking.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6 text-center">
            <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-foreground">Reservation Submitted!</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for your booking request. Our team will contact you within 24 hours 
              to confirm your reservation and discuss the details.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Make Another Reservation
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Reserve Your Yacht
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Book your luxury yacht experience today. Fill out the form below and we'll 
              contact you to confirm your reservation and arrange all the details.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Reservation Details</CardTitle>
                  <CardDescription>
                    Please provide your information and preferences for your yacht experience.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Yacht Selection */}
                      <FormField
                        control={form.control}
                        name="yachtSelection"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Select Yacht</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Choose your preferred yacht" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {yachts.map((yacht) => (
                                  <SelectItem key={yacht.id} value={yacht.id}>
                                    <div className="flex justify-between items-center w-full">
                                      <span>{yacht.name}</span>
                                      <span className="text-muted-foreground ml-4">{yacht.price}</span>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Dates */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="startDate"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Start Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick start date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                      date < new Date()
                                    }
                                    initialFocus
                                    className={cn("p-3 pointer-events-auto")}
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="endDate"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>End Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick end date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                      date < new Date() || 
                                      (form.watch("startDate") && date <= form.watch("startDate"))
                                    }
                                    initialFocus
                                    className={cn("p-3 pointer-events-auto")}
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="guests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Guests</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select number of guests" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                                  <SelectItem key={num} value={num.toString()}>
                                    {num} Guest{num > 1 ? 's' : ''}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="specialRequests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Special Requests (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any special requirements, dietary restrictions, or requests for your yacht experience..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="btn-primary w-full">
                        Submit Reservation Request
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Booking Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">What's Included</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Professional crew services</li>
                      <li>• Fuel for standard itinerary</li>
                      <li>• Safety equipment</li>
                      <li>• Basic refreshments</li>
                      <li>• Water sports equipment</li>
                      <li>• Sound system access</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Additional Services</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Catering services available</li>
                      <li>• Photography packages</li>
                      <li>• Special event setup</li>
                      <li>• Extended range cruising</li>
                      <li>• Overnight accommodations</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Cancellation Policy</h4>
                    <p className="text-sm text-muted-foreground">
                      Free cancellation up to 48 hours before departure. 
                      Weather-related cancellations are fully refundable.
                    </p>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-foreground">Need Help?</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Our yacht specialists are available 24/7 to assist with your booking.
                    </p>
                    <p className="text-sm font-medium text-primary">
                      Call: +1 (555) 123-4567
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;