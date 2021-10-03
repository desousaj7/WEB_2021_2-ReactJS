import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default (props) => {
    return (
        <div>
                <div className="card text-white bg-dark mb-3 shadow-lg">
                <div className="card-header">My Personal Informations</div>
                    <div className="card-body">
                        <h5 class="card-title"> Name:</h5>
                        <p className="card-text">{props.myInfo.name} </p>
                        <h5 class="card-title"> Course:</h5>
                        <p className="card-text">{props.myInfo.course} </p>
                        <h5 class="card-title"> Hometown:</h5>
                        <p className="card-text">{props.myInfo.hometown} </p>
                    </div>
                    <div class="card-footer bg-transparent">{props.myInfo.email}</div>
                </div>
        </div>
    )
}