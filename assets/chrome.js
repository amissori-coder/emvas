/* Shared header/footer injection
   Ogni pagina include questo script e chiama buildChrome({ base: '.' | '..' | '../..' }).
   Il parametro `base` serve a risolvere i path relativi alle pagine annidate. */

function buildChrome(opts) {
  const base = (opts && opts.base) ? opts.base : '.';
  const b = base;

  const header = `
  <div class="topbar">
    <div class="topbar-inner">
      <div class="topbar-info">
        <span>Lun — Ven · 09:00—18:00</span>
        <span>Piazza dell'Emporio 11A, Roma</span>
      </div>
      <div class="topbar-phone"><a href="tel:+390669411430">☎ 06 69411430</a></div>
    </div>
  </div>

  <header class="site-header">
    <div class="nav">
      <a href="${b}/index.html" class="brand">
        <span>EMVAS</span>
        <span class="brand-dot"></span>
        <em>stp</em>
      </a>
      <nav class="primary">
        <ul>
          <li class="has-drop">
            <a href="#">Chi siamo</a>
            <ul class="drop">
              <li><a href="${b}/la-societa.html">La società</a></li>
              <li><a href="${b}/professionisti/index.html">I professionisti</a></li>
            </ul>
          </li>
          <li class="has-drop">
            <a href="${b}/servizi/index.html">Servizi</a>
            <ul class="drop">
              <li><a href="${b}/servizi/legal.html">Legal</a></li>
              <li><a href="${b}/servizi/tax.html">Tax</a></li>
              <li><a href="${b}/servizi/job.html">Job</a></li>
              <li><a href="${b}/servizi/start-up-innovative.html">Start-up innovative</a></li>
              <li><a href="${b}/servizi/internazionalizzazione.html">Internazionalizzazione</a></li>
              <li><a href="${b}/servizi/marchi-e-brevetti.html">Marchi e brevetti</a></li>
              <li><a href="${b}/servizi/enti-no-profit.html">Enti no-profit</a></li>
              <li><a href="${b}/servizi/trasferimento-patrimonio.html">Trasferimento &amp; patrimonio</a></li>
            </ul>
          </li>
          <li><a href="${b}/schede/index.html">Schede</a></li>
          <li><a href="${b}/contattaci.html" class="nav-cta">Contattaci →</a></li>
        </ul>
      </nav>
      <button class="menu-toggle" aria-label="Menu" onclick="toggleMobileMenu()">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div id="mobile-menu">
      <ul>
        <li>
          <div class="mobile-group-title">Chi siamo</div>
          <div class="mobile-sub">
            <a href="${b}/la-societa.html">La società</a>
            <a href="${b}/professionisti/index.html">I professionisti</a>
          </div>
        </li>
        <li>
          <div class="mobile-group-title">Servizi</div>
          <div class="mobile-sub">
            <a href="${b}/servizi/legal.html">Legal</a>
            <a href="${b}/servizi/tax.html">Tax</a>
            <a href="${b}/servizi/job.html">Job</a>
            <a href="${b}/servizi/start-up-innovative.html">Start-up innovative</a>
            <a href="${b}/servizi/internazionalizzazione.html">Internazionalizzazione</a>
            <a href="${b}/servizi/marchi-e-brevetti.html">Marchi e brevetti</a>
            <a href="${b}/servizi/enti-no-profit.html">Enti no-profit</a>
            <a href="${b}/servizi/trasferimento-patrimonio.html">Trasferimento &amp; patrimonio</a>
          </div>
        </li>
        <li><a href="${b}/schede/index.html">Schede emvas.info</a></li>
        <li><a href="${b}/contattaci.html">Contattaci →</a></li>
      </ul>
    </div>
  </header>`;

  const footer = `
  <footer class="site-footer">
    <div class="foot-grid">
      <div class="foot-brand">
        <div class="foot-brand-mark">Emvas<span class="dot">.</span></div>
        <p>Un unico interlocutore, per progettare l'azienda del futuro ed iniziare a realizzarla a partire da oggi, per gestire efficientemente i processi quotidiani — <em>time is money</em> — con nuove energie da dedicare al core business, diventando artefici di un'ideale mission aziendale.</p>
      </div>
      <div class="foot-col">
        <h4>Esplora</h4>
        <ul>
          <li><a href="${b}/index.html">Home</a></li>
          <li><a href="${b}/la-societa.html">La società</a></li>
          <li><a href="${b}/professionisti/index.html">I professionisti</a></li>
          <li><a href="${b}/schede/index.html">Schede emvas.info</a></li>
          <li><a href="${b}/contattaci.html">Contattaci</a></li>
        </ul>
      </div>
      <div class="foot-col">
        <h4>Servizi principali</h4>
        <ul>
          <li><a href="${b}/servizi/legal.html">Legal</a></li>
          <li><a href="${b}/servizi/tax.html">Tax</a></li>
          <li><a href="${b}/servizi/job.html">Job</a></li>
        </ul>
      </div>
      <div class="foot-col">
        <h4>Altri servizi</h4>
        <ul>
          <li><a href="${b}/servizi/start-up-innovative.html">Start-up innovative</a></li>
          <li><a href="${b}/servizi/internazionalizzazione.html">Internazionalizzazione</a></li>
          <li><a href="${b}/servizi/marchi-e-brevetti.html">Marchi e brevetti</a></li>
          <li><a href="${b}/servizi/enti-no-profit.html">Enti no-profit</a></li>
          <li><a href="${b}/servizi/trasferimento-patrimonio.html">Trasferimento patrimonio</a></li>
        </ul>
      </div>
      <div class="foot-newsletter">
        <div>
          <h5>La nostra <em>newsletter</em></h5>
          <p>Aggiornamenti, approfondimenti e circolari di studio, direttamente nella tua casella.</p>
        </div>
        <form onsubmit="event.preventDefault(); this.reset(); alert('Grazie! La tua iscrizione è stata registrata.');">
          <input type="email" placeholder="indirizzo@esempio.it" required>
          <button type="submit">Iscriviti →</button>
        </form>
      </div>
    </div>

    <div class="foot-bottom">
      <div>
        <strong>Emvas STP S.r.l.</strong> — Piazza dell'Emporio 11A, 00153 Roma · Tel. 06 69411430<br>
        © 2026 Emvas STP S.r.l. — Copyright per le foto del team: D'Appollonio Photography
      </div>
      <div class="foot-legal">
        <a href="https://www.linkedin.com/company/emvas-stp" target="_blank" rel="noopener">LinkedIn ↗</a>
        <a href="${b}/cookie-policy.html">Cookie policy</a>
        <a href="${b}/privacy.html">Privacy &amp; termini</a>
        <a href="#" onclick="window.scrollTo({top:0,behavior:'smooth'});return false;">↑ Torna su</a>
      </div>
    </div>
  </footer>`;

  // Inject
  const headerMount = document.getElementById('site-header-mount');
  const footerMount = document.getElementById('site-footer-mount');
  if (headerMount) headerMount.innerHTML = header;
  if (footerMount) footerMount.innerHTML = footer;

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

function toggleFaq(el) {
  el.classList.toggle('open');
}
