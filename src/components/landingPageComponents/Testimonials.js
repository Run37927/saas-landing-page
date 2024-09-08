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
    }
]
function Testimonials() {
    return (
        <MaxWidthWrapper>
            <div className='text-center space-y-5 my-14'>
                <h1 className='font-bold text-4xl'>6,893 happy customers</h1>
                <h2 className='font-semibold text-xl'>Hear from our satisfied customers about their experience with our products and services.</h2>
            </div>
            
            <div className='mx-auto md:columns-2 lg:columns-3 xl:columns-4 space-y-4 md:space-y-6 md:gap-6'>

            </div>
        </MaxWidthWrapper>
    );
}

export default Testimonials;
