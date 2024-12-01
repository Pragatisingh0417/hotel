import React from "react";

function SideFixedBackground() {
  return (
    <div className="pt-20">
  {/* Responsive Container */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
    {/* Left Background Image */}
    <div className="relative hidden md:block">
      <img
        src="https://img.freepik.com/premium-photo/dining-room-with-large-picture-table-with-large-painting-wall_1262102-1578.jpg?w=996"
        alt="Left Background"
        className="h-full w-full object-cover border border-white rounded-t-[220px]"
      />
    </div>

    {/* Center Content */}
    <div className="relative bg-white z-10 text-center flex items-center justify-center ">
      <div>
        <h4 className="text-[#AB8965] text-base font-bold">Welcome To Almaris</h4>
        <h2 className="text-3xl md:text-[54px] text-[#181818] font-semibold leading-snug md:leading-[57px]">
          Exceptional Hospitality and Unmatched Relaxation at Almaris
        </h2>
        <h6 className="text-xl md:text-2xl text-[#AB8965] font-bold py-2">
          4.9 out of 5
        </h6>
        <div className="flex items-center justify-center space-x-1">
          {/* Stars */}
          <span className="text-yellow-500 text-lg">&#9733;</span>
          <span className="text-yellow-500 text-lg">&#9733;</span>
          <span className="text-yellow-500 text-lg">&#9733;</span>
          <span className="text-yellow-500 text-lg">&#9733;</span>
          <span className="text-yellow-500 text-lg">&#9733;</span>
        </div>
        <p className="text-stone-500 text-sm md:text-lg pb-20">
          Based on 25,000+ reviews
        </p>
      </div>
    </div>

    {/* Right Background Image */}
    <div className="relative hidden md:block">
      <img
        src="https://img.freepik.com/premium-photo/lobby-with-large-window-large-rug-floor_1262102-2903.jpg?w=996"
        alt="Right Background"
        className="h-full w-full object-cover border border-white rounded-t-[220px]"
      />
    </div>
  </div>
</div>

  );
}

export default SideFixedBackground;
