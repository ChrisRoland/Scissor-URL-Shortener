import React from "react";
import blueCheck from "../assets/blue-check.svg";
import whiteCheck from "../assets/white-check.svg";

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      { text: "Unlimited URL Shortening", icon: blueCheck },
      { text: "Basic Link Analytics", icon: blueCheck },
      { text: "Customizable Short Links", icon: blueCheck },
      { text: "Standard Support", icon: blueCheck },
      { text: "Ad-supported", icon: blueCheck }
    ],
    isProfessional: false,
    className: "bg-white border border-[#005ae2] h-[455px]"
  },
  {
    name: "Professional",
    price: "$15/month",
    features: [
      { text: "Enhanced Link Analytics", icon: whiteCheck },
      { text: "Custom Branded Domains", icon: whiteCheck },
      { text: "Advanced Link Customization", icon: whiteCheck },
      { text: "Priority Support", icon: whiteCheck },
      { text: "Ad-free Experience", icon: whiteCheck }
    ],
    isProfessional: true,
    className: "bg-[#1e3448] text-white h-[600px] w-[410px]"
  },
  {
    name: "Teams",
    price: "$25/month",
    features: [
      { text: "Team Collaboration", icon: blueCheck },
      { text: "User Roles and Permissions", icon: blueCheck },
      { text: "Enhanced Security", icon: blueCheck },
      { text: "API Access", icon: blueCheck },
      { text: "Dedicated Account Manager", icon: blueCheck }
    ],
    isProfessional: false,
    className: "bg-white border border-[#005ae2] h-[455px]"
  }
];

export default function Pricing() {
  return (
    <section className="pricing py-16">
      <div className="cap mt-32 mb-20 flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center gap-2.5">
          <span className="candle"></span>
          <h2 className="text-[40px] font-bold">
            A <span className="text-[#005ae2]">price perfect</span> for your needs.
          </h2>
        </div>
        <p className="text-[16px] text-[#141414] w-[580px]">
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
      </div>
      
      <div className="pricing-cards my-40 relative flex justify-center items-center gap-96">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`pricing-card ${plan.name.toLowerCase()} ${plan.className} py-[20px] px-[70px] rounded-[12px] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] ${
              plan.isProfessional ? "absolute left-[34.65%]" : ""
            }`}
          >
            <h3 className="text-[24px] mb-[10px] font-extralight">{plan.name}</h3>
            <p className="mb-[20px] text-[40px] font-[600] amount">{plan.price}</p>
            <p className="text-[20px] mb-[20px] narration font-extralight">
              {plan.name === "Basic" 
                ? "Free plan for all users" 
                : plan.name === "Professional" 
                  ? "Ideal for business creators" 
                  : "Share with up to 10 users"}
            </p>
            <ul className="list-none p-0">
              {plan.features.map((feature) => (
                <li key={feature.text} className="flex items-center gap-[10px] text-[14px] mb-[20px]">
                  <img src={feature.icon} alt="check" />
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="pricing-cta flex items-center justify-center gap-5">
        <button className="btn btn-secondary">Get Custom Pricing</button>
        <button className="btn btn-primary">Select Pricing</button>
      </div>
    </section>
  );
}