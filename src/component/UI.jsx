import person from "../assets/person1.jpg"
import home from "../assets/home.png"
import webinar from "../assets/webinar.png"
import billing from "../assets/billing.png"
import userManage from "../assets/userManage.png"
import setting from "../assets/setting.png"
import background from "../assets/background.png"
import plus from "../assets/plus.png"
import schedule from "../assets/schedule.png"
import next from "../assets/next.png"
import previous from "../assets/previous.png"
import calendar from "../assets/calendar.png"
import recording from "../assets/recording.png"

import PropTypes from "prop-types"

export const UI = () => {
  return (  
    <div className="flex">
      {/* sidebar */}
      <div className="border-r-2 border-gray-200 w-0 md:w-100 h-screen">
        <SidebarTop />
        <SidebarTile text={"Home"} imgLink={home} />
        <SidebarTile text={"Webinar"} imgLink={webinar} />
        <SidebarTile text={"Billing"} imgLink={billing} />
        <SidebarTile text={"User Management"} imgLink={userManage} />
        <SidebarTile text={"Setting"} imgLink={setting} />
      </div>

      <div className="w-full h-screen">
        <div className="h-1/6 object-contain overflow-hidden">
          <img src={background} alt="bg" className="" />
        </div>

        <div className="flex justify-around h-5/6">
          {/* card */}
          <div className="flex flex-col items-center mx-10 my-6 px-0 py-4 h-fit w-1/5 bg-white -translate-y-12 rounded-2xl shadow-lg">
            <img
              src={person}
              width={"55%"}
              alt="hello"
              className="my-5 aspect-square object-contain rounded-3xl"
            />
            <p className="font-bold font-sans text-2xl ">Karan Dutt</p>

            <div className="text-gray-500 text-sm text-center my-3">
              <p>karandutt@gmail.com</p>
              <p>9999325467</p>
            </div>

            <p className="text-gray-500 text-sm">Delhi, India</p>
          </div>

          <div className="w-4/5">
            {/* greetings */}
            <div className="font-sans my-4 p-3">
              <div className="text-xl my-2">Monday, 14 October</div>
              <div className="font-bold text-4xl">Good Morning, Karan!</div>
            </div>

            <div className="flex justify-start ">
              {/* schedule table */}
              <div className="m-1 mr-8 shadow-lg rounded-xl border-1 border-gray-100">
                <div className="bg-gray-200 rounded-lg flex justify-between px-3 py-2 m-4">
                  <span className="flex">
                    <img src={calendar} alt="cal" />
                    <span className="pl-2">Monday,14 October 2024</span>
                  </span>
                  <span className="flex">
                    <img src={previous} alt="<" />
                    <img src={next} alt=">" />
                  </span>
                </div>

                <TableTile
                  time={"11:30 AM"}
                  task={"UX Webinar"}
                  status={"Live"}
                />
                <TableTile
                  time={"11:30 AM"}
                  task={"My First Webinar"}
                  status={"Upcoming"}
                />
                <TableTile
                  time={"11:30 AM"}
                  task={"Important Webinar"}
                  status={"Upcoming"}
                />
                <TableTile
                  time={"11:30 AM"}
                  task={"Webinar 1"}
                  status={"Upcoming"}
                />
              </div>

              {/* action */}
              <div className="grid grid-cols-2 gap-3 p-3 h-fit rounded-2xl shadow-lg border-1 border-gray-100">
                <ButtonElement icon={schedule} text={"Schedule a webinar"} />
                <ButtonElement icon={plus} text={"Join a webinar"} />
                <ButtonElement icon={recording} text={"Open recording"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarTop = () => {
  return (
    <div className="flex justify-between p-4 m-3">
      <button className=" bg-blue-950 text-white px-3 rounded-md">webinar.gg</button>
      <span>
        <img src={person} width={"30rem"} alt="home" className="rounded-sm" />
      </span>
    </div>
  );
};

const SidebarTile = ({text, imgLink}) => {  
  return (
    <div className="font-sans flex justify-between align-middle text-gray-600 p-4 m-3 rounded-md hover:bg-gray-200">
      <span>{text}</span>
      <span>
        <img src={imgLink} width={"22px"} alt="home" />
      </span>
    </div>
  );
};

const TableTile = ({time, task, status}) => {
  return (
    <div className="flex font-sans m-4">
      <div className="border-r-1 border-gray-500 px-4 py-1">
        <div className="font-semibold text-lg">{time}</div>
        <div className="text-sm text-gray-500">{time}</div>
      </div>

      <div className="px-3 py-1 pr-50">
        <div className="text-gray-500 text-sm">{status}</div>
        <div className="font-semibold text-lg">{task}</div>
      </div>
    </div>
  )
}

const ButtonElement = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center m-2 *:rounded-xl font-semibold">
      <button className="bg-ocean p-3 w-14 h-14 m-2 flex items-center justify-center">
        <img width={30} src={icon} alt="icon" />
      </button>
      <div className="text-sm text-center">{text}</div>
    </div>
  );
};

SidebarTile.propTypes = {
  text: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired
}

TableTile.propTypes = {
  time: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
}

ButtonElement.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired
}