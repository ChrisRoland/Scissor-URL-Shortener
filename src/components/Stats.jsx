import React from 'react';

const data = [
  { value: '3M', label: 'Active users' },
  { value: '60M', label: 'Links & QR codes created' },
  { value: '1B', label: 'Clicked & Scanned connections' },
  { value: '300k', label: 'App Integrations' },
];

export default function Stats() {
  return (
    <section className="stats mt-2 bg-[#f9fbfd] flex justify-between gap-[30px] py-[60px] px-[140px]">
      <div className="stat-caption text-[40px] font-semibold">
        <p className="">One Stop.</p>
        <p className="">
          Four <span className="text-[#005ae2]">Possibilities</span>.
        </p>
      </div>
      <div className="items flex gap-[30px]">
        {data.map((stat) => (
          <div key={stat.label} className="stat-item">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-[32px] font-[Montserrat] font-[500]">{stat.value}</h2>
            <p className="text-[16px] text-[#141414] w-[160px] font-[300]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}