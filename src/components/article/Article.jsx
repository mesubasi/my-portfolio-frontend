import React, { useState, useEffect } from "react";
import Data from "./Data";
import Project from "./Project";

function Article() {
  const [datas, setDatas] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setDatas(Data);
  }, []);

  useEffect(() => {
    setProjects(Project);
  }, [])


  return (
    <div className="article-wrapper flex justify-center pt-24 pb-16">
      <div className="experience-wrapper mb-8 max-w-[703px]">
        <div className="flex text-white justify-center">
          <h2 className="font-extrabold text-5xl tracking-tight">EXPERIENCE</h2>
        </div>
        <div className="flex justify-center mt-2">
          <span className="inter-medium bg-gradient-to-r from-violet-500 to-amber-500 inline-block text-transparent bg-clip-text  text-xs tracking-[.70em]">EXPLORE NOW</span>
        </div>
        {datas.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex flex-row items-center pt-16">
              <h1 className="font-extrabold text-lg animate-slideLeft text-white">{item.sirketAdi}</h1>
              <span className="px-1 text-lg text-white">/</span>
              <span className="font-semibold text-lg animate-slideLeft text-white">{item.pozisyonAdi}</span>
              <div className="flex ml-auto gap-2 text-xs inter-small text-[#E1E1E1] animate-slideRight">
                <p>{item.calismaTarihi}</p>
                <span>-</span>
                <p>{item.devamEdiyor}</p>
                <span className="-ml-2">,</span>
                <p>{item.konum}</p>
              </div>
            </div>
            <div className="inter-medium text-xs text-[#E1E1E1] mt-2">
              <p className="animate-slideRight">
                {item.aciklama.substring(0, 452)}
              </p>
              <br />
              <p className="animate-slideLeft">
                {item.aciklama.substring(452)}
              </p>
            </div>
            {item.kullanilanlar && (
              <div className="flex">
                {item.kullanilanlar.map((kullanilan, index) => (
                  <div key={index} className="border-[0.5px] border-cyan-500 bg-cyan-900 shadow-cyan-600 animate-pulse shadow-sm max-w-fit rounded-[20px] px-6 mt-4 py-2 flex mr-4">
                    <span className="text-[#E1E1E1] inter-small text-sm leading-3">{kullanilan}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="flex flex-col mt-20 items-center">
          <h2 className="font-extrabold text-white text-5xl tracking-tight">PROJECTS</h2>
          <div className="flex justify-center mt-2">
            <span className="inter-medium bg-gradient-to-r from-violet-500 to-amber-500 inline-block text-transparent bg-clip-text  text-xs tracking-[.70em]">EXPLORE NOW</span>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Article;
