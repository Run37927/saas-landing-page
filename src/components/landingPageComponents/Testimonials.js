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
]
function Testimonials() {
    return (
        <MaxWidthWrapper>
            <div className='text-center space-y-5 my-14' id='testimonials'>
                <h1 className='font-bold text-4xl'>6,893 happy customers</h1>
                <h2 className='font-semibold text-xl'>Hear from our satisfied customers about their experience with our products and services.</h2>
            </div>

            <ul className='mx-auto md:columns-2 lg:columns-3 space-y-4 md:space-y-6 md:gap-6'>
                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-gray-200">
                        <blockquote className='border-b pb-4 font-semibold text-lg'>
                            This product changed my life Lorem ipsum dolor sit.
                        </blockquote>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/user-1.png" alt="user" className="inline-block shrink-0 pointer-events-none h-12 w-12 rounded-full ring-2 ring-gray-300" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>John D</p>
                                    <p className='text-sm'>@JohnD</p>
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
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-gray-200">
                        <blockquote className='border-b pb-4 font-semibold text-lg'>
                            This product changed my life Lorem ipsum dolor sit.
                        </blockquote>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/user-3.png" alt="user" className="inline-block shrink-0 pointer-events-none h-12 w-12 rounded-full ring-2 ring-gray-300" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Tracy</p>
                                    <p className='text-sm'>@tracy</p>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </li>

                <li className='break-inside-avoid'>
                    <Tweet id={tweets[1].id} />
                </li>

                <li className='break-inside-avoid'>
                    <Tweet id={tweets[3].id} />
                </li>

                <li className='break-inside-avoid'>
                    <Tweet id={tweets[4].id} />
                </li>

                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-gray-200">
                        <blockquote className='border-b pb-4 font-semibold text-lg'>
                            This product changed my life Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, voluptatibus
                        </blockquote>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/user-2.png" alt="user" className="inline-block shrink-0 pointer-events-none h-12 w-12 rounded-full ring-2 ring-gray-300" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Jess D</p>
                                    <p className='text-sm'>@JessD</p>
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
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-gray-200 hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:rotate-2 hover:scale-105 hover:shadow-lg">
                        <blockquote className='border-b pb-4 font-semibold text-lg'>
                            This could be you. Try it for free today! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
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
