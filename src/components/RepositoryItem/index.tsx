import '../../styles/styles.repoitem.scss';

type RepoProps = {
     name: string,
     description: string,
     link: string
}

export default function RepositoryItem({ name, description, link } : RepoProps ){
    return(
        <section className="repository-list">
         <ul>
             <li>
                 <strong>{ name ?? 'default' }</strong>
                 <p>{ description }</p>

                 <a href={ link }>
                    Acessar Repositório
                 </a>
             </li>
         </ul>
      </section>
    )
}