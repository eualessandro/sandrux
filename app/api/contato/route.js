import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Só inicializa o Resend se a chave da API estiver configurada
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req) {
  const { name, email, message, subject } = await req.json();

  // Verifica se o Resend está configurado
  if (!resend) {
    return NextResponse.json({ 
      ok: false, 
      error: 'Email service not configured' 
    }, { status: 500 });
  }

  try {
    await resend.emails.send({
      from: 'Contato <contato@alebr.com>',
      to: 'alessandroz.br@gmail.com',
      subject: subject || `Nova mensagem de ${name}`,
      html: `<p><b>Nome:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Mensagem:</b> ${message}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
} 