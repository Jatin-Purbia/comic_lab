import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/bg1.png';

function Originality() {
  const navigate = useNavigate();
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center gap-10 flex flex-col text-white overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center pt-16">
        <h1 className="text-6xl md:text-7xl font-bold">ORIGINALITY</h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          This Is Our Home.
        </h2>
      </div>

      <div
        className="relative z-10 flex flex-col items-center gap-2 md:gap-4 py-6 md:py-8 bg-black bg-opacity-70 w-full"
        style={{ minHeight: 'auto' }}
      >
        <OriginalityItem label="Who We Are?" onClick={() => navigate('/who_we_are')} />
        <OriginalityItem label="IITJ Faculty" onClick={() => navigate('/faculty')} />
        <OriginalityItem label="IITJ Students & Alumni" onClick={() => navigate('/student')} />
        <OriginalityItem label="Comic Creators" onClick={() => navigate('/creator')} />
        <OriginalityItem label="Comic Fans & Readers" onClick={() => navigate('/reader')} />
        <OriginalityItem label="Comic Scholar" onClick={() => navigate('/scholar')} />
      </div>

      {/* <div className="relative z-10 text-center py-8 md:pb-10">
        <h3 className="text-4xl md:text-5xl font-bold">
          WE WILL MAKE A DIFFERENCE TOGETHER
        </h3>
      </div> */}
    </div>
  );
}

const OriginalityItem = ({ label, onClick }) => (
  <span
    onClick={onClick}
    className="cursor-pointer text-2xl md:text-3xl font-semibold inline-block py-1"
  >
    {label}
  </span>
);

export default Originality;