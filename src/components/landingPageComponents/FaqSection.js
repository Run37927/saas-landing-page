'use client'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion';
import { ChevronRight } from 'lucide-react';

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
                    {faqs.map((faq, index) => {
                        return (
                            <div key={index} className="bg-slate-100/50 p-4 px-7 rounded-lg hover:shadow">
                                <Accordion
                                    className='flex w-full flex-col'
                                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                                    variants={{
                                        expanded: {
                                            opacity: 1,
                                            scale: 1,
                                        },
                                        collapsed: {
                                            opacity: 0,
                                            scale: 0.7,
                                        },
                                    }}
                                >
                                    <AccordionItem value='getting-started' className='py-2'>
                                        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950'>
                                            <div className='flex items-center'>
                                                <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90' />
                                                <div className='ml-2 text-zinc-950 text-xl font-semibold'>
                                                    {faq.question}
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className='origin-left'>
                                            <p className='pl-6 pr-2 leading-relaxed text-zinc-500'>
                                                {faq.answer}
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default FaqSection