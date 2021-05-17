import React from "react";

function Contact() {
    return (
        <main className="container">
            <div className="row">
                <h2 className="col-sm-12" style={{ paddingTop: "25px" }}>Contact</h2>
            </div>
            <hr />
            <section className="row">
                <form className="col-md-12 col-lg-8">
                    <div className="col-md-12">
                        <div className="row form-group">
                            <div className="col-sm-12">
                                <label htmlFor="name">Name</label>
                                <br />
                                <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-sm-12">
                                <label htmlFor="email">Email</label>
                                <br />
                                <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-sm-12">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="3" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-sm-2">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
                <aside className="col-sm-12 col-lg-4 text-center" style={{ padding: "25px" }}>
                    <i className="fab fa-github-square" style={{ fontSize: "24px" }}></i> <a href="https://github.com/glchavez">Glchavez</a>
                    <br />
                    <i className="fab fa-linkedin" style={{ fontSize: "24px" }}></i> <a href="https://www.linkedin.com/in/giovany-chavez-0541aab2/">Giovany Chavez</a>
                    <br />
                    <i className="fas fa-phone-square" style={{ fontSize: "24px" }}></i> <a href="tel:7202403890">(720) 240-3890</a>
                    <br />
                    <i className="fas fa-envelope-square" style={{ fontSize: "24px" }}></i> <a href="mailto:giochavez320@gmail.com">giochavez320@gmail.com</a>
                </aside>
            </section>
        </main>
    );
};

export default Contact;
