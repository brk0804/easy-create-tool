
import { Star, ArrowRight } from "lucide-react";

const Testimonial = () => {
  const customers = [
    { id: 1, name: "Sarah Johnson", company: "TechCorp", image: "photo-1581091226825-a6a2a5aee158" },
    { id: 2, name: "Michael Chen", company: "StartupXYZ", image: "photo-1488590528505-98d2b5aba04b" },
    { id: 3, name: "Emily Davis", company: "GrowthLab", image: "photo-1649972904349-6e44c42644a7" },
    { id: 4, name: "David Wilson", company: "InnovateCo", image: "photo-1519389950473-47ba0277781c" },
    { id: 5, name: "Lisa Thompson", company: "FutureTech", image: "photo-1460925895917-afdab827c52f" },
    { id: 6, name: "James Rodriguez", company: "NextGen", image: "photo-1527576539890-dfa815648363" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed opacity-90">
                  "Pixelgrade transformed our business operations completely. Their innovative solutions 
                  and expert guidance helped us streamline our processes and achieve remarkable growth. 
                  The team's dedication to excellence and customer satisfaction is truly outstanding. 
                  We couldn't be happier with the results."
                </p>
                
                <div>
                  <div className="font-semibold text-xl">Tim Smith</div>
                  <div className="text-green-400 font-medium">British Dragon Boat Racing Association</div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:space-x-8 sm:items-center pt-4 space-y-4 sm:space-y-0">
                  <div className="flex space-x-3">
                    {customers.map((customer) => (
                      <div key={customer.id} className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-400">
                        <img 
                          src={`https://images.unsplash.com/${customer.image}?w=40&h=40&fit=crop&crop=face`}
                          alt={customer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <button className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors">
                    <span>Meet all customers</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl mx-auto flex items-center justify-center">
                  <div className="text-6xl font-bold">TS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
