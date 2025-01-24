import { Tweet } from 'react-tweet';
import MaxWidthWrapper from '../MaxWidthWrapper';

const tweets = [
    {
        id: '1874307374938222700',
    },
    {
        id: '1872237955726860326',
    },
    {
        id: '1865867289834483716',
    },
    {
        id: '1877445348462821562',
    },
    {
        id: '1829930057483292938',
    },
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
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-orange-200 bg-orange-50">
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
                    <Tweet id={tweets[1].id} />
                </li>

                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-indigo-200 bg-indigo-50">
                        <a href="https://www.reddit.com/r/SideProject/comments/1fbrbie/comment/lm456ij/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" target="_blank" rel="noopener noreferrer">
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
                    <Tweet id={tweets[2].id} />
                </li>

                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-cyan-200 bg-cyan-50">
                        <a href="https://www.reddit.com/r/SaaS/comments/1elcw2f/comment/ljroul3/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" target="_blank" rel="noopener noreferrer">
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
                    <Tweet id={tweets[3].id} />
                </li>

                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-green-200 bg-green-50">
                        <a href="https://www.reddit.com/r/SaaS/comments/1elcw2f/comment/lgsqe3c/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" target="_blank" rel="noopener noreferrer">
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
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-pink-200 bg-pink-50">
                        <a href="https://www.reddit.com/r/SaaS/comments/1elcw2f/comment/lye1tde/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" target="_blank" rel="noopener noreferrer">
                            <blockquote className='border-b pb-4 font-semibold text-lg'>
                                This is exactly what I need, minus a few things! Thanks a bunch dude :D!
                            </blockquote>
                        </a>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/avatar_default_5.webp" alt="user" className="inline-block shrink-0 pointer-events-none h-12 w-12 rounded-full" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Traditional_Web_7856</p>
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
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-amber-200 bg-amber-50">
                        <a href="https://www.reddit.com/r/SaaS/comments/1elcw2f/comment/lgy3df3/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" target="_blank" rel="noopener noreferrer">
                            <blockquote className='border-b pb-4 font-semibold text-lg'>
                                Nice template.
                                <br />
                                This would be a great fit for a google ads landing format
                            </blockquote>
                        </a>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/avatar_default_6.webp" alt="user" className="inline-block shrink-0 pointer-events-none h-12 w-12 rounded-full" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>SaaSNihal</p>
                                    <p className='text-sm'>@user</p>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </li>

                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-gray-200 bg-gradient-to-tr from-blue-200 via-indigo-200 to-teal-200 transition-all duration-300 ease-in-out transform hover:rotate-2 hover:scale-105 hover:shadow-lg">
                        <a href="https://github.com/Run37927/saas-landing-page" target="_blank" rel="noopener noreferrer">
                            <blockquote className='border-b pb-4 font-semibold text-lg'>
                                This could be you. Try it for free today! Use this as a template, clone to your local, npm install then off you go🚀
                            </blockquote>
                        </a>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/john.png" alt="user" className="inline-block shrink-0 pointer-events-none object-cover h-12 w-12 rounded-full ring-2 ring-gray-300" />
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
