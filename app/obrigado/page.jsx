import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Head from 'next/head';

export default function Obrigado() {
  return (
    <>
      <Head>
        <title>Mensagem enviada com sucesso | Alessandro Rodrigues</title>
      </Head>
      <Navbar />
      <main className="main-bg o-hidden" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <section className="container section-padding text-center" style={{ maxWidth: 480 }}>
          <div style={{ maxWidth: 220, margin: '0 auto 2rem auto' }}>
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player
              src="https://lottie.host/7e2e2b7b-2e2e-4b7e-8e2e-2e2e2b7b2e2e/ContactEmail.json"
              background="transparent"
              speed="1"
              style={{ width: '220px', height: '220px' }}
              loop={false}
              autoplay
            ></lottie-player>
          </div>
          <h1 className="fz-40 fw-700 mb-10 main-color">Mensagem enviada!</h1>
          <p className="fz-18 mb-30" style={{ color: '#e0f7fa' }}>
            Obrigado pelo contato.<br />Em breve retornarei para você.<br />
            <span className="fw-500">Que tal avaliar meu trabalho?</span>
          </p>
          <a href="/avaliar" className="butn butn-full butn-bord radius-30">
            <span className="text">Avaliar agora</span>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
} 