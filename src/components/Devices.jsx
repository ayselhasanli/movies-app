import React from "react";
import DeviceCard from "../ui/DeviceCard";
import { devices } from "../lib/devices";

const Devices = () => {
  return (
    <section className="py-[150px] bg-[#0f0f0f] md:py-[120px] sm:py-[51px]">
      <div className="container">
        <p className="text-white font-bold text-[28px]">
          We Provide you streaming experience across various devices.
        </p>
        <p className="text-base text-[#999999] max-w-6xl">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>

        <div className="grid grid-cols-12 gap-6 pt-[60px]">
          {devices.map((device) => {
            return (
              <div className="col-span-4">
                <DeviceCard device={device} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Devices;
