import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 color="#e44d26" size={48} /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#1572b6" size={48} /> },
  { name: 'JavaScript', icon: <FaJs color="#f7df1e" size={48} /> },
  { name: 'React', icon: <FaReact color="#61dafb" size={48} /> },
];

const Habilidades = () => (
  <section id="habilidades" className="section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '40vh' }}>
    <h2 style={{ fontSize: '4.2rem', fontWeight: 800, marginBottom: '2.5rem', color: '#fff' }}>Habilidades</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center', alignItems: 'center' }}>
      {skills.map((skill, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 90 }}>
          {skill.icon}
          <span style={{ marginTop: 12, color: '#fff', fontWeight: 600, fontSize: '1.2rem', letterSpacing: 1, textAlign: 'center' }}>{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Habilidades;
