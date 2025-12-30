"use client";

import Container from "@/components/shared/other/Container";
import PageBanner from "@/components/shared/other/PageBanner";
import { spaBlogs } from "@/utilities/data";
import { ArrowRight, Calendar, Clock, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const BlogDetails = () => {
  const params = useParams();
  const { slug } = params;
  const data = spaBlogs.find((s) => s.slug === slug);

  return (
    <div className="space-y-12 md:space-y-20">
      <PageBanner
        title="Blog Details"
        image="https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_c_fill_q_auto:good_f_auto_w_800_h_500/v1527676209/Spa_Blog_1527675521.jpg"
      />

      <Container>
        <div className="flex flex-col md:flex-row md:gap-4 gap-8">
          <div className="md:w-2/3">
            <div className="mb-8 border-b border-gray-600 ">
              <h1 className="text-base md:text-2xl font-medium  leading-tight text-stone-200">
                {data.title}
              </h1>
              <div className="flex items-center gap-6 my-4 text-stone-400 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {data.date}
                </div>
              </div>
            </div>

            <div className="rounded-xl max-h-[500px] overflow-hidden mb-10 ">
              <Image
                src={data.image}
                alt="Main blog post"
                quality={100}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-sm md:text-base text-stone-400 leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>
          {/* Related Blogs Sidebar */}
          <aside className="md:w-1/3">
            <div className="sticky top-20">
              <h3 className="text-base md:text-lg  text-stone-200 font-bold mb-8 flex items-center gap-2">
                Related Articles
              </h3>

              <div className="space-y-4">
                {spaBlogs.slice(0,5).map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group flex border border-gray-700 rounded-md bg-gray-900/50 gap-4 items-start"
                  >
                    <div className="w-24 h-24 flex-shrink-0 rounded-l-md overflow-hidden  shadow-sm">
                      <Image
                        src={post.image}
                        alt={post.title}
                        quality={100}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex text-stone-400 my-2 text-xs items-center gap-2">
                        <Calendar size={16} />
                        {data.date}
                      </div>

                      <h4 className="font-bold  line-clamp-1 text-stone-400 text-sm leading-snug  transition-colors ">
                        {post.title}
                      </h4>
                      <div className="mt-2 flex items-center text-xs font-bold text-primary transition-colors">
                        Read More{" "}
                        <ArrowRight
                          size={14}
                          className="ml-1 group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
