"use client";

import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <div className="group rounded-2xl overflow-hidden border border-gray-700 bg-gray-900/70 hover:border-primary transition">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={blog.image || "/images/blog-placeholder.jpg"}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>
      

      {/* Content */}
      <div className="p-4 space-y-2">
        <p className="text-xs flex items-center gap-1 text-stone-400"><Calendar size={20}/>{blog.date}</p>

        <h3 className="sm:text-base font-semibold text-stone-300 line-clamp-1">
          {blog.title}
        </h3>

        <p className="text-sm text-stone-400 line-clamp-2">
          {blog.description}
        </p>

        <Link
          href={`/blog/${blog.slug}`}
          className="inline-block pt-2 mt-6 text-sm text-primary font-medium hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
