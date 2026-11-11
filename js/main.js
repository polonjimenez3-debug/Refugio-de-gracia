/* Lee SITE (config.js) y construye la página. Normalmente NO necesitas editar este archivo. */
(function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const paras = (arr) => arr.map((t) => `<p>${esc(t)}</p>`).join("");
  const S = SITE;

  document.title = S.nombre;
  document.querySelectorAll("[data-src=logo]").forEach((i) => (i.src = S.logo));

  // Portada
  $("heroTitulo").textContent = S.hero.titulo;
  $("heroTexto").textContent = S.hero.texto;
  if (S.hero.imagen) $("heroBg").style.backgroundImage = `url("${S.hero.imagen}")`;

  // Nosotros
  $("nosTitulo").textContent = S.nosotros.titulo;
  $("nosTextos").innerHTML = paras(S.nosotros.parrafos);
  $("nosPilares").innerHTML = S.nosotros.pilares.map((p) => `<li><strong>${esc(p.titulo)}</strong><span>${esc(p.texto)}</span></li>`).join("");

  // Pastor
  $("pastorNombre").textContent = S.pastor.nombre;
  $("pastorCargo").textContent = S.pastor.cargo;
  $("pastorTexto").innerHTML = paras(S.pastor.descripcion);
  $("pastorFoto").innerHTML = S.pastor.foto
    ? `<img src="${esc(S.pastor.foto)}" alt="${esc(S.pastor.nombre)}" loading="lazy">`
    : `<div class="ph" role="img" aria-label="Espacio para la fotografía del pastor">Foto del pastor<small>img/pastor.jpg</small></div>`;

  // Servicios
  $("servCards").innerHTML = S.servicios.map((s) =>
    `<article class="card"><h3>${esc(s.dia)}</h3><p class="time">${esc(s.hora)}</p><p>${esc(s.detalle || "")}</p></article>`).join("");

  // Ubicación
  const dirCompleta = [S.ubicacion.direccion, S.ubicacion.ciudad].filter(Boolean).join(", ");
  const q = encodeURIComponent(dirCompleta);
  const rutaURL = `https://www.google.com/maps/dir/?api=1&destination=${q}`;
  $("locDir").textContent = dirCompleta;
  $("locRef").textContent = S.ubicacion.referencia;
  $("mapa").src = `https://www.google.com/maps?q=${q}&output=embed`;
  $("locBtn").href = rutaURL;
  $("heroComo").href = rutaURL;

  // Contacto
  const C = S.contacto;
  const wa = C.whatsapp.replace(/\D/g, "");
  const items = [
    { n: "WhatsApp",  v: wa ? "Escribir por WhatsApp" : "", h: wa ? `https://wa.me/${wa}` : "" },
    { n: "Facebook",  v: C.facebook ? "Visitar página" : "", h: C.facebook },
    { n: "Instagram", v: C.instagram ? "Ver perfil" : "", h: C.instagram },
    { n: "Correo",    v: C.correo, h: C.correo ? `mailto:${C.correo}` : "" }
  ];
  $("contactGrid").innerHTML = items.map((i) => i.h
    ? `<a class="contact-card" href="${esc(i.h)}" target="_blank" rel="noopener"><span>${i.n}</span><strong>${esc(i.v)}</strong></a>`
    : `<div class="contact-card off"><span>${i.n}</span><strong>Próximamente</strong></div>`).join("");

  // Pie de página
  $("fNombre").textContent = S.nombre;
  $("fDir").textContent = dirCompleta;
  $("fHor").innerHTML = S.servicios.map((s) => `${esc(s.dia)}: ${esc(s.hora)}`).join("<br>");
  $("fRedes").innerHTML = items.filter((i) => i.h).map((i) => `<a href="${esc(i.h)}" target="_blank" rel="noopener">${i.n}</a>`).join("<br>") || "Próximamente";
  $("copy").textContent = `© ${new Date().getFullYear()} ${S.copyright}`;

  // Menú: fondo al desplazar + menú móvil
  const header = $("header"), burger = $("burger");
  const onScroll = () => header.classList.toggle("solid", window.scrollY > 40);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  burger.addEventListener("click", () => {
    const open = header.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll(".nav a").forEach((a) => a.addEventListener("click", () => { header.classList.remove("open"); burger.setAttribute("aria-expanded", false); }));

  // Aparición suave de las secciones al desplazarse
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.15 });
    document.querySelectorAll(".section .wrap").forEach((el) => { el.classList.add("reveal"); io.observe(el); });
  }
})();
