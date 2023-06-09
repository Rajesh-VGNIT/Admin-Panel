import React from 'react'

const ForceLockDown = () => {
  return (
        <div className="container mt-3 ">
          <div className="row jumbotron box8">
            <div>
              <div className="col-sm-12 mx-t3 mt-3 mb-3">
                <h4>Force Lock Down policy</h4>
              </div>
              <hr />
            </div>
    
            <div className="col-sm-12 b-2 m-3 form-group">
              <div className="row">
                <div className="col-sm-12 d-flex  gap-5">
                  <p style={{ paddingTop: "10px" }}>
                    <span>
                      <i class="bi bi-info-circle-fill"></i>
                    </span>{" "}
                    Enable Force Lock Down policy
                  </p>
                  <input style={{ width: "25px" }} type="checkbox" />
                  <button className="btn btn-primary">
                  Enable Lock Down change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ForceLockDown;