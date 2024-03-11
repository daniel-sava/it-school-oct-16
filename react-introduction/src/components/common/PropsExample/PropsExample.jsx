export default function PropsExample({ name1, name2, name3, isStudent }) {
    console.log(name1, name2, name3);

    return (
        <div>
            <h1>Sunt studenti: {isStudent ? "Da" : "Nu"}</h1>
            <ul>
                <li>{name1}</li>
                <li>{name2}</li>
            </ul>
        </div>
    );
}
