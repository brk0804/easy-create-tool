
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Business with 
              <span className="text-green-600"> Pixelgrade</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Discover innovative solutions that help your business grow and succeed. We provide 
              cutting-edge technology and expert guidance to transform your ideas into reality. 
              Join thousands of satisfied customers who trust our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex gap-3">
                <Button asChild variant="outline" className="px-6 py-6 text-lg border-green-600 text-green-600 hover:bg-green-50">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-6 py-6 text-lg">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="bg-green-200 rounded-3xl p-8 relative overflow-hidden">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-20 h-2 bg-gray-200 rounded"></div>
                    <div className="w-16 h-2 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-2 bg-gray-200 rounded"></div>
                  <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                  <div className="w-full h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
              
              {/* Floating avatars */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-bounce">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-green-400 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
