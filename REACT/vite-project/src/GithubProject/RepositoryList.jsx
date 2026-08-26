import { useState, useEffect } from "react";
import axios from "axios";

function RepositoryList({ isVisible, setIsVisible, repos_url }) {
  const [repos, setRepos] = useState([]);

  // Fetch repositories only when isVisible becomes true
  useEffect(() => {
    if (isVisible) {
      const getRepos = async () => {
        try {
          let response = await axios({
            method: "GET",
            url: repos_url,
            // Note: Public repos usually don't need a token, but if you get a 403, add the token here.
          });
          setRepos(response.data);
        } catch (e) {
          console.log("Error fetching repos:", e);
        }
      };
      getRepos();
    }
  }, [isVisible, repos_url]);

  // If not visible, render nothing
  if (!isVisible) return null;

  return (
    <div style={{ marginTop: "15px", borderTop: "1px solid #ddd", paddingTop: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h4 style={{ margin: 0 }}>Repositories ({repos.length})</h4>
        <button onClick={() => setIsVisible(false)} style={{ fontSize: "12px", cursor: "pointer" }}>
          Close
        </button>
      </div>
      
      <ul style={{ paddingLeft: "20px", maxHeight: "150px", overflowY: "auto", marginTop: "10px" }}>
        {repos.map((repo) => (
          <li key={repo.id} style={{ marginBottom: "8px" }}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoryList;