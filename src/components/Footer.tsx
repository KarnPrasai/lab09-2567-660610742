import React from "react";

interface propObject {
    year : number;
    fullName : string;
    studentId : number;
}

export default function Footer(props : propObject) {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        Copyright © {props.year} {props.fullName} {props.studentId}
      </p>
    </div>
  );
}