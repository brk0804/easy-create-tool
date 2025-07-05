
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BlogCard = ({ title, image, delay = 0 }: any) => {
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        {image}
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
          {title}
        </h3>
        <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0 h-auto font-medium group">
          Readmore
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Caring is the new marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The Nexcent blog is the best place to read about the latest membership insights, 
            trends and more. See who's joining the community, read about how our community 
            are increasing their membership income and let's see more.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <BlogCard 
            title="Creating Streamlined Safeguarding Processes with OneRen"
            image={
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <div className="text-white text-2xl font-bold">📊</div>
              </div>
            }
            delay={0}
          />
          <BlogCard 
            title="What are your safeguarding responsibilities and how can you manage them?"
            image={
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-2xl font-bold">💻</div>
              </div>
            }
            delay={200}
          />
          <BlogCard 
            title="Revamping the Membership Model with Triathlon Australia"
            image={
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-2xl font-bold">📝</div>
              </div>
            }
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
