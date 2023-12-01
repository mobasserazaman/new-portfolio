import './Header.css';
import myphoto from '../../assets/myphoto.jpeg';
import resume from '../../assets/Resume_Mobassera_Zaman.pdf';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={myphoto} alt="Stylized atom" />
      <h2>Mobassera Zaman</h2>
      <a href='https://docs.google.com/document/d/1TxNMgelpWhy7rH9LMaQ2yRaKuNPf5cZG/edit'><button>Resume</button></a>
      <button>Cover Letter</button>
      <button>Transcript</button>

    </header>
  );
}