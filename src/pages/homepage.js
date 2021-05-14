import React from "react";
import Headshot from "../assets/images/Headshot.png";
import Resume from "../assets/resume/Giovany_Chavez_Resume.pdf"

function Homepage() {
    return (
        <main className="container">
            <div className="row">
                <h2 className="col-sm-12" style="padding-top: 25px;">About Me</h2>
            </div>
            <hr />
            <section className="row">
                <div className="col-sm-12">
                    <img src={Headshot} id="headshot" className="float-left mr-2"
                        style="max-width: 30%; height: auto;" alt="Headshot of Giovany" />
                    <p>Hello, my name is Giovany Chavez and I am a current non-profit worker at the International
                    City/County Management Association (ICMA). Eager to make a career change into the web development
                    indusrty, I have enrolled in the University of Denver full stack web development bootcamp. Despite
                    the difficulty of this program, I am excited to take on this challange!
                    <br /><br />
                    Aside from my budding interest in web development, I really enjoy outdoor activities and
                    professional sports. During the NFL season you can find me cheering on the Denver Broncos! I am also
                    a huge beer enthusiast and enjoy visiting different breweries when possible. A long-term goal of
                    mine would be to open up a brewery!
                    <br /><br />
                    Like many other Colorado natives, I attended Colorado State University and graduated with a
                    Bachelor's of Science in Business Administration. From my education I have gained valuable skills in
                    project management, leadership, and problem-solving, which have all played a great role in my early
                    professional career.
                    <br /><br />
                    To learn more about my background and experiences, please feel free to take a look at my <a
                            href={Resume} target="_blank" download>resume</a>.
                </p>
                </div>
            </section>
        </main>
    );
};

export default Homepage;
