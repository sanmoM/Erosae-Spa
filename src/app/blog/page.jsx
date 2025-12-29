import BlogCard from "@/components/shared/card/blogCard/BlogCard";
import Container from "@/components/shared/other/Container";
import PageBanner from "@/components/shared/other/PageBanner";
import { spaBlogs } from "@/utilities/data";
import React from "react";

const page = () => {
  return (
    <div className="space-y-12 md:space-y-20">
      <PageBanner
        title="Our Blog"
        image="https://avatars.mds.yandex.net/i?id=9af825bd8a4311c6c526a97857bddb9e83ea597e-12447078-images-thumbs&n=13"
      />
      <Container>
        <div className="border-b border-primary/60">
          <h2 className="heading-primary mb-2">Wellness Insights & Tips</h2>
          <p className="text-stone-400 pb-1 text-sm md:text-base leading-relaxed max-w-2xl ">
           Explore expert articles on massage therapy, holistic wellness, and your journey to better health.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {
                spaBlogs.map((blog,key) => <BlogCard key={key} blog={blog}></BlogCard>)
            }
        </div>
      </Container>
    </div>
  );
};

export default page;
