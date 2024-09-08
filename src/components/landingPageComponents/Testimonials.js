import { Tweet } from 'react-tweet';
import MaxWidthWrapper from '../MaxWidthWrapper';

const tweets = [
    {
        id: '1820736114753486953',
    },
    {
        id: '1830679902003306827',
    },
    {
        id: '1808570354165551433',
    },
    {
        id: '1820953058123153447',
    },
    {
        id: '1810346164329361410',
    },
    {
        id: '1809503790862578002',
    },
    {
        id: '1828089354713215171'
    }
];

function Testimonials() {
    return (
        <MaxWidthWrapper>
            <div className='text-center space-y-5 my-14' id='testimonials'>
                <h1 className='font-bold text-4xl'>6,893 happy customers</h1>
                <h2 className='font-semibold text-xl'>Hear from our satisfied customers about their experience with our products and services.</h2>
            </div>

            <ul className='mx-auto md:columns-2 lg:columns-3 space-y-4 md:space-y-6 md:gap-6'>
                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-gray-200 bg-orange-50">
                        <a href="https://www.reddit.com/r/SideProject/comments/1fbrbie/i_made_a_free_landing_page_template_for_microsaas/" target="_blank" rel="noopener noreferrer">
                            <blockquote className='border-b pb-4 font-semibold text-lg'>
                                Your landing page is one of the cleanest setups I have seen. Is there a video or a guide on how to set it up on my server and edit it?
                            </blockquote>
                        </a>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/avatar_default_1.png" alt="user" className="inline-block shrink-0 pointer-events-none h-12 w-12 rounded-full" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Reddit user</p>
                                    <p className='text-sm'>@user</p>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </li>

                <li className='break-inside-avoid'>
                    <Tweet id={tweets[0].id} />
                </li>

                <li className='break-inside-avoid'>
                    <Tweet id={tweets[2].id} />
                </li>

                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-gray-200 bg-indigo-50">
                        <a href="https://www.reddit.com/r/SideProject/comments/1fbrbie/i_made_a_free_landing_page_template_for_microsaas/" target="_blank" rel="noopener noreferrer">
                            <blockquote className='border-b pb-4 font-semibold text-lg'>
                                Nice and simple, good contribution.
                            </blockquote>
                        </a>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/avatar_default_2.webp" alt="user" className="inline-block shrink-0 pointer-events-none h-12 w-12 rounded-full" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Y0gl3ts</p>
                                    <p className='text-sm'>@user</p>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </li>

                <li className='break-inside-avoid'>
                    <Tweet id={tweets[1].id} />
                </li>

                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-gray-200 bg-cyan-50">
                        <a href="https://www.reddit.com/r/SaaS/comments/1elcw2f/i_made_a_free_landing_page_template_for_microsaas/" target="_blank" rel="noopener noreferrer">
                            <blockquote className='border-b pb-4 font-semibold text-lg'>
                                Awesome work! Giving you a star on Github right now!
                            </blockquote>
                        </a>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/avatar_default_4.webp" alt="user" className="inline-block shrink-0 pointer-events-none h-12 w-12 rounded-full" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>HalfMan-HalfAI</p>
                                    <p className='text-sm'>@user</p>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </li>

                <li className='break-inside-avoid'>
                    <Tweet id={tweets[4].id} />
                </li>

                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-gray-200 bg-green-50">
                        <a href="https://www.reddit.com/r/SaaS/comments/1elcw2f/i_made_a_free_landing_page_template_for_microsaas/" target="_blank" rel="noopener noreferrer">
                            <blockquote className='border-b pb-4 font-semibold text-lg'>
                                Looks pretty awesome. Now I just need a product to sell.
                            </blockquote>
                        </a>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/avatar_default_1.png" alt="user" className="inline-block shrink-0 pointer-events-none h-12 w-12 rounded-full" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>SpezJailbaitMod</p>
                                    <p className='text-sm'>@user</p>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </li>

                <li className='break-inside-avoid'>
                    <Tweet id={tweets[5].id} />
                </li>
                <li className='break-inside-avoid'>
                    <Tweet id={tweets[6].id} />
                </li>

                <li className='break-inside-avoid cursor-pointer'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-gray-200 bg-gradient-to-tr from-blue-200 via-indigo-200 to-teal-200 transition-all duration-300 ease-in-out transform hover:rotate-2 hover:scale-105 hover:shadow-lg">
                        <blockquote className='border-b pb-4 font-semibold text-lg'>
                            This could be you. Try it for free today! Use this as a template, clone to your local, npm install then off you go🚀
                        </blockquote>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/user-5.jpg" alt="user" className="inline-block shrink-0 pointer-events-none object-cover h-12 w-12 rounded-full ring-2 ring-gray-300" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Your name</p>
                                    <p className='text-sm'>@You</p>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </MaxWidthWrapper>
    );
}

export default Testimonials;
