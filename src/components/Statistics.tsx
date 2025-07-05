
import { Users, Building, Calendar, CreditCard } from "lucide-react";
import { useEffect, useState } from "react";

const StatCard = ({ icon: Icon, number, label, delay = 0 }: any) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = number / 100;
      const counter = setInterval(() => {
        setCount((prev) => {
          if (prev < number) {
            return Math.min(prev + increment, number);
          }
          clearInterval(counter);
          return number;
        });
      }, 20);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [number, delay]);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-green-100 rounded-xl">
          <Icon className="h-8 w-8 text-green-600" />
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-900">
            {Math.floor(count).toLocaleString()}
          </div>
          <div className="text-gray-500 font-medium">{label}</div>
        </div>
      </div>
    </div>
  );
};

const Statistics = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Helping a local <span className="text-green-600">business reinvent itself</span>
          </h2>
          <p className="text-xl text-gray-600">
            We reached here with our hard work and dedication
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard 
            icon={Users} 
            number={2245341} 
            label="Members" 
            delay={0}
          />
          <StatCard 
            icon={Building} 
            number={46328} 
            label="Clubs" 
            delay={200}
          />
          <StatCard 
            icon={Calendar} 
            number={828867} 
            label="Event Bookings" 
            delay={400}
          />
          <StatCard 
            icon={CreditCard} 
            number={1926436} 
            label="Payments" 
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
