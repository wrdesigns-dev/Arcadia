import { X, Calendar, Users, MapPin, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

interface BookingModalProps {
  retreat: {
    name: string;
    location: string;
    price: number;
    image: string;
  };
  onClose: () => void;
}

export function BookingModal({ retreat, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    name: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Handle booking submission
      alert('Booking confirmed! 🎉');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border/50 p-6 flex items-center justify-between rounded-t-3xl">
          <h2 className="text-2xl">Book Your Stay</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 pt-6">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-primary text-white' : 'bg-muted'}`}>
              {step > 1 ? <Check className="h-4 w-4" /> : '1'}
            </div>
            <div className={`h-1 w-16 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-primary text-white' : 'bg-muted'}`}>
              2
            </div>
          </div>
        </div>

        {/* Retreat Info */}
        <div className="px-6 mb-6">
          <div className="flex gap-4 p-4 bg-muted/30 rounded-2xl">
            <img
              src={retreat.image}
              alt={retreat.name}
              className="w-24 h-24 rounded-xl object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg mb-1">{retreat.name}</h3>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <MapPin className="h-3 w-3 mr-1" />
                {retreat.location}
              </div>
              <div className="text-lg">
                ${retreat.price} <span className="text-sm text-muted-foreground">/ night</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6">
          {step === 1 ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Check-in Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="pl-10 h-12 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Check-out Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="pl-10 h-12 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="number"
                    min="1"
                    max="10"
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                    className="pl-10 h-12 rounded-xl"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 rounded-xl mt-6"
                style={{ background: 'var(--gradient-ocean)' }}
              >
                Continue to Details
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Full Name</label>
                <Input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Email Address</label>
                <Input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="bg-muted/30 p-4 rounded-xl mt-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Price per night</span>
                  <span className="text-sm">${retreat.price}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Guests</span>
                  <span className="text-sm">{formData.guests}</span>
                </div>
                <div className="border-t border-border/50 my-3" />
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">${retreat.price * formData.guests}</span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1 h-12 rounded-xl"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="flex-1 h-12 rounded-xl"
                  style={{ background: 'var(--gradient-ocean)' }}
                >
                  Confirm Booking
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
