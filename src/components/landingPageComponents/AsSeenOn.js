import { InfiniteSlider } from '@/components/ui/infinite-slider';

function AsSeenOn() {
    return (
        <InfiniteSlider gap={48} reverse>
            <img
                src='/brand-logos/product_hunt.png'
                alt=''
                className='h-[100px] w-auto'
            />
            <img
                src='/brand-logos/fast.png'
                alt=''
                className='h-[40px] w-auto'
            />
            <img
                src='/brand-logos/inc.png'
                alt=''
                className='h-[80px] w-auto'
            />
            <img
                src='/brand-logos/techcrunch.png'
                alt=''
                className='h-[70px] w-auto'
            />
            <img
                src='/brand-logos/forbes.svg'
                alt=''
                className='h-[120px] w-auto'
            />
            <img
                src='/brand-logos/wired.png'
                alt=''
                className='h-[50px] w-auto'
            />
            <img
                src='/brand-logos/businessinsider.png'
                alt=''
                className='h-[55px] w-auto'
            />
            <img
                src='/brand-logos/cnn.png'
                alt=''
                className='h-[55px] w-auto'
            />
            <img
                src='/brand-logos/bloomberg.png'
                alt=''
                className='h-[90px] w-auto'
            />
        </InfiniteSlider>
    )
}

export default AsSeenOn