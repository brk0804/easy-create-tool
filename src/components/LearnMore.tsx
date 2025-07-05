
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, Zap, Shield } from "lucide-react";

const LearnMore = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast Performance",
      description: "Experience blazing fast speeds with our optimized infrastructure and cutting-edge technology."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Your data is protected with bank-level security measures and industry-standard encryption."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "24/7 Expert Support",
      description: "Get help whenever you need it from our dedicated team of experienced professionals."
    }
  ];

  const benefits = [
    "Increase productivity by up to 300%",
    "Reduce operational costs significantly",
    "Scale your business effortlessly",
    "Access advanced analytics and insights",
    "Seamless integration with existing tools"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-green-600">Pixelgrade?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our innovative platform helps businesses transform their operations, 
              increase efficiency, and achieve unprecedented growth in today's competitive market.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900">
                Powerful Features That Drive Results
              </h3>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="Modern workspace with laptop"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm opacity-90">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Transform Your Business Today
                </h3>
                <p className="text-gray-600 mb-8">
                  Join thousands of successful businesses that have already transformed their operations 
                  with Pixelgrade. Experience the difference our platform can make for your organization.
                </p>
                
                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop"
                  alt="Team collaboration"
                  className="rounded-xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop"
                  alt="Professional workspace"
                  className="rounded-xl shadow-lg mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop"
                  alt="Business meeting"
                  className="rounded-xl shadow-lg -mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop"
                  alt="Digital innovation"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
