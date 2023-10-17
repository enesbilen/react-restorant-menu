import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import menuData from "../store/menu";

export default function Menu() {
  const data = menuData();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="mt-10">
      <Tabs>
        <TabList className="flex items-center justify-center">
          <Tab
            className={`w-[175px] text-center mx-2 cursor-pointer text-[18px] ${
              activeTab === 0
                ? "border-b border-[#FFDEA0]"
                : "text-[#fff] hover:border-b border-[#FFDEA0]"
            }`}
            onClick={() => handleTabClick(0)}
          >
            MORNING
          </Tab>
          <Tab
            className={`w-[175px] text-center mx-1 cursor-pointer text-[18px] ${
              activeTab === 1
                ? "border-b border-[#FFDEA0]"
                : "text-[#fff] hover:border-b border-[#FFDEA0]"
            }`}
            onClick={() => handleTabClick(1)}
          >
            WEEKDAY LUNCH
          </Tab>
          <Tab
            className={`w-[175px] text-center mx-1 cursor-pointer text-[18px] ${
              activeTab === 2
                ? "border-b border-[#FFDEA0]"
                : "text-[#fff] hover:border-b border-[#FFDEA0]"
            }`}
            onClick={() => handleTabClick(2)}
          >
            DINNER
          </Tab>
          <Tab
            className={`w-[175px] text-center mx-1 cursor-pointer text-[18px] ${
              activeTab === 3
                ? "border-b border-[#FFDEA0]"
                : "text-[#fff] hover:border-b border-[#FFDEA0]"
            }`}
            onClick={() => handleTabClick(3)}
          >
            WINES
          </Tab>
        </TabList>

        <TabPanel>
          {activeTab === 0 && (
            <div className="flex flex-wrap justify-between mt-24 mb-8">
              {data.morning.map((item, index) => (
                <div
                  key={index}
                  className="w-[45%] flex items-center justify-between mb-10"
                >
                  <div className="w-[20%]">
                    <img
                      className="rounded-full"
                      src={`image/${item.image}`}
                      alt={item.title}
                    />
                  </div>
                  <div className="w-[78%]">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="font-semibold text-2xl text-[#fff]">
                        {item.title}
                      </h2>
                      <span className="font-semibold text-2xl">34.94$</span>
                    </div>
                    <div>
                      <p className="leading-6 font-light text-[#fff]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {activeTab === 1 && (
            <div className="flex flex-wrap justify-between mt-24 mb-8">
              {data.lunch.map((item, index) => (
                <div
                  key={index}
                  className="w-[45%] flex items-center justify-between mb-10"
                >
                  <div className="w-[20%]">
                    <img
                      className="rounded-full"
                      src={`image/${item.image}`}
                      alt={item.title}
                    />
                  </div>
                  <div className="w-[78%]">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="font-semibold text-2xl text-[#fff]">
                        {item.title}
                      </h2>
                      <span className="font-semibold text-2xl">34.94$</span>
                    </div>
                    <div>
                      <p className="leading-6 font-light text-[#fff]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {activeTab === 2 && (
            <div className="flex flex-wrap justify-between mt-24 mb-8">
              {data.dinner.map((item, index) => (
                <div
                  key={index}
                  className="w-[45%] flex items-center justify-between mb-10"
                >
                  <div className="w-[20%]">
                    <img
                      className="rounded-full"
                      src={`image/${item.image}`}
                      alt={item.title}
                    />
                  </div>
                  <div className="w-[78%]">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="font-semibold text-2xl text-[#fff]">
                        {item.title}
                      </h2>
                      <span className="font-semibold text-2xl">34.94$</span>
                    </div>
                    <div>
                      <p className="leading-6 font-light text-[#fff]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {activeTab === 3 && (
            <div className="flex flex-wrap justify-between mt-24 mb-8">
              {data.wines.map((item, index) => (
                <div
                  key={index}
                  className="w-[45%] flex items-center justify-between mb-10"
                >
                  <div className="w-[20%]">
                    <img
                      className="rounded-full"
                      src={`image/${item.image}`}
                      alt={item.title}
                    />
                  </div>
                  <div className="w-[78%]">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="font-semibold text-2xl text-[#fff]">
                        {item.title}
                      </h2>
                      <span className="font-semibold text-2xl">34.94$</span>
                    </div>
                    <div>
                      <p className="leading-6 font-light text-[#fff]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
}
