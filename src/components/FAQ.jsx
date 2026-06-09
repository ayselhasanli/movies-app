import React from 'react'
import { useState } from 'react';
import FAQItem from '../ui/FAQItem';
import {faqs} from "../lib/faqs"

const FAQ = () => {
 const [openIndex, setOpenIndex] = useState(0);

 const handleToggle = (i) => setOpenIndex(openIndex === i ? null : i);

 const col1 = faqs.slice(0, 4);
 const col2 = faqs.slice(4);

 return (
   <div className="bg-[#0f0f0f]  py-12 font-sans">
     <div className="container">
       <div className="flex justify-between items-start mb-10">
         <div>
           <h2 className="text-white text-2xl font-semibold mb-2">
             Frequently Asked Questions
           </h2>
           <p className="text-[#888] text-sm">
             Got questions? We've got answers! Check out our FAQ section to find
             answers to the most common questions about StreamVibe.
           </p>
         </div>
         <button className="bg-[#e50000] text-white text-sm px-5 py-2.5 rounded-md shrink-0 ml-8 hover:bg-red-700 transition-colors">
           Ask a Question
         </button>
       </div>
       <div className="grid grid-cols-2 gap-x-10">
         <div>
           {col1.map((faq, i) => (
             <FAQItem
               key={i}
               faq={faq}
               index={i}
               isOpen={openIndex === i}
               onToggle={() => handleToggle(i)}
             />
           ))}
         </div>
         <div>
           {col2.map((faq, i) => (
             <FAQItem
               key={i + 4}
               faq={faq}
               index={i + 4}
               isOpen={openIndex === i + 4}
               onToggle={() => handleToggle(i + 4)}
             />
           ))}
         </div>
       </div>
     </div>
   </div>
 );
}

export default FAQ
