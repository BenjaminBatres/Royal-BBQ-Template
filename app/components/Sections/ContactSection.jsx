import Image from "next/image";
import React from "react";
import ContactImg from "../../assets/ContactImg.jpg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import * as motion from "motion/react-client";
export default function ContactSection() {
  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-3xl" />,
      title: "Phone",
      description: "123 456 7899",
    },
    {
      icon: <MdEmail className="text-4xl" />,
      title: "Email",
      description: "RoyalBBQ@gmail.com",
    },
    {
      icon: <IoLocationSharp className="text-4xl" />,
      title: "Location",
      description: "1830 E Parks Hwy 99654",
    },
  ];

  const inputFields = [
    {
      label: "Email Address",
      type: "email",
      id: "email",
      stateKey: "email",
      placeholder: "name@email.com",
    },
    {
      label: "Message",
      type: "textarea",
      id: "Message",
      stateKey: "Message",
      placeholder: "Write your message",
    },
  ];

  const inputFieldsName = [
    {
      label: "First Name",
      type: "text",
      id: "name",
      stateKey: "name",
      placeholder: "Name",
    },
    {
      label: "Last Name",
      type: "text",
      id: "last-name",
      stateKey: "name",
      placeholder: "Last name",
    },
  ];
  return (
    <div className="py-30 px-5 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
          }}
          className="grid tablet:grid-cols-3 gap-8 items-center bg-white rounded-lg p-6 tablet:p-10"
        >
          {contactInfo.map((info, id) => (
            <div
              key={id}
              className="tablet:not-first:pl-6 text-black tablet:not-last:border-r border-dashed"
            >
              <div className="mb-6">{info.icon}</div>
              <h2 className="text-2xl uppercase font-semibold mb-4">
                {info.title}
              </h2>
              <p className="underline">{info.description}</p>
            </div>
          ))}
        </motion.div>
        <div className="grid tablet:grid-cols-2 gap-8">
          <motion.figure
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
          }}
          >
          <Image
            src={ContactImg}
            alt=""
            className="rounded-lg h-full object-cover
            "
          />

          </motion.figure>

          <motion.div 
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
          }}
          className="bg-white text-black rounded-lg px-4 py-6 tablet:px-8 tablet:py-10 flex flex-col justify-between">
            <div>
              <div className="flex flex-col tablet:flex-row gap-4 tablet:gap-9 mb-5">
                {inputFieldsName.map((field) => (
                  <div key={field.id} className="flex flex-col w-full">
                    <label htmlFor="" className="mb-2">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="px-4 py-2 rounded-full text-white placeholder:text-[#bbb] bg-[#1a1a1a] outline-0 w-full"
                    />
                  </div>
                ))}
              </div>
              {inputFields.map((field) => (
                <div key={field.id} className="flex flex-col mb-4">
                  <label htmlFor="" className="mb-2">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      placeholder={field.placeholder}
                      className="bg-[#1a1a1a] outline-0 w-full max-h-50 resize-y text-white placeholder:text-[#ddd] px-4 py-2 rounded-lg placeholder:text-[15px]"
                    ></textarea>
                  ) : (
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="px-4 py-2 rounded-full text-white placeholder:text-[#bbb] bg-[#1a1a1a] outline-0"
                    />
                  )}
                </div>
              ))}
            </div>
            <button
              href={"/"}
              className='uppercase text-[15px] font-semibold cursor-not-allowed py-2 px-6 bg-orange rounded-full overflow-hidden group flex gap-2 items-center z-1 relative transition-all duration-250 ease-linear before:content-[""] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:rounded-full before:bg-white before:transition-all before:-z-1 before:duration-300 before:ease-linear hover:before:w-full hover:text-orange w-fit'
            >
              Send message
              <div className="h-8 w-8 relative  overflow-hidden text-2xl">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full">
                  <BsArrowRight />
                </span>
                <span className="absolute inset-0 flex items-center justify-center -translate-x-full transition-transform duration-300 group-hover:translate-x-0">
                  <BsArrowRight />
                </span>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
