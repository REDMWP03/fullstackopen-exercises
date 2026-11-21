//the header component
const Header = (props) => {
  return <h1>{props.course}</h1>;
};
// the part component
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};
//the content component
const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part
        key={part.name}
        part={part.name}
        exercises={part.exercises}
      />
    ))}
  </>
);

// the total component
const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};
// the main app
const App = () => {
  const course = "Half Stack application development";
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  );
};

export default App;
