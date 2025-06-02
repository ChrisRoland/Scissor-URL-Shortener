import React from "react";
import midBg1 from "../assets/media/mid-sec-1.png";
import midBg2 from "../assets/media/mid-sec-2.png";
import wandIcon from "../assets/wand-icon.svg";
import { ChevronDown } from "lucide-react";

export default function UrlForm() {
  return (
    <section className="mid-sec relative bg-[#1e3448] text-white h-[523px] flex items-center justify-center">
      <img
        src={midBg1}
        alt="image"
        className="midBg1 absolute top-0 left-0 w-[980px] h-[525px]"
      />
      <div className="mid-sec-content p-10 bg-white rounded-[12px] shadow-[0_0_10px_0_rgba(255,255,255,0.5)] max-w-[476px] h-[355px] my-0 mx-auto z-10">
        <div className="url-form flex flex-col gap-6">
          <input
            type="text"
            placeholder="Paste URL here..."
            className="url-input w-full placeholder:text-[#005ae29c] text-black text-[12px] h-[50px] p-4 rounded-[12px] border border-[#005ae2] outline-none focus:border-2"
          />

          <div className="form-row flex gap-4">
            <div className="select-wrapper relative w-full max-w-[200px]">
              <select className="domain-select w-full max-w-[200px] appearance-none text-[#005ae2] text-[12px] p-4 border border-[#005ae2] rounded-[12px] outline-none focus:border-2">
                <option value="" disabled selected>
                  Choose Domain
                </option>
                <option value=".com">.com</option>
                <option value=".org">.org</option>
                <option value=".xyz">.xyz</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#005ae2] pointer-events-none" />
            </div>
            <input
              type="text"
              placeholder="Type alias here..."
              className="alias-input flex-1 text-[#005ae2] text-[12px] p-4 border border-[#005ae2] rounded-[12px] outline-none focus:border-2"
            />
          </div>

          <button className="trim-button bg-[#3b82f6] text-white text-[1rem] border-none rounded-full p-4 flex items-center justify-center gap-2 hover:bg-[#2563eb] transition duration-300 cursor-pointer">
            Trim URL
            <span className="wand">
              <img src={wandIcon} alt="icon" />
            </span>
          </button>

          <p className="terms-text text-[0.9rem] text-[#666]">
            By clicking TrimURL, I agree to the{" "}
            <a href="#" className="font-semibold text-[#3b82f6] decoration-0 hover:underline">
              Terms of Service
            </a>
            ,{" "}
            <a href="#" className="font-semibold text-[#3b82f6] decoration-0 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="font-semibold text-[#3b82f6] decoration-0 hover:underline">
              Use of Cookies
            </a>
            .
          </p>
        </div>
      </div>
      <img
        src={midBg2}
        alt="image"
        className="midBg2 absolute bottom-0 right-0 w-auto h-[550px]"
      />
    </section>
  );
}