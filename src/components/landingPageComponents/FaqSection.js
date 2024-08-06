'use client'
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-slate-100/50 p-4 px-7 rounded-lg hover:shadow">
            <div className="flex justify-between items-center cursor-pointer text-gray-700" onClick={() => {
                setIsOpen(!isOpen);
            }}>
                <h2 className={`text-xl font-semibold ${isOpen ? 'text-black' : ''}`}>{question}</h2>
                <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground", {
                    "-rotate-180": isOpen
                })} />
            </div>
            {isOpen && <p className='mt-3 leading-relaxed'>{answer}</p>}
        </div>
    );
};


function FaqSection() {
    const faqs = [
        {
            question: "Lorem ipsum dolor sit amet?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus, nunc at malesuada facilisis, odio tortor pretium nisl, id tincidunt purus arcu eu quam. Integer nec libero sed augue tincidunt aliquet."
        },
        {
            question: "Quisque vehicula justo nec?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed justo non nulla suscipit viverra. Ut commodo, orci a aliquet venenatis, ligula urna consequat nulla, in malesuada mauris odio id quam."
        },
        {
            question: "Pellentesque habitant morbi tristique?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci nec nunc tempus interdum. Nulla facilisi. Suspendisse potenti. Vivamus vel felis nec orci pulvinar hendrerit. Curabitur ac felis in libero scelerisque."
        },
        {
            question: "Vestibulum ante ipsum primis?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac justo eget lorem suscipit tempor. Curabitur a urna non eros porttitor tincidunt. Donec gravida, mauris et porttitor gravida, nulla nisi viverra ligula, id faucibus magna est vel nulla."
        },
        {
            question: "Nam at nisi vitae erat?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod leo eu libero faucibus, id pharetra metus venenatis. Phasellus nec diam a massa fermentum pellentesque. Vivamus suscipit, urna nec varius cursus, quam urna aliquet urna, eget sollicitudin nisi turpis non enim."
        },
        {
            question: "Nam at nisi vitae erat?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod leo eu libero faucibus, id pharetra metus venenatis. Phasellus nec diam a massa fermentum pellentesque. Vivamus suscipit, urna nec varius cursus, quam urna aliquet urna, eget sollicitudin nisi turpis non enim."
        },
        {
            question: "Nam at nisi vitae erat?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod leo eu libero faucibus, id pharetra metus venenatis. Phasellus nec diam a massa fermentum pellentesque. Vivamus suscipit, urna nec varius cursus, quam urna aliquet urna, eget sollicitudin nisi turpis non enim."
        },
    ];

    return (
        <section className="bg-white/80 py-20" id='faq'>
            <div className="max-w-sm sm:max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-12 capitalize">Frequently Asked Questions</h1>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default FaqSection