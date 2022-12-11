import React from "react";
import {data} from '../dataDummy/fakeData'

function Services() {
    return (
      <div>
            <div>
              <h1 className="text-3xl text-slate-50 text-center font-bold">MY SERVICES</h1>
              <div className="border-b-2 text-aqua-100 w-40 m-auto mt-2"></div>
            </div>

        <div>
            <div className="grid grid-cols-3 justify-items-center mt-24">
                {data.map(() =><div className="flex m-12">
                    <div className="border-l-2 text-aqua-100 h-36 mt-2">
                        <img src={require('../assets/icons/git.png')} className="pt-7" alt="icons" />
                    </div>
                    <div className="pt-7 ml-5">
                        <span className="text-2xl text-slate-50 font-bold">GIT</span>
                        <p className="text-slate-50 text-start w-52 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                </div>)}
            </div>

            <div className="flex justify-between relative bottom-[260px]">
                <button class="rounded-full text-slate-50 bg-aqua-100 ml-3 w-8 h-8" type="button">
                    <svg className="inline pr-1" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 512" height="1.5em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path>
                    </svg>
                </button>
                <button class="rounded-full text-slate-50 bg-aqua-100 mr-3 w-8 h-8" type="button">
                    <svg className="inline pl-1" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 512" height="1.5em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg>
                </button>
            </div>

        </div>

      </div>
    )
}

export default Services;