import React from "react";
import Video from "next-video";
import * as motion from "motion/react-client";
import AboutVideo from "../../../videos/About-video.mp4";
export default function AboutCompanySection() {
  return (
    <section className="py-25 px-5">
      <div className="max-w-7xl mx-auto space-y-10 lg:space-y-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
            }}
          >
            <h3 className="md:text-lg uppercase text-orange font-semibold mb-4 text-center">
              About Company
            </h3>
            <h2 className="text-3xl md:text-5xl uppercase font-bold text-center mb-6 max-w-sm md:max-w-full mx-auto">
              Provide gloabal cuisine at your <br /> fingertips
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: -75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="text-center md:text-lg"
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit mauris a
            ligula, tristique vitae dapibus at tempor quisque posuere proin
            tempus per netus, venenatis nec nostra etiam faucibus ac viverra
            sodales dui. Dapibus vitae non suscipit suspendisse duis curae,
            libero scelerisque rhoncus himenaeos sagittis quisque, augue
            hendrerit nullam montes congue. Sociosqu risus laoreet mattis
            dictumst viverra nisl feugiat, aenean eleifend leo enim nulla montes
            nec nibh, hac libero et pellentesque torquent gravida. Hac nascetur
            risus ligula lectus et eros laoreet, fermentum fusce dictumst mauris
            hendrerit conubia urna
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
          }}
          className="md:h-140 overflow-hidden"
        >
          <Video
            src={AboutVideo}
            playsInline
            autoPlay
            loop
            controls={false}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
