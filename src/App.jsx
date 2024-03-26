import iconfacebook from "/images/icon-facebook.svg";
import icontwitter from "/images/icon-twitter.svg";
import iconinstagram from "/images/icon-instagram.svg";
import iconyoutube from "/images/icon-youtube.svg";
import iconup from "/images/icon-up.svg";
import icondown from "/images/icon-down.svg";
import { useState } from "react";

export default function App() {
  // set json social
  const socialInfo = [
    { icon: iconfacebook, name: "@nathanf", followers: "1987", number: 12, color: "hsl(208, 92%, 53%)" },
    { icon: icontwitter, name: "@nathanf", followers: "1044", number: 99, color: "hsl(203, 89%, 53%)" },
    { icon: iconinstagram, name: "@realnathanf", followers: "11k", number: 1099, color: "hsl(329, 70%, 58%)" },
    { icon: iconyoutube, name: "Nathan F.", followers: "8239", number: 144, color: "hsl(348, 97%, 39%)" }
  ];

  // set json overview
  const overView = [
    { name: "Page Views", social: iconfacebook, num1: 87, num2: "3%" },
    { name: "Likes", social: iconfacebook, num1: 52, num2: "2%" },
    { name: "Likes", social: iconinstagram, num1: 5462, num2: "2257%" },
    { name: "Profile Views", social: iconinstagram, num1: "52k", num2: "1375%" },
    { name: "Retweets", social: icontwitter, num1: 117, num2: "303%" },
    { name: "Likes", social: icontwitter, num1: 507, num2: "553%" },
    { name: "Likes", social: iconyoutube, num1: 107, num2: "19%" },
    { name: "Total Views", social: iconyoutube, num1: 1407, num2: "12%" },
  ];
  // set check toggle
  const [isToggle, setIsTogle] = useState(false)


  return (
    <main className={`min-h-screen ${isToggle ? "bg-White" : "bg-VeryDarkBlue"  }`}>
      <section className="flex flex-col gap-4 p-8 sm:mx-14">
        {/* big div */}
        <div className="flex flex-col gap-2">
          {/* content */}
          <div className="flex sm:flex-row flex-col justify-between">
            <span className="">
              <h1 className={`${isToggle ? "text-DesaturatedBlue" : "text-White" } font-semibold`}>Social Media Dashboard</h1>
              <p className="text-gray-400">Total Followers: 23,004</p>
            </span>

            <label className="inline-flex items-center sm:justify-normal justify-between cursor-pointer">
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 mx-4">Dark Mobile</span>
              <input type="checkbox" value="" className="sr-only peer"
              checked={isToggle} onChange={()=> setIsTogle(!isToggle)}/>
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-Toggle2 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-300"></div>
            </label>

          </div>
          {/* boxes */}
          <div className="grid grid-1 sm:grid-cols-4 gap-4">
            {socialInfo.map((info, index) => (
              <div key={index}
                className={`flex flex-col gap-2 justify-center items-center p-4 ${isToggle ? "bg-LightGrayishBlue hover:bg-gray-300"  :  "bg-DarkDesaturatedBlue" } cursor-pointer hover:bg-LightGrayishBlue rounded-md border-t-4`}
                style={{borderTopColor: info.color}}>
                <span className="flex flex-row gap-1 items-center">
                  <img src={info.icon} alt={`${info.name} icon`} />
                  <p>{info.name}</p>
                </span>
                <h1 className={`font-semibold text-4xl ${isToggle ? "text-DarkGrayishBlue" : "text-White" }`}>{info.followers}</h1>
                <p className="uppercase text-gray-400">Followers</p>
                <span className="flex flex-row gap-1 items-center mt-2">
                  <img src={index === 3 ? icondown : iconup} alt="Up icon" />
                  <p className={`${index === 3 ? "text-red-500" : "text-LimeGreen"}`}>{info.number} Today</p>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* small div */}
        <h1 className={`${isToggle ? "text-DarkGrayishBlue" : "text-White" }`}>Overview - Today</h1>
        <div className="grid grid-1 sm:grid-cols-4 gap-4">
          {overView.map((info, index) => (
            <div key={index} className={`flex flex-col gap-2 p-4 bg-DarkDesaturatedBlue hover:bg-LightGrayishBlue rounded-md ${isToggle ? "bg-LightGrayishBlue hover:bg-gray-300"  :  "bg-DarkDesaturatedBlue" } cursor-pointer`}>
              <span className="flex flex-row justify-between items-center">
                <h1>{info.name}</h1>
                <img src={info.social} alt={`${info.name} icon`} />
              </span>
              <span className="flex flex-row justify-between items-center">
                <h1 className={`text-xl font-semibold ${isToggle ? "text-DarkGrayishBlue" : "text-White" }`}>{info.num1}</h1>
                <p className={`inline-flex items-center gap-1 ${(index === 1 || index === 6 || index === 7) ? "text-red-500" :  "text-LimeGreen"}`}><img src={(index === 1 || index === 6 || index === 7) ? icondown : iconup} alt="Down icon" />{info.num2}</p>
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
