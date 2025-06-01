import React from "react";
import urlShort from "../assets/url-short.svg";
import dataAnalytics from "../assets/data.svg";
import customUrl from "../assets/custom-url.svg";
import qrCodes from "../assets/charts.svg";
const features = [
  {
    icon: urlShort,
    title: "URL Shortening",
    description:
      "Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.",
  },
  {
    icon: customUrl,
    title: "Custom URLs",
    description:
      "With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.",
  },
  {
    icon: dataAnalytics,
    title: "Data Analytics",
    description:
      "Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.",
  },
  {
    icon: qrCodes,
    title: "QR Codes",
    description:
      "Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.",
  },
];

export default function Features() {
  return (
    <section className="features flex">
      <div className="top w-[40%] p-[60px]">
        <div className="cap flex items-center justify-center gap-[10px]">
          <span className="candle"></span>
          <h2 className="text-[40px] w-full font-bold">
            Why Choose <span className="text-[#005ae2]">Scissors</span>
          </h2>
        </div>
        <p className="text-[16px] text-[#141414] w-[370px]">
          Scissors is the hub of everything that has to do with your link
          management. We shorten your URLs, allow you creating custom ones for
          your personal, business, event usage. Our swift QR code creation,
          management and usage tracking with advance analytics for all of these
          is second to none.
        </p>
      </div>
      <div className="feature-container w-[60%] flex justify-center gap-[60px] mt-[40px]">
        <div className="group-one flex flex-col gap-[30px]">
          {features.slice(0, 2).map((f) => (
            <div
              key={f.title}
              className=""
            >
              <div className="my-[30px]">
                <img src={f.icon} alt="icon" />
              </div>
              <h3 className="text-[32px] font-bold">{f.title}</h3>
              <p className="text-gray-600 text-[16px] w-[340px]">{f.description}</p>
            </div>
          ))}
        </div>
        <div className="group-two flex flex-col gap-[30px]">
          {features.slice(2, 4).map((f) => (
            <div
              key={f.title}
              className=""
            >
              <div className="my-[30px]">
                <img src={f.icon} alt="icon" />
              </div>
              <h3 className="text-[32px] font-bold">{f.title}</h3>
              <p className="text-gray-600 text-[16px] w-[340px]">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}