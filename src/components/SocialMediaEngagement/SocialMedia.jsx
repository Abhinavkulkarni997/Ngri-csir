import { SlSocialFacebook, SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";
const SocialMedia = () => {
    const socialmedia=[{
        id:0,
        URL:'https://www.facebook.com/csirngrihyd',
        icon:SlSocialFacebook
    },{
        id:1,
        URL:'https://x.com/csirngri',
        icon:SlSocialTwitter
    },{
        id:2,
        URL:'https://youtube.com/@csir-ngri',
        icon:SlSocialYoutube
    }]
  return (
    <section className='bg-indigo-600 py-16 px-4 sm:px-8'>
    <div className='max-w-7xl mx-auto '>
        <h1 className='text-3xl font-bold text-white '>Social Engagements</h1>
        <div className='flex flex-wrap gap-6 justify-center'>
            {socialmedia.map((mediaItem)=>(
                <div className='w-full' key={mediaItem.id}>
                <mediaItem.icon size={40} className='absolute flex flex-wrap gap-3 items-center text-nowrap'/>
                </div>
            ))}
        </div>
    </div>


    </section>
  )
}

export default SocialMedia