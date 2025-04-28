import MetaBalls from './MetaBalls';
import TiltedCard from './TiltedCard';
import InfiniteScroll from './InfiniteScroll';

const Projetos = () => (
  <section id="projetos" className="section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
    <h2 style={{ fontSize: '3.2rem', fontWeight: 700, marginBottom: '1.6rem', color: '#00eaff', letterSpacing: 2, textTransform: 'uppercase', textAlign: 'center' }}>SKILLS</h2>
    <div style={{ marginTop: '2rem', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TiltedCard
        imageSrc={require('../fotos/perfil.jpeg')}
        altText="Lucas Lins - Foto de Perfil"
        captionText="Lucas Lins"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="tilted-card-demo-text" style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', margin: 0 }}>
            Lucas Lins
          </p>
        }
      />
    </div>
    <div style={{ width: '100%', maxWidth: 500, minHeight: 300 }}>
      <MetaBalls
        color="#ffffff"
        cursorBallColor="#ffffff"
        cursorBallSize={2}
        ballCount={15}
        animationSize={30}
        enableMouseInteraction={true}
        enableTransparency={true}
        hoverSmoothness={0.05}
        clumpFactor={1}
        speed={0.3}
      />
    </div>
    {/* InfiniteScroll com as 6 fotos */}
    <div style={{ height: '500px', position: 'relative', marginTop: '2rem', width: '100%', maxWidth: 400 }}>
      <InfiniteScroll
        items={[
          { content: <img src={require('../fotos/1.jpeg')} alt="Foto 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px', display: 'block' }} /> },
          { content: <img src={require('../fotos/2.jpeg')} alt="Foto 2" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px', display: 'block' }} /> },
          { content: <img src={require('../fotos/3.jpeg')} alt="Foto 3" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px', display: 'block' }} /> },
          { content: <img src={require('../fotos/4.jpeg')} alt="Foto 4" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px', display: 'block' }} /> },
          { content: <img src={require('../fotos/5.jpeg')} alt="Foto 5" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px', display: 'block' }} /> },
          { content: <img src={require('../fotos/6.jpeg')} alt="Foto 6" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px', display: 'block' }} /> },
        ]}
        isTilted={true}
        tiltDirection='left'
        autoplay={true}
        autoplaySpeed={0.1}
        autoplayDirection="down"
        pauseOnHover={true}
        itemMinHeight={220}
      />
    </div>
  </section>
);

export default Projetos;
