import React from 'react'
import FaqOne2 from '@/components/sections/faqs/faqOne2'
import FaqTwo from '@/components/sections/faqs/faqTwo'
import PageTitle from '@/components/sections/pageTitle'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import ProvideOne from '@/components/sections/provides/provideOne'
export const metadata = {
    title: "NextPro | Faq's",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const Faq = () => {
    return (
        <main>
            <PageTitle pageName={"회전익 항공기 준사관 소개"} breadcrumbLink={"Faq"} />
            <ProvideOne />
            {/* <FaqTwo /> */}
            {/* <SubscribeTwo /> */}
        </main>
    )
}

export default Faq