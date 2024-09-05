import { Tweet } from 'react-tweet';
import MaxWidthWrapper from '../MaxWidthWrapper';

const tweets = [
    {
        id: '1820736114753486953',
        width: 350
    },
    {
        id: '1830679902003306827',
        width: 300
    },
    {
        id: '1808570354165551433',
        width: 400
    },
    {
        id: '1820953058123153447',
        width: 350
    },
    {
        id: '1810346164329361410',
        width: 350
    },
    {
        id: '1809503790862578002',
        width: 300
    }
]
function Testimonials() {
    return (
        <MaxWidthWrapper>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {tweets.map((tweet, index) => (
                    <div key={index} className="w-full max-w-sm mx-auto">
                        <Tweet
                            id={tweet.id}
                            options={{ width: 350 }}
                            style={{ maxWidth: '100%' }}
                        />
                    </div>
                ))}
            </section>
        </MaxWidthWrapper>
    );
}

export default Testimonials;
