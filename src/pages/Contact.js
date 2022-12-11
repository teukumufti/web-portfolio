import React from "react";
 
function Contact() {
    return (
      <div>
        <h1 className="text-3xl text-slate-50 text-center font-bold">CONTACT ME</h1>
        <div className="border-b-2 text-aqua-100 w-40 m-auto mt-2"></div>

       

        <form className="block m-auto mt-24 max-w-xl">
            <div className="form-group mb-6">  
            <label htmlFor="name" className="form-label inline-block mb-2 text-gray-100">NAME</label>
            <input type="name" className="form-control block w-full px-3 py-1.5 text-base text-white-50 bg-zinc-100 border border-solid border-aqua-100 rounded focus:outline-none focus:shadow-none" 
            id="inputName"
            aria-describedby="name" placeholder="type your name here"/>
            
            <label htmlFor="email" className="form-label inline-block mb-2 mt-5 text-gray-100">EMAIL</label>
            <input type="email" className="form-control block w-full px-3 py-1.5 text-base text-white-50 bg-zinc-100 border border-solid border-aqua-100 rounded focus:outline-none focus:shadow-none" 
            id="inputEmail"
            aria-describedby="email" placeholder="type your email here"/>

            <label htmlFor="message" className="form-label inline-block mb-2 mt-5 text-gray-100">YOUR MESSAGE</label>
            <textarea type="text" className="form-control block w-full px-3 py-1.5 text-base text-white-50 bg-zinc-100 border border-solid border-aqua-100 rounded focus:outline-none focus:shadow-none" 
            id="inputMessage"
            aria-describedby="message" placeholder="type your message here"/>
            </div>

            <button type="submit" className="px-2.5 py-2.5 bg-aqua-100 text-sm font-bold rounded">
            SEND MESSAGE
            </button>
        </form>
      </div>
    )
}

export default Contact;