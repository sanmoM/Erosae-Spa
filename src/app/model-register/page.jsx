import Container from "@/components/shared/other/Container";
import FileUpload from "@/components/shared/other/FileUpload";
import PageBanner from "@/components/shared/other/PageBanner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phoneInput";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const page = () => {
  return (
    <div className="space-y-12 md:space-y-20">
      <PageBanner
        image="https://fimgs.net/himg/o.HeXRUjt0Boe.jpg"
        title="Start Your Journey"
      />

      <Container className={" "}>
        <div className="text-center">
          <h2 className="mb-2 heading-primary">
            Lets Start Your Journey With EROASE
          </h2>
        </div>

        <div className="max-w-4xl mx-auto border border-gray-700 md:p-12 p-4 rounded-md bg-gray-900/50 mt-12 w-full">
          <form className=" flex flex-col space-y-8 md:space-y-12" action="">
            <div className="flex flex-col space-y-5">
              <div className="border-b mb-6 border-primary/60">
                <h3 className="text-stone-300 md:text-lg ">
                  Personal Info
                </h3>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-5">
                <div className="grid w-full  items-center gap-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input type="text" id="name" placeholder="Name" />
                </div>
                <div className="grid w-full md:max-w-[250px] items-center  gap-2">
                  <Label htmlFor="age">Age *</Label>
                  <Input type="Number" id="age" placeholder="Enter Your Age" />
                </div>
              </div>
              <div className="grid w-full  items-center gap-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input type="emial" id="email" placeholder="Enter Your Email" />
              </div>
            </div>

            <div className="flex flex-col space-y-5">
              <div className="border-b mb-6 border-primary/60">
                <h3 className="text-stone-300 md:text-lg">
                  Contact Details
                </h3>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-5">
                <div className="grid w-full  items-center gap-2">
                  <Label>Phone Number *</Label>
                  <PhoneInput
                    defaultCountry="AE"
                    international
                    countryCallingCodeEditable={false}
                  />
                </div>
                <div className="grid w-full items-center  gap-2">
                  <Label>WhatsApp Number *</Label>
                  <PhoneInput
                    defaultCountry="AE"
                    international
                    countryCallingCodeEditable={false}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <div className="border-b mb-6 border-primary/60">
                <h3 className="text-stone-300 md:text-lg">
                  Contact Details
                </h3>
              </div>

              <div className="grid w-full  items-center gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea rows={7}  placeholder="Tell us about modeling exprience, aspirations, and why you want to join EROSE..." id="message" />
              </div>

          
                <div className="grid w-full  items-center gap-2">
                <Label >File Upload (optional)</Label>
                <FileUpload
                title={"ID"}
                accept={"application/pdf,image/*"}
                optional={true}
                />
              </div>
             
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default page;
