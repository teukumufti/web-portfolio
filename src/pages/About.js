import React from "react";

function About() {

    const downloadTxtFile = () => {
        // logic download pdf
        fetch('CV-TM-Mufti-Fadhlillah.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CV-TM-Mufti-Fadhlillah.pdf';
                alink.click();
            })
        })
    }

    return (
        <div>
            <div className="grid grid-rows-1 sm:grid-cols-2 sm:gap-4 text-white-50 justify-items-center m-5">
                <div className="sm:m-auto">
                    <h1 className="text-3xl tracking-widest text-aqua-100">ABOUT ME</h1>
                    <p className="text-start mt-5">I’m Fullstack Developer, have experience in making Web Development & Mobile App, <br/>I'm able to work in a 
                    team and have a passion for problem solving and i don’t rule out learning more.</p>
                    <button type="button"  onClick={downloadTxtFile} value="download" className="inline-block px-6 py-2 border-2 mt-10 border-aqua-100 text-white hover:bg-aqua-100">Download CV</button>
                </div>
                <div>
                    <img src={require('../assets/images/person.png')} alt="person.img" className="mt-12" />
                </div>
            </div>
        </div>
    )
}

export default About;