
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 relative overflow-hidden">
              <div className="bg-white rounded-2xl p-6 shadow-lg relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-8 h-8 bg-green-500 rounded-lg"></div>
                  <Shield className="h-12 w-12 text-green-600" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-32 h-3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="w-24 h-3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-28 h-3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="space-y-2 mt-6">
                    <div className="w-full h-2 bg-gray-200 rounded"></div>
                    <div className="w-full h-2 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Person illustration */}
              <div className="absolute bottom-0 left-8 w-16 h-20 bg-gray-800 rounded-t-full"></div>
              <div className="absolute bottom-16 left-10 w-12 h-12 bg-green-600 rounded-full"></div>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              How to design your site footer like 
              <span className="text-green-600">we did</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt 
              molestie, massa nunc velit, arcu sed lobortis elit est elit arcu, sodales vitae augue 
              venenatis velit. Aliquam vul  putate ultrices nec ipsum egestas velit.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
