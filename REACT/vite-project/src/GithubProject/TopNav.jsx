import { useState } from "react";
import axios from "axios";

function TopNav(props) {
    const { setPeople } = props;
    const [search, setSearch] = useState("");

    const onSearch = async () => {
        try {
            const trimmedString = search.trim();
            if (trimmedString === "") {
                return;
            }

            let response = await axios({
                method: "GET",
                url: "https://api.github.com/search/users",
                params: {
                    q: trimmedString
                },
                headers: {
                    Accept: "application/vnd.github+json",
                    // No token needed for public data
                },
            });
            
            setPeople(response.data.items);
        } catch (e) {
            console.log("SEARCH ERROR:", e);
        }
    };

    return (
        <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
            <img
                style={{ width: "40px", marginRight: "10px" }}
                src="https://toppng.com/uploads/preview/github-logo-whout-background-11659788017fkyvv1fvtu.png"
                alt="GitHub Logo"
            />
            <input
                style={{ 
                    width: "50vw", 
                    marginLeft: "1em", 
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px"
                }}
                type="text"
                placeholder="Search GitHub users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && onSearch()}
            />
            <button 
                style={{
                    marginLeft: "10px",
                    padding: "8px 16px",
                    backgroundColor: "#24292e",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                }}
                onClick={onSearch}
            >
                Search
            </button>
        </div>
    );
}

export default TopNav;