import Link from "next/link";
import PaddingContainer from "../padding-container/padding-container";
import { Container } from "../container/container";
import Image from "next/image";
import PhoneNumberIcon from "@/app/icons/phone-number-icon";
import EMailIcon from "@/app/icons/mail-icon";

const ContactUs = () => {
  return (
    <section className="bg-darkBlue" id="contact-us">
      <PaddingContainer>
        <Container>
          <div
            className="bg-white shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),0px_3px_7px_-3px_rgba(0,0,0,0.3)]
            rounded-[30px] p-10 md:p-32 lg:p-40 flex flex-col lg:flex-row gap-20 justify-between items-start lg:items-center"
          >
            <div className="flex flex-col gap-20 w-full max-w-[800px]">
              <div className="flex flex-col gap-5 text-center lg:text-left">
                <h2 className="text-darkBlue font-bold text-xl lg:text-8xl animate-slide-up">
                  Contact Us!
                </h2>
                <p className="lg:text-[18px] text-base text-gray-500 animate-slide-in-left max-w-[600px] lg:max-w-[680px]">
                  Do you want your app to be fast and to be delivered within the
                  shortest deadline? Contact us!
                </p>
              </div>

              <form
                className="flex flex-col border-none gap-10 "
                name="contact"
                method="POST"
                action="/success"
                data-netlify="true"
              >
                <input
                  placeholder="Name"
                  className="text-black outline-0 bg-slate-50 text-base border border-slate-200 rounded-xl p-4 h-20"
                  name="name"
                />
                <input
                  placeholder="Email"
                  className="text-black outline-0 bg-slate-50 text-base border border-slate-200 rounded-xl p-4 h-20"
                  name="email"
                  type="email"
                  id="email"
                />
                <textarea
                  placeholder="Project Details"
                  rows={3}
                  className="text-black outline-0 bg-slate-50 text-base border border-slate-200 rounded-xl p-4"
                  name="details"
                />

                <button
                  className="flex justify-center items-center font-bold h-[42px] w-[110px] px-4 py-2 rounded-lg border-2 
                  transition-all duration-300 bg-blue border-transparent text-white text-base hover:bg-transparent hover:text-blue hover:border-blue"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-10">
                <PhoneNumberIcon />

                <div>
                  <p className="text-darkBlue  text-base lg:text-lg">Phone</p>
                  <p className="text-slate-600 text-mm lg:text-base">
                    UA: +38 098 776 44 30
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-10">
                <EMailIcon />

                <div>
                  <p className="text-darkBlue text-base lg:text-lg">Email</p>
                  <Link
                    href="mailto:sales@vertexglobal.com"
                    className="text-blue hover:underline text-mm lg:text-base"
                  >
                    sales@vertexglobal.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </PaddingContainer>
    </section>
  );
};

export default ContactUs;
