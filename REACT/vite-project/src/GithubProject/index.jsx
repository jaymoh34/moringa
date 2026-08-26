import { useState, useEffect } from "react";
import axios from "axios";

import TopNav from "./TopNav";
import InfoSection from "./InfoSection";
import PersonCard from "./PersonCard";

function GithubProject() {
    const [people, setPeople] = useState([]);

    // Fetch API using axios
    const getUsersData = async () => {
        try {
            let response = await axios({
                method: "GET",
                url: "https://api.github.com/users",
                headers: {
                    Accept: "application/vnd.github+json",
                    // No token needed for public data
                },
            });
            setPeople(response.data);
        } catch (e) {
            console.log("Error is ", e);
        }
    };

    useEffect(() => {
        getUsersData();
    }, []);

    return (
        <div>
            <TopNav setPeople={setPeople} />
            <InfoSection people={people} />
            {people.map((person) => (
                <PersonCard key={person.id} person={person} />
            ))}
        </div>
    );
}

export default GithubProject;