import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Calendar, Clock, User } from 'lucide-react';

const BlogsSection: React.FC = () => {
  const blogs = [
    {
      title: "Shenanigans of ‘This’ in Javascript",
      excerpt: "Unravel the mysteries of the 'this' keyword in JavaScript. Discover its quirks, common pitfalls, and how to master its behavior with confidence.",
      imageUrl: "this.webp",
      readTime: "8 min read",
      publishDate: "Dec 15, 2024",
      author: "Jigyasa Upadhyay",
      tags: ["React", "TypeScript", "Frontend"],
      url: "https://medium.com/@jigyasaupadhyay60/shenanigans-of-this-in-javascript-12f03a62a0d2",
      featured: true
    },
    {
      title: "Cherry AI - Building a typing assistant using chatGPT",
      excerpt: "Explore how Cherry AI leverages chatGPT to create an intelligent typing assistant, enhancing productivity and user experience with real-time AI-powered changes.",
      imageUrl: "cherrymedium.webp",
      readTime: "6 min read",
      publishDate: "Dec 10, 2024",
      author: "Jigyasa Upadhyay",
      tags: ["AI", "Web Development", "Future Tech"],
      url: "https://medium.com/@jigyasaupadhyay60/cherry-ai-building-a-typing-assistant-using-chatgpt-769b8d867e07",
      featured: false
    },
    {
      title: "Frontend Design System Components (Part 2)",
      excerpt: "A deep dive into building robust, reusable, and scalable frontend design system components. Learn advanced patterns, best practices, and real-world implementation tips in this continuation of our design system series.",
      imageUrl: "systemdesign.webp",
      readTime: "10 min read",
      publishDate: "Dec 5, 2024",
      author: "Jigyasa Upadhyay",
      tags: ["Next.js", "Performance", "Optimization"],
      url: "https://medium.com/@jigyasaupadhyay60/frontend-design-system-components-part-2-67ad22ff2bea",
      featured: false
    },
    {
      title: "Frontend Design System Components (Part 1)",
      excerpt: "Kickstart your journey into building scalable, maintainable design systems. In this first part, we explore the foundational principles, atomic design, and how to architect reusable UI components for modern web apps.",
      imageUrl: "sys.avif",
      readTime: "7 min read",
      publishDate: "Nov 28, 2024",
      author: "Jigyasa Upadhyay",
      tags: ["CSS", "UI/UX", "Design Systems"],
      url: "https://medium.com/@jigyasaupadhyay60/frontend-design-system-components-part-1-75f7f60caf94",
      featured: false
    },
    {
      title: "Building a Backbone.js Application with Webpack",
      excerpt: "A step-by-step guide to setting up and optimizing a Backbone.js application using Webpack. Learn how to modernize your legacy Backbone projects with efficient bundling, code splitting, and improved developer experience.",
      imageUrl: "build.webp",
      readTime: "9 min read",
      publishDate: "Nov 20, 2024",
      author: "Jigyasa Upadhyay",
      tags: ["Backbone.js", "Webpack", "Modernization"],
      url: "https://medium.com/@jigyasaupadhyay60/build-backbone-application-with-webpack-b89b850a1b7f",
      featured: false
    },
    {
      title: "Understanding Execution Context in JavaScript",
      excerpt: "Dive deep into how JavaScript handles execution context, scope, and the call stack. Master these core concepts to write more predictable and bug-free code.",
      imageUrl: "first.webp",
      readTime: "12 min read",
      publishDate: "Nov 15, 2024",
      author: "Jigyasa Upadhyay",
      tags: ["JavaScript", "Execution Context", "Call Stack"],
      url: "https://medium.com/@jigyasaupadhyay60/lets-learn-about-execution-context-in-javascript-b2e20229823b",
      featured: false
    }
  ];

  const featuredBlog = blogs.find(blog => blog.featured);
  const otherBlogs = blogs.filter(blog => !blog.featured);

  return (
    <section id="blogs" className="py-16 px-8 bg-[#151515]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b border-[#282828] pb-4">
            Latest Blog Posts
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on modern web development, 
            design patterns, and the latest technologies.
          </p>
        </div>

        {/* Featured Blog */}
        {featuredBlog && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-[#1ED760]">Featured Post</h3>
            <Card className="bg-[#282828] border-none hover:bg-[#333] transition-all duration-300 overflow-hidden hover:translate-y-[-5px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div 
                  className="h-64 lg:h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${featuredBlog.imageUrl})` }}
                />
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{featuredBlog.publishDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{featuredBlog.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{featuredBlog.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">{featuredBlog.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{featuredBlog.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredBlog.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-[#1ED760]/20 text-[#1ED760] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={featuredBlog.url}
                    target='_blank'
                    className="inline-flex items-center gap-2 text-[#1ED760] hover:text-white transition-colors font-medium"
                  >
                    Read More
                    <ExternalLink size={16} />
                  </a>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Other Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherBlogs.map((blog, index) => (
            <Card 
              key={index}
              className={cn(
                "bg-[#282828] border-none hover:bg-[#333] transition-all duration-300 overflow-hidden hover:translate-y-[-5px]",
                `animate-fade-in fade-delay-${index + 1}`
              )}
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${blog.imageUrl})` }}
              />
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{blog.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-white line-clamp-2">{blog.title}</h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">{blog.excerpt}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs bg-[#333] px-2 py-1 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {blog.tags.length > 2 && (
                    <span className="text-xs text-gray-400">+{blog.tags.length - 2}</span>
                  )}
                </div>
                
                <a 
                  href={blog.url}
                  target='_blank'
                  className="inline-flex items-center gap-1 text-sm text-[#1ED760] hover:text-white transition-colors"
                >
                  Read More
                  <ExternalLink size={14} />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Blogs Button */}
        {/* <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-block px-8 py-3 bg-[#1ED760] text-black font-medium rounded-full hover:bg-[#1bc255] transition-colors"
          >
            View All Posts
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default BlogsSection;
