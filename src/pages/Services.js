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
                        <img src={require('../assets/icons/git.png')} className="pt-7" />
                    </div>
                    <div className="pt-7 ml-5">
                        <span className="text-2xl text-slate-50 font-bold">GIT</span>
                        <p className="text-slate-50 text-start w-52 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                </div>)}
            </div>

            <div className="flex justify-between">
                <button class="rounded-full text-slate-50 bg-aqua-100" type="button">Back</button>
                <button class="rounded-full text-slate-50 bg-aqua-100" type="button">Next</button>
            </div>

        </div>

      </div>
    )
}

export default Services;