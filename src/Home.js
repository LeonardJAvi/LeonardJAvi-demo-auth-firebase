import React, { Component } from "react";
import Navbar from "../src/components/Navigation";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      peoples: [],
    };
  }

  componentDidMount() {
    const API_URL = "https://randomuser.me/api/";
    const AMOUNT_PEOPLE = "?results=12";
    const API_URL_QUERY = `${API_URL}${AMOUNT_PEOPLE}`;
    console.log(API_URL_QUERY);
    fetch(API_URL_QUERY)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        const peopleColletions = data.results.map((i, index) => {
          return (
            <div className="col-xs-12 col-sm-6 col-md-4" key={index}>
              <div className="image-flip">
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img className="img-fluid" src={i.picture.large} />
                        </p>
                        <h4 className="card-title">{i.name.first}</h4>
                        <p className="card-text">{i.email}</p>
                        <span className="btn btn-primary btn-sm">
                          <i className="fa fa-plus"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">
                          {i.name.first}
                          {"\u00A0"}
                          {i.name.last}
                        </h4>
                        <p className="card-text">
                          {i.name.title}.{"\u00A0"}
                          {i.name.first}
                          {"\u00A0"}ipsum dolor sit amet, consectetur
                          adipisicing elit, sed do eiusmo tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam
                          ut aliquip ex ea commodo.
                        </p>
                        <p className="card-text">
                          <a href={`mailto:` + i.email}>{i.email}</a>.<br />
                          {i.location.city}, {i.location.state}
                          <br />
                          {i.location.country}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        });
        this.setState({ peoples: peopleColletions });
        console.log("state", this.state.peoples);
      });
  }
  render() {
    return (
      <>
        <Navbar />
        <section className="team p-5">
          <div className="container">
            <h1 className="p-5 text-center text-white">Our IT Team</h1>
            <div className="row">{this.state.peoples}</div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
