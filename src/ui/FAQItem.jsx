import React from 'react'

const FAQItem = ({ faq, index, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[#2a2a2a]">
      <div
        onClick={onToggle}
        className="flex items-center gap-3 py-[18px] cursor-pointer"
      >
        <div
          className={`w-7 h-7 rounded-md bg-[#1e1e1e] text-[#888] text-xs font-medium flex items-center justify-center shrink-0 ${
            isOpen
              ? "border-b-2 border-[#e50000]"
              : "border-b-2 border-transparent"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
        <span className="text-white text-sm flex-1">{faq.q}</span>
        <span
          className={`text-xl font-light shrink-0 leading-none ${isOpen ? "text-[#e50000]" : "text-white"}`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </div>
      {isOpen && (
        <p className="text-[#888] text-sm leading-relaxed pb-4 pl-10">
          {faq.a}
        </p>
      )}
    </div>
  );
};

export default FAQItem
