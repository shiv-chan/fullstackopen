const App = () => {
    const course = "Half Stack application development";
    const part1 = {
        name: "Fundamentals of React",
        exercises: 10,
    };
    const part2 = {
        name: "Using props to pass data",
        exercises: 7,
    };
    const part3 = {
        name: "State of a component",
        exercises: 14,
    };

    return (
        <div>
            <Header course={course} />
            <Content parts={[part1, part2, part3]} />
            <Total parts={[part1, part2, part3]} />
        </div>
    );
};

const Header = ({ course }) => {
    return <h1>{course}</h1>;
};

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((ele, idx) => {
                return (
                    <Part key={idx} name={ele.name} exercises={ele.exercises} />
                );
            })}
        </div>
    );
};

const Part = ({ name, exercises }) => {
    return (
        <p>
            {name} {exercises}
        </p>
    );
};

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);
    return <p>Number of exercises {total}</p>;
};

export default App;
