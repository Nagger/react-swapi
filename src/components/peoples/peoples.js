import * as React from "react";

export const Peoples = ({ peoples }) => {
  console.log(peoples);
  window.peoples = peoples;
  return (
    <div>
      {peoples.map(people => (
        <p>{people.name}</p>
      ))}
    </div>
  );
};
