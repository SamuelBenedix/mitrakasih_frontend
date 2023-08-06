import React from "react";
import Container from "@/components/atoms/container";

interface Props {}

export default function HomeForm(props: Props) {
  const {} = props;

  return (
    <section className="mt-20">
      <Container>
        <div>
          <p className="text-lg">
            <span className="text-red-500">*</span> Required
          </p>
          <form className="mt-10">
            <div>
              <div className="space-y-2">
                <label className="text-lg font-semibold">
                  Name<span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-x-8">
                  <div>
                    <input type="text" className="w-full" />
                    <p className="text-gray-500 text-sm">First Name</p>
                  </div>
                  <div>
                    <input type="text" className="w-full" />
                    <p className="text-gray-500 text-sm">Last Name</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-8 mt-10">
                <div className="space-y-2 mt-8">
                  <label className="text-lg font-semibold">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input type="email" className="w-full" />
                </div>
                <div className="space-y-2 mt-8">
                  <label className="text-lg font-semibold">
                    Mobile Number<span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="w-full" />
                </div>
                <div className="space-y-2 mt-8">
                  <label className="text-lg font-semibold">
                    Company or Organisation
                    <span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="w-full" />
                </div>
                <div className="space-y-2 mt-8">
                  <label className="text-lg font-semibold">
                    Nationality<span className="text-red-500">*</span>
                  </label>
                  <select className="w-full"></select>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <label className="text-lg font-semibold">
                  Grade Levels of Interest
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <label className="text-lg">
                    Preschool (Age 3 to Kindergarten)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <label className="text-lg">Elementary (Grade 1 to 5)</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <label className="text-lg">
                    Middle School (Grade 6 to 8)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <label className="text-lg">High School (Grade 9 to 12)</label>
                </div>
                <p className="text-gray-500 text-sm">Check all that apply</p>
              </div>
              <div className="mt-8 space-y-4">
                <label className="text-lg font-semibold">
                  How can we help you?
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full min-h-[10rem]"
                  placeholder="Please provide your date of birth, current grade level, current school, nationality, and any other important details. And let us know if you would like to schedule a tour."
                ></textarea>
              </div>
              <div className="mt-8 space-y-4">
                <label className="text-lg font-semibold">
                  Terms of Service
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" />
                  <label className="text-lg">
                    By submitting this form, I give my consent to JIS to process
                    my personal information & sensitive personal information for
                    the purpose(s) described in the Privacy Policy.
                  </label>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button className="bg-white font-semibold text-primary-800 py-4 px-6 hover:bg-blue-800 outline outline-1 transition outline-primary-800 hover:text-white">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
