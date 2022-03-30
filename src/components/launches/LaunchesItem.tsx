import React from "react";
import LaunchesData from "../../types/launches.type";

export default function LaunchesDetails(props: LaunchesData) {
  return (
    <div className="p-5">
      <div className="flex border-solid border-2 border-black justify-center items-center p-5">
        <img src={props.mission_patch_small} alt="" />
      </div>
      <div className="bg-black p-5 flex justify-center items-center">
        <div>
          <p className="text-2xl text-white text-bold">
            Flight Number: <span>{props.flight_number}</span>
          </p>
          <p className="text-2xl text-white text-bold">
            Mission Name: <span>{props.mission_name}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
