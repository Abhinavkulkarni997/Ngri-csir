import { FaFacebook,FaYoutube,FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
const SocialMedia = () => {
    const socialmedia=[{
        id:0,
        title:'Facebook',
        URL:'https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/csirngrihyd&tabs=timeline&width=320&height=900&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true',
        icon:SlSocialFacebook,
    },{
        id:1,
        title:'Twitter',
        URL:'https://twitter.com/csirngri',
        icon:FaXTwitter,
    },{
        id:2,
        title:'Youtube',
        URL:'https://www.youtube.com/embed/mp02ZQZbbU8&t=1s',
        icon:SlSocialYoutube,
    }]
  return (
    <section className='bg-indigo-600 py-16 px-4 sm:px-8'>
    <div className='max-w-7xl mx-auto '>
        <h1 className='text-3xl font-bold text-white mb-10 '>Social Engagements</h1>
        <div className='flex flex-wrap gap-6 justify-center'>
            {socialmedia.map((mediaItem)=>(
                <div className=' flex flex-wrap bg-white  rounded-2xl shadow-lg p-4 mx-auto w-[320px] h-[420px] overflow-hidden' key={mediaItem.id}>
                <div className="overflow-y-scroll rounded-xl w-full h-full">
                <mediaItem.icon size={30} className="mb-4"/>
                <iframe 
                title={mediaItem.title}
                className="w-full h-[900px]"
                src={mediaItem.URL}
                allowFullScreen={true}
                width="320"
                height="450"
                border='0'
                allow="accelerometer; autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture; web-share">
                </iframe>
                </div>
                </div>
            ))}
        </div>
    </div>


    </section>
  )
}

export default SocialMedia