import { useRef, useEffect } from "react";
import { AiOutlineNotification } from "react-icons/ai";

const notifications = [
  {
    id: 0,
    title: "Hindi Word of the Day",
    pageURL: "https://www.ngri.res.in/ngri-news/hindi-word-of-the-day.php",
    isNew: true,
    date: "2025-05-01",
  },
  {
    id: 1,
    title: "List of selected candidates for AcSIR Ph.D. August 2025 session",
    pageURL: "https://www.ngri.res.in/cms/AcSIR.php",
    isNew: true,
    date: "2025-05-01",
  },
  {
    id: 2,
    title:
      "Walk-in-Interviews for the Project personnel positions: Advertisement No. PA - 04/2025 Dated 27.06.2025",
    pageURL: "https://www.ngri.res.in/openings-at-ngri.php",
    isNew: false,
    date: "2025-04-01",
  },
];

const LatestNotifications = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let scrollTop = 0;
    const scrollSpeed = 0.3;
    let animationId;
    const scroll = () => {
      scrollTop += scrollSpeed;

      const singleSetHeight = scrollContainer.scrollHeight / 2;
      if (scrollTop >= singleSetHeight) {
        scrollTop = 0;
      }
      scrollContainer.scrollTop = scrollTop;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date
      .toLocaleDateString("en-IN", { month: "short" })
      .toUpperCase();

    return { day, month };
  };

  return (
    <section className="bg-white py-8 sm:py-12 sm:px-6 lg:py-16  px-3 lg:px-8 max-w-3xl mx-auto">
      <div className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto ">
        {/* <div className="border border-blue-500 bg-white  rounded-lg shadow-lg  mx-auto overflow-hidden"> */}
          {/* <div className="flex items-center   px-3 sm:px-4 lg:px-6 py-3 sm:py-4 justify-between bg-blue-500 "> */}
            <div className="border border-[#550000] bg-white  rounded-lg shadow-lg  mx-auto overflow-hidden"> 
           <div className="flex items-center   px-3 sm:px-4 lg:px-6 py-3 sm:py-4 justify-between bg-[#550000] ">
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <AiOutlineNotification
                // size={30}
                className="text-white w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0"
              />

              <span className=" text-sm sm:text-lg lg:text-xl  text-white font-sans font-medium truncate ">
                Latest Notifications
              </span>
            </div>
            <a
              href="https://www.ngri.res.in/openings-at-ngri.php"
              className=" font-sans text-xs sm:text-sm lg:text-base  text-white hover:text-blue-200 rounded-lg transition-colors duration-300 ml-2 flex-shrink-0"
            >
              View All
            </a>
          </div>
          {/* Notification list with auto-scrolling */}
          <div
            ref={scrollRef}
            className="h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden relative"
          >
            {/* padding between notifications */}
            <div className="py-2 sm:py-3 lg:py-4 px-3 sm:px-4 lg:px-6 ">
              {[...notifications, ...notifications].map(
                (notification, index) => (
                  <div
                    className="mb-2 sm:mb-3 lg:mb-4 p-2 sm:p-3  lg:p-4"
                    key={`${notification.id}-${index}`}
                  >
                    <div className="flex items-start gap-2 sm:gap-3 mb-1 sm:mb-2">
                      {/* <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0"> */}
                      {/* <div className="flex flex-col items-center flex-shrink-0 bg-blue-500 text-white rounded-md p-1 sm:p-2 min-w-[40px] sm:min-w-[50px] md:min-w-[55px]"> */}
                        <div className="flex flex-col items-center flex-shrink-0 bg-[#550000] text-white rounded-md p-1 sm:p-2 min-w-[40px] sm:min-w-[50px] md:min-w-[55px]">
                        <div className="text-xs sm:text-sm md:text-base font-bold text-center leading-tight">
                          {formatDate(notification.date || new Date()).day}
                        </div>
                        <div className="text-xs sm:text-sm md:text-sm font-bold text-center leading-tight">
                          {formatDate(notification.date || new Date()).month}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                        <a
                          href={notification.pageURL}
                          className="text-blue-500 hover:text-blue-700 transition-colors duration-300 inline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="text-xs sm:text-sm lg:text-base leading-relaxed hover:underline block break-words">
                            {notification.title}
                          </span>
                        </a>
                        {notification.isNew && (
                          <div className="relative inline-block ">
                            <span className="inline-flex items-center px-1.5 sm:px-2  py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg animate-pulse">
                              New
                            </span>
                            <div className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full animate-ping"></div>
                          </div>
                        )}
                      </div>
                    </div>
                    </div>

                    {index < notifications.length * 2 - 1 && (
                      <hr className="h-px mt-2 sm:mt-3 lg:mt-4  bg-gray-200 border-0 " />
                    )}
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNotifications;