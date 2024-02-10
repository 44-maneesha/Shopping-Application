import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailabelMeals.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "burger",
    description: "Finest fish and veggies",
    price: 122.99,
  },
  {
    id: "m2",
    name: "Chowmean",
    description: "Finest fish and veggies",
    price: 222,
  },
  {
    id: "m3",
    name: "biryani",
    description: "Finest fish and veggies",
    price: 22,
  },
  {
    id: "m4",
    name: "pizza",
    description: " fish and veggies",
    price: 133.99,
  },
];
const AvailabelMeals = () => {
  //   const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailabelMeals;
