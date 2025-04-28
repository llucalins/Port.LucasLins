import BlurText from './BlurText';

const Sobre = () => (
  <section id="sobre" className="section">
    <BlurText text="Sobre Mim" delay={80} animateBy="words" direction="top" style={{ fontSize: '4.2rem', fontWeight: 800, marginBottom: '2.5rem' }} />
    <BlurText
      text="Sou Lucas, desenvolvedor frontend com foco em HTML, CSS e React. Atuei como professor de informática, ensinando tecnologia e programação, e agora estou em transição de carreira para me dedicar totalmente ao desenvolvimento de software."
      delay={30}
      animateBy="words"
      direction="bottom"
      style={{ fontSize: '2.6rem', marginTop: '1.5rem', lineHeight: 1.3 }}
    />
    <BlurText
      text="Atualmente, estou me especializando no desenvolvimento frontend, com foco em HTML, CSS e React. Gosto de criar interfaces modernas, intuitivas e funcionais, sempre pensando na melhor experiência para o usuário. Este portfólio reúne projetos que demonstram minha dedicação, meu olhar para o design e minha evolução constante como desenvolvedor."
      delay={30}
      animateBy="words"
      direction="bottom"
      style={{ fontSize: '2.6rem', marginTop: '1.5rem', lineHeight: 1.3 }}
    />
  </section>
);

export default Sobre;
