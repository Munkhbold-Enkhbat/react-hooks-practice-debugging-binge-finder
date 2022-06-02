import React from "react";

function TVShow(props) {
  console.log("Props:", props)
  return (
    <div>
      <br />
      <img src={props.show.image.medium} onClick={props.selectShow} alt="" />
    </div>
  );
}

export default TVShow;
