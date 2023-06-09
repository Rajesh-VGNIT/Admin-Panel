import React from "react";

const ManageGeneralSetting = () => {
  return (
    <div className="container mt-0">
      <form>
        <div className="row jumbotron box8">
          <div className="row">
            <div className="col">
              <label className=" ms-2">
                Show failed messages in list view:
              </label>
            </div>
            <div className="col mt-3">
            <input type={'checkbox'}></input>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">
                Enable loss protection on failover gateway:
              </label>
            </div>
            <div className="col mt-3">
            <input type={'checkbox'}></input>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">Master failover gateway:</label>
            </div>
            <div className="col mt-2">
              <select className="manage4">
                <option>None</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">Low credit alert notification:</label>
            </div>
            <div className="col mt-3">
              <div className="row">
                <div className="col-2">
                <input type={'checkbox'}></input>
                </div>
                <div className="col-4">
                  <input
                    style={{ height: "2.3rem" }}
                    type="text"
                    placeholder="30"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">Gateway Queue Threshold Limit:</label>
            </div>
            <div className="col mt-3">
              <div className="row">
                <div className="col-2">
                <input type={'checkbox'}></input>
                </div>
                <div className="col-4">
                  <input
                    style={{ height: "2.3rem" }}
                    type="text"
                    placeholder="70"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">
                Enable loss protection on failover gateway:
              </label>
            </div>
            <div className="col mt-2">
              <input type="text" className="form-control" placeholder="90" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">
                A maximum number of alerts in a day:
              </label>
            </div>
            <div className="col mt-3">
              <input type="text" className="form-control" placeholder="70" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">
                Minimum Interval between two alerts:
              </label>
            </div>
            <div className="col mt-3">
              <input type="text" className="form-control" placeholder="1" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">Default Country:</label>
            </div>
            <div className="col mt-3">
              <select className="manage4">
                <option>India</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">Default Time Zone:</label>
            </div>
            <div className="col mt-3">
              <select className="manage4">
                <option>mumbai</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">Open Sender Id for Users?</label>
            </div>
            <div className="col mt-3">
            <input type={'checkbox'}></input>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">Open Templates for Users?</label>
            </div>
            <div className="col mt-3">
            <input type={'checkbox'}></input>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">Global Over-Selling Threshold:</label>
            </div>
            <div className="col mt-2 mb-2">
              <input type="text" className="form-control" placeholder="1" />
            </div>
          </div>

          <div className="col mt-2 mb-2">
            <button type="button" className="btn btn-primary">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ManageGeneralSetting;
