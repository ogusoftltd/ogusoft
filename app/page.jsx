'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Check, TrendingUp, Zap, Users, Star, ChevronLeft, ChevronRight, Shield, Award, ChevronDown } from 'lucide-react';

export default function OGUSOFTComplete() {
  const whatsappLink = "https://wa.me/905398129884?text=Merhaba%20OGUSOFT%20web%20sitesi%20hakkında%20danışmak%20istiyorum";
  const [counters, setCounters] = useState({ projects: 0, satisfaction: 0, years: 0, thisMonth: 0, clients: 0 });
  const [caseIndex, setCaseIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (counters.projects === 0) {
        setCounters({ projects: 50, satisfaction: 98, years: 7, thisMonth: 10, clients: 7 });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [counters.projects]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCaseIndex((prev) => (prev + 1) % caseStudies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const caseStudies = [
    { name: 'Melis Kaya', sector: 'Fashion', rating: 5, quote: 'İlk ayda ₺45,000 satış yaptım. Oguz\'un mağazası sayesinde başarılı oldum.', metric: '₺0 → ₺45,000/ay' },
    { name: 'Ahmet Yilmaz', sector: 'Restaurant', rating: 5, quote: '4 kat daha fazla sipariş alıyorum şimdi. Dijitalleşme en iyi kararım oldu.', metric: '5 → 25+ orders/gün' },
    { name: 'Sinem Özdemir', sector: 'Crafts', rating: 5, quote: '9 kat daha fazla satış yapıyorum. Pazardan çevrimiçi satışa geçtim.', metric: '₺2K → ₺18K/ay' },
    { name: 'Kerem Demir', sector: 'Electronics', rating: 5, quote: 'Satışlar 3.5 kat arttı. Müşteri deneyimi çok daha iyi oldu.', metric: '₺25K → ₺87K/ay' },
  ];

  const services = [
    { name: 'Temel Website', price: '₺5,500', time: '5-7 gün', desc: 'Şirket profili, hizmet tanıtımı', features: ['Responsive Design', '5-8 Sayfa', 'SSL Sertifikası', 'SEO'] },
    { name: 'Shopify Mağazası', price: '₺13,500', time: '10-14 gün', desc: 'Tam işlevsel e-commerce', features: ['Shopify Platform', 'Ürün Kataloğu', 'Ödeme Sistemi', 'Stok Yönetimi'], featured: true },
    { name: 'Premium Özel', price: '₺19,000+', time: '14-21 gün', desc: 'Özel kod ve ileri özellikler', features: ['Özel Kod', 'Gelişmiş Özellikler', 'API Entegrasyon', '3 Ay Destek'] },
  ];

  const trustBadges = [
    { icon: Star, label: '4.9/5 Puan', subtitle: '200+ Müşteri' },
    { icon: Shield, label: 'SSL Güvenli', subtitle: 'Şifreli' },
    { icon: Award, label: '100% Garantili', subtitle: 'Para İade' },
  ];

  const processSteps = [
    { title: 'Keşif & Planlama', desc: 'İhtiyaçlarınızı anlıyoruz, strateji planlıyoruz.' },
    { title: 'Tasarım', desc: 'Profesyonel tasarım ve wireframe hazırlıyoruz.' },
    { title: 'Geliştirme', desc: 'Kodluyoruz, test ediyoruz, optimize ediyoruz.' },
    { title: 'Yayınlama & Destek', desc: 'Canlı yapıyoruz ve 24/7 destek sağlıyoruz.' },
  ];

  const faqItems = [
    { q: 'Shopify nedir ve neden önemli?', a: 'Shopify dünya\'nın en popüler e-commerce platformu. Bütçe dostu, güvenli ve profesyonel. Banka gibi güvenli ödeme alabilirsiniz.' },
    { q: 'Kaç gün sürer?', a: 'Temel website 5-7 gün, Shopify mağazası 10-14 gün, Premium 14-21 gün. Hızlı, kaliteli, profesyonel.' },
    { q: 'Sonrasında destek var mı?', a: '100% evet. 24/7 WhatsApp desteği. Sorununuz olursa hemen çözüyoruz. Premium pakete 3 ay ekstra destek dahil.' },
    { q: 'Nasıl ödeme yapabilirim?', a: 'Havale, banka transferi, Stripe. Sonra 50% peşin, 50% teslimde. Risk yok, para iade garantisi var.' },
    { q: 'Eğer hoşuma gitmezse?', a: '100% para iade. Hiç soru sormayız. Ama şimdiye kadar hiç kimse geri istedi.' },
  ];

  const navHeight = Math.min(80, 80 - scrollY * 0.1);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="min-h-screen bg-black text-white overflow-hidden">
      {/* CLEAN GRADIENT */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-[#0a0a0a] to-black"></div>

      {/* STICKY WHATSAPP BUTTON */}
      <a
        href={whatsappLink}
        className="fixed right-6 bottom-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-2xl hover:scale-125 hover:-translate-y-2 active:scale-95 transition-all duration-300 group"
        style={{ boxShadow: '0 0 40px rgba(52,211,153,0.8)' }}
        title="WhatsApp'ta Bize Yazın"
      >
        <MessageCircle size={24} className="text-white group-hover:drop-shadow-lg" />
        <span className="absolute right-0 top-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full animate-pulse">
          1
        </span>
      </a>

      {/* Header */}
      <nav 
        className="sticky top-0 z-50 border-b border-[#1c1c1c] bg-black/80 backdrop-blur px-6 transition-all duration-300"
        style={{
          height: `${navHeight}px`,
          boxShadow: scrollY > 100 ? '0 0 40px rgba(34,211,238,0.2)' : '0 0 20px rgba(34,211,238,0.1)',
        }}
      >
        <div className="flex justify-between items-center max-w-6xl mx-auto h-full">
          <div className="flex items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-105">
            <div 
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center group-hover:rotate-12 group-hover:-translate-y-1 transition-all duration-300"
              style={{
                boxShadow: scrollY > 100 ? '0 0 30px rgba(34,211,238,0.6)' : '0 0 25px rgba(34,211,238,0.5)',
              }}
            >
              <div className="w-6 h-6 border-2 border-black rounded-md transform -rotate-45"></div>
            </div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: scrollY > 100 ? '16px' : '18px', fontWeight: 800, transition: 'all 0.3s ease' }} className="group-hover:text-cyan-400 transition-colors">
              OGUSOFT
            </div>
          </div>

          <a
            href={whatsappLink}
            className="px-6 py-2 bg-cyan-400 text-black rounded-lg font-bold text-sm hover:bg-white hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300"
            style={{
              boxShadow: '0 0 40px rgba(34,211,238,0.8)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontSize: scrollY > 100 ? '11px' : '12px',
            }}
          >
            Danışma Al
          </a>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero */}
        <section className="px-6 py-20 max-w-3xl mx-auto text-center relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full -z-10"></div>

          <span className="text-cyan-400 text-xs font-bold tracking-widest inline-block" style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}>
            — SHOPIFY UZMANLIĞI
          </span>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(40px, 7vw, 62px)', fontWeight: 800, lineHeight: 1.1, animation: 'fadeInUp 0.8s ease-out 0.1s forwards', opacity: 0, textShadow: '0 0 40px rgba(34,211,238,0.3)' }}>
            İşletmenizi <em className="not-italic text-cyan-400">Digital</em>'e Taşıyın
          </h1>
          <p className="text-gray-400 text-lg mb-8 mt-4" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards', opacity: 0 }}>
            Moda, restoran, zanaat, elektronik... Her sektör için profesyonel Shopify mağazaları.
          </p>
          <a href={whatsappLink} className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-400 text-black rounded-lg font-bold hover:bg-white hover:scale-110 hover:-translate-y-2 active:scale-95 transition-all duration-300" style={{ boxShadow: '0 0 50px rgba(34,211,238,0.9)', letterSpacing: '0.08em', textTransform: 'uppercase', animation: 'fadeInUp 0.8s ease-out 0.3s forwards', opacity: 0 }}>
            <MessageCircle size={18} />
            Ücretsiz Danışma
          </a>

          {/* Counters + Recent Activity */}
          <div className="grid grid-cols-4 gap-4 pt-8 mt-8 border-t border-[#1c1c1c]">
            {[
              { value: counters.projects, label: 'Proje', delay: '0.4s' },
              { value: counters.satisfaction, label: 'Memnuniyet', delay: '0.5s' },
              { value: counters.years, label: 'Deneyim', delay: '0.6s' },
              { value: counters.thisMonth, label: 'Bu Ay', delay: '0.7s', pulse: true },
            ].map((stat, idx) => (
              <div key={idx} className="group cursor-default hover:scale-110 transition-transform" style={{ animation: `fadeInUp 0.8s ease-out ${stat.delay} forwards`, opacity: 0 }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: 800, color: '#22d3ee', textShadow: '0 0 25px rgba(34,211,238,0.8)' }} className={`group-hover:text-cyan-300 group-hover:drop-shadow-lg ${stat.pulse ? 'animate-pulse' : ''}`}>
                  {stat.value}{stat.label === 'Memnuniyet' ? '%' : '+'}
                </div>
                <p className="text-gray-500 text-sm mt-1 group-hover:text-cyan-400 transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Recent Activity Badge */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 animate-pulse" style={{ animation: 'fadeInUp 0.8s ease-out 0.8s forwards', opacity: 0 }}>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-xs font-bold text-green-400">{counters.clients} yeni müşteri bu ay</p>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="px-6 py-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {trustBadges.map((badge, i) => (
              <div 
                key={i}
                className="px-4 py-5 rounded-lg border border-cyan-400/40 bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 group hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                style={{
                  boxShadow: '0 0 30px rgba(34,211,238,0.3)',
                }}
              >
                <badge.icon size={28} className="text-cyan-400 mb-2 group-hover:scale-125 group-hover:drop-shadow-lg transition-all" />
                <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '14px' }} className="text-white group-hover:text-cyan-300 mb-0.5">{badge.label}</p>
                <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors">{badge.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1c1c1c] my-4"></div>

        {/* Services */}
        <section className="px-6 py-16 max-w-6xl mx-auto relative">
          <div className="absolute -top-32 right-0 w-96 h-96 bg-cyan-500/15 blur-3xl rounded-full -z-10"></div>

          <span className="text-cyan-400 text-xs font-bold tracking-widest">— HİZMETLER</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800 }} className="mt-4 mb-12">
            Fiyatlandırma <em className="not-italic text-cyan-400">Paketleri</em>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className={`rounded-xl border p-8 transition-all duration-300 group cursor-pointer ${s.featured ? 'border-cyan-400/80 bg-gradient-to-br from-cyan-400/20 to-cyan-400/5' : 'border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-black'}`}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  boxShadow: hoveredCard === i ? (s.featured ? '0 0 100px rgba(34,211,238,0.8)' : '0 0 80px rgba(34,211,238,0.6)') : (s.featured ? '0 0 80px rgba(34,211,238,0.5)' : '0 0 50px rgba(34,211,238,0.3)'),
                  transform: hoveredCard === i ? 'translateY(-20px) scale(1.05)' : 'translateY(0) scale(1)',
                }}
              >
                {s.featured && <div className="text-cyan-400 text-xs font-bold mb-4 group-hover:text-cyan-300 transition-colors animate-pulse">⭐ POPÜLER</div>}
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: 800, textShadow: s.featured ? '0 0 20px rgba(34,211,238,0.4)' : 'none' }} className="mb-2 group-hover:text-cyan-300 transition-colors duration-300">{s.name}</h3>
                <p className="text-gray-400 text-sm mb-8 group-hover:text-gray-300 transition-colors">{s.desc}</p>
                <div className="mb-8 pb-8 border-b border-cyan-400/20">
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '48px', fontWeight: 800, color: '#22d3ee', textShadow: '0 0 40px rgba(34,211,238,0.7)' }} className="mb-2 group-hover:text-cyan-300 group-hover:drop-shadow-lg">{s.price}</div>
                  <p className="text-gray-500 text-sm">{s.time}</p>
                </div>
                <div className="space-y-3 mb-8">
                  {s.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 group/item hover:translate-x-1 transition-transform">
                      <Check size={18} className="text-cyan-400 group-hover/item:scale-150 group-hover/item:drop-shadow-lg transition-all" />
                      <span className="text-gray-300 text-sm group-hover/item:text-cyan-300 transition-colors">{f}</span>
                    </div>
                  ))}
                </div>
                <a href={whatsappLink} className={`block w-full py-3 rounded-lg font-bold text-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 ${s.featured ? 'bg-cyan-400 text-black hover:bg-white' : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'}`} style={{ letterSpacing: '0.08em', textTransform: 'uppercase', boxShadow: hoveredCard === i ? `0 0 50px rgba(34,211,238,0.7)` : 'none', fontWeight: 700 }}>
                  Danışma Al
                </a>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1c1c1c] my-4"></div>

        {/* PROCESS TIMELINE */}
        <section className="px-6 py-16 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: 800 }} className="mb-1">
              Çalışma <em className="not-italic text-cyan-400">Süreci</em>
            </h2>
            <p className="text-gray-500 text-xs font-semibold tracking-wide">BAŞLANGICTAN SON ÜRÜNE</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <div 
                key={i}
                className="relative group"
              >
                {/* Connecting Line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-2 w-4 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                )}
                
                <div className="p-6 rounded-lg border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-black group-hover:border-cyan-400/60 group-hover:scale-105 transition-all duration-300" style={{ boxShadow: '0 0 40px rgba(34,211,238,0.2)' }}>
                  {/* Step Number */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-125 transition-transform" style={{ boxShadow: '0 0 20px rgba(34,211,238,0.6)' }}>
                    <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '14px' }} className="text-black">{i + 1}</p>
                  </div>
                  
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '16px', fontWeight: 700 }} className="text-white group-hover:text-cyan-300 transition-colors mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1c1c1c] my-4"></div>

        {/* Testimonials */}
        <section className="px-6 py-16 max-w-4xl mx-auto relative">
          <div className="absolute -top-20 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full -z-10"></div>

          <div className="text-center mb-12">
            <span className="text-cyan-400 text-xs font-bold tracking-widest">— MÜŞTERI YORUMLARI</span>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, textShadow: '0 0 30px rgba(34,211,238,0.2)' }} className="mt-4">
              Gerçek <em className="not-italic text-cyan-400">Sonuçlar</em>
            </h2>
          </div>

          <div className="p-10 rounded-2xl border border-cyan-400/50 bg-gradient-to-br from-cyan-400/10 to-black transition-all duration-500 hover:scale-105 hover:-translate-y-2" style={{ boxShadow: '0 0 100px rgba(34,211,238,0.4)' }}>
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-cyan-400 text-cyan-400 hover:scale-125 transition-transform drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 10px rgba(34,211,238,0.6))' }} />
              ))}
            </div>
            <p className="text-gray-200 text-xl leading-relaxed mb-8 italic">"{caseStudies[caseIndex].quote}"</p>
            <div className="flex justify-between items-end pt-8 border-t border-cyan-400/30">
              <div>
                <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '18px', fontWeight: 800 }}>{caseStudies[caseIndex].name}</p>
                <p className="text-cyan-400 text-sm font-bold">{caseStudies[caseIndex].sector}</p>
              </div>
              <div className="px-6 py-3 rounded-lg bg-cyan-400/20 border-2 border-cyan-400 hover:scale-110 hover:-translate-y-1 transition-all" style={{ boxShadow: '0 0 40px rgba(34,211,238,0.5)' }}>
                <p className="text-cyan-300 text-sm font-bold">{caseStudies[caseIndex].metric}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-12">
            <button onClick={() => setCaseIndex((p) => (p - 1 + caseStudies.length) % caseStudies.length)} className="p-3 rounded-lg border-2 border-cyan-400 hover:border-cyan-300 hover:bg-cyan-400/10 hover:scale-125 hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: '0 0 30px rgba(34,211,238,0.3)' }}>
              <ChevronLeft className="text-cyan-400" size={24} />
            </button>
            <div className="flex gap-3">
              {caseStudies.map((_, i) => (
                <button key={i} onClick={() => setCaseIndex(i)} className={`h-3 rounded-full transition-all cursor-pointer ${i === caseIndex ? 'w-12 bg-cyan-400 shadow-lg' : 'w-3 bg-cyan-400/30 hover:bg-cyan-400/60'}`} style={{ boxShadow: i === caseIndex ? '0 0 20px rgba(34,211,238,0.6)' : 'none' }} />
              ))}
            </div>
            <button onClick={() => setCaseIndex((p) => (p + 1) % caseStudies.length)} className="p-3 rounded-lg border-2 border-cyan-400 hover:border-cyan-300 hover:bg-cyan-400/10 hover:scale-125 hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: '0 0 30px rgba(34,211,238,0.3)' }}>
              <ChevronRight className="text-cyan-400" size={24} />
            </button>
          </div>
        </section>

        <div className="border-t border-[#1c1c1c] my-4"></div>

        {/* FAQ */}
        <section className="px-6 py-14 max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: 800 }} className="mb-1">
              Sık Sorulan <em className="not-italic text-cyan-400">Sorular</em>
            </h2>
            <p className="text-gray-500 text-xs font-semibold tracking-wide">SORULARINIZI BULUN</p>
          </div>

          <div className="space-y-2">
            {faqItems.map((item, i) => (
              <div key={i} className="rounded-lg border border-cyan-400/30 overflow-hidden bg-gradient-to-br from-cyan-400/5 to-black hover:border-cyan-400/50 transition-colors">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-5 py-3 flex items-center justify-between hover:bg-cyan-400/8 transition-colors group"
                >
                  <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: '14px' }} className="text-white text-left group-hover:text-cyan-300 transition-colors">{item.q}</p>
                  <ChevronDown size={16} className={`text-cyan-400 transition-transform flex-shrink-0 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === i && (
                  <div className="px-5 py-3 border-t border-cyan-400/20 bg-cyan-400/5 text-gray-300 text-sm leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1c1c1c] my-4"></div>

        {/* Why */}
        <section className="px-6 py-14 max-w-5xl mx-auto relative">
          <div className="absolute -top-20 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full -z-10"></div>

          <div className="mb-8">
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: 800 }} className="mb-1">
              Neden <em className="not-italic text-cyan-400">OGUSOFT?</em>
            </h2>
            <p className="text-gray-500 text-xs font-semibold tracking-wide">KENDİ KARARINIZI VERİN</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'Sonuç Odaklı', desc: 'Hedef: İşletmenizin satışını artırmak.' },
              { icon: Zap, title: 'Hızlı Teslimat', desc: 'Belirlenen sürede yüksek kalitede.' },
              { icon: Users, title: '24/7 Destek', desc: 'Hep yanınızda, her zaman hazır.' }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-black group hover:border-cyan-400/60 hover:scale-105 hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: '0 0 40px rgba(34,211,238,0.2)' }}>
                <item.icon size={32} className="text-cyan-400 mb-4 group-hover:scale-125 group-hover:rotate-12 group-hover:-translate-y-2 group-hover:drop-shadow-lg transition-all duration-300" style={{ filter: 'drop-shadow(0 0 20px rgba(34,211,238,0.4))' }} />
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '18px', fontWeight: 700 }} className="text-white group-hover:text-cyan-300 transition-colors mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1c1c1c] my-4"></div>

        {/* CTA */}
        <section className="px-6 py-24 max-w-4xl mx-auto text-center relative">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 blur-3xl rounded-full -z-10"></div>

          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 800, textShadow: '0 0 40px rgba(34,211,238,0.3)' }} className="mb-6">
            İşletmenizi <em className="not-italic text-cyan-400">Dijital</em>'e Taşıyın
          </h2>
          <p className="text-gray-400 text-lg mb-8">OGUSOFT ile başlayın. Ücretsiz danışma alın.</p>
          <a href={whatsappLink} className="inline-flex items-center gap-2 px-10 py-4 bg-cyan-400 text-black rounded-lg font-bold hover:bg-white hover:scale-120 hover:-translate-y-2 active:scale-95 transition-all duration-300" style={{ boxShadow: '0 0 60px rgba(34,211,238,0.9)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>
            <MessageCircle size={20} />
            WhatsApp'tan Başla
          </a>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 text-center border-t border-[#1c1c1c]">
          <div className="flex items-center justify-center gap-2 mb-4 group hover:scale-110 transition-transform">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center group-hover:rotate-12 transition-transform" style={{ boxShadow: '0 0 30px rgba(34,211,238,0.5)' }}>
              <div className="w-4 h-4 border-2 border-black rounded-sm transform -rotate-45"></div>
            </div>
            <p className="text-sm font-bold">OGUSOFT LTD</p>
          </div>
          <p className="text-gray-500 text-sm">© 2024 OGUSOFT. Tüm Hakları Saklıdır.</p>
          <p className="text-gray-600 text-xs mt-2">Bursa, Türkiye | Web Design & Shopify Expertise</p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
