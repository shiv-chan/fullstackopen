const App = () => {
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;

    return (
        <div>
            <Header course={course} />
            <Content
                parts={[part1, part2, part3]}
                exercises={[exercises1, exercises2, exercises3]}
            />
            <Total exercises={[exercises1, exercises2, exercises3]} />
        </div>
    );
};

const Header = ({ course }) => {
    return <h1>{course}</h1>;
};

const Content = ({ parts, exercises }) => {
    return (
        <div>
            {parts.map((ele, idx) => {
                return <Part key={idx} part={ele} exercises={exercises[idx]} />;
            })}
        </div>
    );
};

const Part = ({ part, exercises }) => {
    return (
        <p>
            {part} {exercises}
        </p>
    );
};

const Total = ({ exercises }) => {
    const total = exercises.reduce((sum, exercise) => sum + exercise, 0);
    return <p>Number of exercises {total}</p>;
};

export default App;
