export default function PropsExample({ name1, name2, name3, isStudent }) {
    console.log(name1, name2, name3);

    return (
        <div style={{ backgroundColor: isStudent ? "red" : "blue" }} className={isStudent ? "student" : "non-student"}>
            {isStudent ? <h1>Sunt studenti</h1> : <h1>Nu sunt studenti</h1>}
            {/* <h1>Sunt studenti: {isStudent ? "Da" : "Nu"}</h1> */}
            <ul>
                <li>{name1}</li>
                <li>{name2}</li>
            </ul>
        </div>
    );
}
