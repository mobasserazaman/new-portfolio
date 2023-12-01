import './Project.css';
export default function Project({title, year, description}) {
    return (
        <>
        <h3>{title}</h3>
        <h4>{year}</h4>
        <p>{description}</p>
        </>
        
    );
  }