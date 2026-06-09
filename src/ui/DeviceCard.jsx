import React from 'react'

const DeviceCard = ({device}) => {
  return (
    <div className="bg-gradient-to-r from-red-600/20 to-transparent p-10 rounded-xl border border-gray-700">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-[#141414] border border-gray-700">
          <img src={device.icon} alt="" />
        </div>
        <p className="font-semibold text-white text-xl">{device.name}</p>
      </div>
      <div className="pt-6">
        <p className="text-base text-[#999999]">{device.text}</p>
      </div>
    </div>
  );
}

export default DeviceCard
