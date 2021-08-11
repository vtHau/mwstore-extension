import React from "react";

export const showRating = (rating) => {
  var result = [];
  for (var i = 1; i <= rating; i++) {
    result.push(
      <i key={i} style={{ color: "#F39C11" }} className="fa fa-star"></i>
    );
  }
  for (var j = 1; j <= 5 - rating; j++) {
    result.push(
      <i key={j + 5} style={{ color: "#F39C11" }} className="fa fa-star-o"></i>
    );
  }
  return result;
};
