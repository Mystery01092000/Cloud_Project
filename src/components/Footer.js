import React from "react";

// just the footer of the page
export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <a
                className="icon"
                href="#"
                target="_blank"
              >
                Repository
              </a>
            </p>
            <p>Created by <a href="#" target="_blank">Rishabh Garg,Pranav Tomar,Ashutosh Chauhan,Abhishek kumar</a></p>
          </div>
        </div>
      </footer>
    );
  }
}
