import React, { Fragment } from "react";
import MealSummary from "./MealsSummary";
import AvailabelMeals from "./AvailabelMeals";
// import { Fragment } from "react";
const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvailabelMeals />
    </Fragment>
  );
};
export default Meals;
