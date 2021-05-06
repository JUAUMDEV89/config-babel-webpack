import { useState, useEffect } from 'react';
import RepositoryItem from "../RepositoryItem";

interface Repository {
    name: string,
    description: string,
    url: string
}

export default function RepositoryList(){

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(()=>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return(
      <>
         {
             repositories.map(repo => (
                 <ul>
                     { 
                        <RepositoryItem
                            name={repo.name}
                            description={repo.description}
                            link={repo.url}
                        />
                      }
                 </ul>
             ))
         }
      </>
    )
}