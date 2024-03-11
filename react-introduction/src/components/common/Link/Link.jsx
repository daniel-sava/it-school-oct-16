import { useState } from "react";
// import "./Link.css";

export default function Link({ page, name, isButton }) {
    const [clicks, setClicks] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const [user, setUser] = useState({ username: "Andrei", clicks: 0, middleClicks: 0 });

    const clickOnLink = (event) => {
        console.log(event);
        // setClicks(clicks + 1);
        setUser((prev) => {
            return {
                ...prev,
                clicks: event === "left" ? prev.clicks + 1 : prev.clicks,
                middleClicks: event === "aux" ? prev.middleClicks + 1 : prev.middleClicks,
            };
        });
    };

    const toggleHoverState = () => {
        console.log("isHovered este acum ", isHovered);
        console.log("isHovered se modifica in ", !isHovered);
        setIsHovered((prev) => {
            return !prev;
        });

        /**
         * isHovered = true => setIsHovered(!true) === setIsHovered(false)
         * isHovered = false => setIsHovered(!false) === setIsHovered(true)
         */
    };

    return (
        <>
            <p>{user.username}</p>
            <a
                className="link"
                href={page}
                target="_blank"
                style={{
                    color: isButton ? "white" : "green",
                    fontWeight: "bold",
                    padding: "1rem 1.25rem",
                    backgroundColor: isButton ? (!isHovered ? "green" : "blue") : "none",
                    borderRadius: isButton ? "0.5rem" : "0",
                }}
                onClick={() => {
                    clickOnLink("left");
                }}
                onAuxClick={() => {
                    clickOnLink("aux");
                }}
                onMouseEnter={toggleHoverState}
                onMouseLeave={toggleHoverState}
            >
                {name} {user.clicks} {user.middleClicks}
            </a>
        </>
    );
}

// daca ii buton si NU ii hovered => bg color verde
// daca ii buton si ESTE hovered => bg color blue
// daca nu e buton => bg color none

// PAS 1 if - else if - else
// if (isButton && !isHovered) {
//     backgroundColor = "green";
// } else if (isButton && isHovered) {
//     backgroundColor = "blue";
// } else {
//     backgroundColor = "none";
// }

// // PAS 2 if - else
// if (isButton) {
//     if (!isHovered) {
//         backgroundColor = "green";
//     } else {
//         backgroundColor = "blue";
//     }
// } else {
//     backgroundColor = "none";
// }

// // PAS 3 operator ternar
// isButton ? (!isHovered ? "green" : "blue") : "none";

// // GRESIT
// if (isButton) {
//     backgroundColor = "green";
// } else if (isButton && isHovered) {
//     backgroundColor = "blue";
// } else {
//     backgroundColor = "none";
// }
