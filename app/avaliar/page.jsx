"use client";
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { useState } from 'react';

export default function Avaliar() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço de backend, Google Forms, ou EmailJS para receber as avaliações
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <main className="main-bg o-hidden" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <section className="container section-padding text-center" style={{ maxWidth: 480 }}>
          <h1 className="fz-40 fw-700 mb-10 main-color">Avalie meu trabalho</h1>
          <p className="fz-18 mb-30" style={{ color: '#e0f7fa' }}>
            Sua opinião é muito importante para mim!<br />Deixe sua avaliação abaixo:
          </p>
          {sent ? (
            <>
              <div style={{ maxWidth: 180, margin: '0 auto 2rem auto' }}>
                <lottie-player
                  src="https://lottie.host/6e2e2b7b-2e2e-4b7e-8e2e-2e2e2b7b2e2e/SuccessCheck.json"
                  background="transparent"
                  speed="1"
                  style={{ width: '180px', height: '180px' }}
                  loop={false}
                  autoplay
                ></lottie-player>
              </div>
              <h2 className="fz-24 fw-600 main-color mb-10">Obrigado pela sua avaliação!</h2>
              <p className="fz-16" style={{ color: '#e0f7fa' }}>Sua opinião foi registrada com sucesso.</p>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-30" style={{ fontSize: 36 }}>
                {[1,2,3,4,5].map((star) => (
                  <span
                    key={star}
                    style={{ cursor: 'pointer', color: (hover || rating) >= star ? '#FFD600' : '#ccc', transition: 'color 0.2s' }}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(star)}
                    aria-label={`Avaliar com ${star} estrela${star > 1 ? 's' : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <textarea
                className="form-control mb-30"
                style={{ width: '100%', minHeight: 80, borderRadius: 10, border: '1px solid #eee', padding: 12, fontSize: 16 }}
                placeholder="Deixe um comentário (opcional)"
                value={comment}
                onChange={e => setComment(e.target.value)}
              />
              <button
                type="submit"
                className="butn butn-full butn-bord radius-30"
                disabled={rating === 0}
              >
                <span className="text">Enviar avaliação</span>
              </button>
            </form>
          )}
        </section>
      </main>
      <Footer />
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    </>
  );
} 