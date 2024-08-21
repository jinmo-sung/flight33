import ZoomIn from '@/src/components/animations/zoomIn'
import Title from '@/src/components/ui/title'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardTwo = ({ id, title, date, thumb, author, category }) => {
    return (
        <div className='group'>
            <ZoomIn id={id}>
                <div className='relative overflow-hidden  rounded-2.5xl after:absolute after:w-full after:h-full after:top-0 after:left-0  after:rounded-2.5xl'>
                    {/* <div className='absolute z-10 top-5 left-5'>
                        <Link href={"/categories"} className='px-2.5 py-[5px] inline-block font-semibold rounded-lg text-base bg-background text-muted-foreground'>{category[0]}</Link>
                    </div> */}
                    <div className='relative h-[40vh]'>
                        <Image src={thumb} fill sizes='(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw' style={{ width: "100%" }} alt='thumb' className='group-hover:scale-110 transition-all duration-700' />
                    </div>
                    <div className='absolute z-10 bottom-5 px-5'>
                        {/* <div className='flex items-center gap-7.5 pt-6'>
                            <Link href={"/author"} className='text-base font-semibold text-white hover:text-primary-foreground transition-all duration-500'> {author.author_name}</Link>
                            <p className='text-base font-semibold text-white relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full'>{date}</p>
                        </div> */}
                    </div>
                </div>
            </ZoomIn>
        </div>
    )
}

export default CardTwo