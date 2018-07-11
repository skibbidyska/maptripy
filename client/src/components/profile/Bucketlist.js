import React, { Component } from "react";

class Bucketlist extends Component {
  render() {
    return (
      <div className="section add-bucketlist">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <a href="dashboard.html" className="btn btn-light">
                Go Back
              </a>
              <h1 className="display-4 text-center">Add Your Bucket List</h1>
              <p className="lead text-center">
                Add any place you would like to visit
              </p>
              <small className="d-block pb-3">* = required field</small>
              <form action="add-past.html">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Location"
                    name="location"
                    required
                  />
                </div>
                <h6>When would you like to go?</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="from"
                  />
                </div>
                <h6>To Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="to"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="What would like to do there?"
                    name="description"
                  />
                  <small className="form-text text-muted">
                    What would like to do there?
                  </small>
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Bucketlist;
