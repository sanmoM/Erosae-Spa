import Container from "@/components/shared/other/Container";
import PageBanner from "@/components/shared/other/PageBanner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const page = () => {
  return (
    <div className="space-y-12 md:space-y-20">
      <PageBanner
        image="https://fimgs.net/himg/o.HeXRUjt0Boe.jpg"
        title="Start Your Journey"
      />

      <Container className={" flex flex-col md:flex-row"}>
        <div className="flex-1">
          <h2 className="md:text-4xl mb-2 sm:text-3xl text-2xl  font-serif text-gray-300  italic">
            Lets Start Your Journey With EROASE
          </h2>
        </div>

        <div className="flex-1">
          <form className=" flex flex-col space-y-5 items-center" action="">
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="Name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default page;
