import { FaFacebook, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const socialmedia = [
  {
    id: 0,
    title: "Facebook",
    URL: "https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/csirngrihyd&tabs=timeline&width=320&height=900&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true",
    icon: SlSocialFacebook,
  },
  // {
  //   id: 1,
  //   title: "Twitter",
  //     URL:'https://x.com/csirngri',
  //   icon: FaXTwitter,
  // },
  {
    id: 2,
    title: "Youtube",
    URL: "https://www.youtube.com/embed/mp02ZQZbbU8",
    icon: SlSocialYoutube,
  },
];
const SocialMedia = () => {
  return (
    // <section className=" bg-[#550000] bg-indigo-600 py-16 px-4 sm:px-8">
     <section className="bg-[#2F6281]  py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto ">
        {/* <h1 className="text-3xl font-bold text-white mb-10 ">
          Social Engagements
        </h1> */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 lg:mb-10">
  Social Engagements
</h1>
<div className="mt-2 w-28 h-1 mx-auto rounded-full bg-white"></div>
        </div>
  

        <div className="flex flex-wrap gap-6 justify-center ">
          {socialmedia.map((mediaItem) => (
            <motion.div
              className=" flex flex-col bg-white  rounded-2xl shadow-lg p-4  w-full sm:w-[48%] lg:w-[32%] h-[500px] overflow-y-auto"
              key={mediaItem.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,delay: 0.3 * socialmedia.indexOf(mediaItem) }}
              whileFocus={{ scale: 1.05 }}
              whileHover={{ scale: 1.05 }}
            //   whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3 mb-4  font-semibold  ">
                <mediaItem.icon size={30} className=" text-2xl " />
                <span>{mediaItem.title}</span>
              </div>
              <div className="w-full h-full overflow-y-auto border  border-gray-100 rounded-md">
              <div>
              {/* {mediaItem.title === "Twitter" &&(
                <a href={mediaItem.URL} className="text-black underline hover:underline "> Tweets by NGRI</a>
              )} */}
              </div>
                {mediaItem.URL !=='https://x.com/csirngri' && (
                  <iframe
                    title={mediaItem.title}
                    className="w-full h-full"
                    src={mediaItem.URL}
                    allowFullScreen
                    allow="accelerometer; autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture; web-share"
                  ></iframe>
                )}
                
              </div>
              {/* <Link to=""><button className="mt-8 px-6 py-3 bg-white text-[#2F6281] font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">View More</button></Link> */}
            </motion.div>
            
          ))}
        </div>
      </div>
              

    </section>
  );
};

export default SocialMedia;