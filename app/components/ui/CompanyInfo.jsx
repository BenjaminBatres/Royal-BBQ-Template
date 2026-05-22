import React from "react";
import { motion } from "motion/react";

export default function CompanyInfo({info, item}) {
  return (
    <motion.div variants={item} className="bg-white p-6 rounded-sm">
      <h3 className="text-3xl font-bold uppercase tracking-tight text-black mb-5">
        {info.title}
      </h3>
      <div className="text-black space-y-3">
        {info.type ? (
          <>
            {info.infos.map((info, id) => (
              <div
                key={id}
                className="flex items-center gap-3 not-last:border-b border-dashed pb-2"
              >
                <p className="text-lg">{info.icon}</p>
                <p className="underline">{info.name}</p>
              </div>
            ))}
          </>
        ) : (
          <>
            {info.infos.map((info, id) => (
              <div
                key={id}
                className="not-last:border-b not-last:border-dashed pb-2"
              >
                {info}
              </div>
            ))}
          </>
        )}
      </div>
    </motion.div>
  );
}
