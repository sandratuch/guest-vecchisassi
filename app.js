const IMG = {
  hero: "assets/tunin/hero.jpg",
  interior: "assets/tunin/interior.jpg",
  window: "assets/tunin/window.jpg",
  garden: "assets/tunin/garden.jpg"
};

const sections = [
  ["welcome","Willkommen"], ["arrival","Anreise nach Montegrazie"], ["way","Weg zum Haus"],
  ["checkin","Check-in & Check-out"], ["tax","Kurtaxe"], ["wifi","WLAN"],
  ["house","Hausinformationen"], ["restaurants","Restaurants & Cafés"], ["glutenfree","Glutenfrei"],
  ["markets","Märkte"], ["beaches","Strände & Baden"], ["hiking","Wandern"], ["cycling","Radfahren & Mountainbike"],
  ["kids","Mit Kindern"], ["charging","E-Ladestationen"], ["numbers","Wichtige Nummern"], ["legal","Rechtliches"]
];

let lang = localStorage.getItem("vsLang") || "DE";
let current = "home";
const app = document.getElementById("app");

function header(){
  return `<div class="header"><div class="logo">VECCHI SASSI</div><div class="lang">${["DE","EN","IT","FR","NL"].map(l=>`<button onclick="setLang('${l}')" class="${lang===l?'active':''}">${l}</button>`).join(" | ")}</div></div>`;
}
function setLang(l){ lang=l; localStorage.setItem("vsLang",l); render(current); }
function go(s){ current=s; render(s); scrollTo(0,0); }
function back(){ go("home"); }

function home(){
  return `${header()}<img class="hero" src="${IMG.hero}" alt="Casa Tunin"><div class="content"><h1>Casa Tunin</h1><p class="intro">Guest Guide für Ihren Aufenthalt in Montegrazie.</p><div class="menu">${sections.map(([id,title])=>`<button class="card" onclick="go('${id}')">${title}</button>`).join("")}</div></div>`;
}
const pages = {
 welcome: `<h1>Willkommen im Casa Tunin</h1><img class="section-img" src="${IMG.window}" alt="Montegrazie"><p>Liebe Gäste, wir freuen uns sehr, Sie im Casa Tunin begrüßen zu dürfen und unser kleines Stück Ligurien mit Ihnen zu teilen.</p><p>Bei der Renovierung war es uns wichtig, den ursprünglichen Charakter des Hauses zu bewahren. Authentizität lag uns mehr am Herzen als Perfektion.</p><p><strong>Saluti</strong><br>Sandra & Simon</p><div class="info-box"><strong>Kontakt</strong><br>+49 160 5525955<br>info@casafrancese.com</div><div class="info-box"><strong>Casa Tunin</strong><br>Via Antica Gennaro 4/1<br>18100 Montegrazie (IM), Italia</div>`,
 arrival: `<h1>Anreise nach Montegrazie</h1><p>Bitte nutzen Sie die Autobahnausfahrt <strong>Imperia Ovest (A10)</strong>. Google Maps führt Gäste gelegentlich über eine sehr schmale Straße über S. Agata nach Montegrazie.</p><ol><li>Nach der Ausfahrt Richtung Imperia / Porto Maurizio fahren.</li><li>Der Beschilderung nach Caramagna folgen.</li><li>Durch das Tal bis Caramagna fahren.</li><li>Weiter Richtung Montegrazie über die Via delle Scuole.</li></ol><p><strong>Fahrzeit:</strong> ca. 20 Minuten ab Imperia Ovest.</p>`,
 way: `<h1>Weg zum Haus</h1><p>Vom Schul- oder Kirchparkplatz gehen Sie zur Kirche von Montegrazie. Von dort führt die Gasse Via delle Torre nach oben.</p><div class="placeholder">Hier später Fotos einfügen:<br>Kirche · Gasse · Bögen · Treppe · Eingang · Schlüsselkasten</div><p>Nach wenigen Metern erreichen Sie das Haus. Die genaue Fotostrecke wird hier ergänzt.</p>`,
 checkin: `<h1>Check-in & Check-out</h1><div class="info-box"><strong>Check-in</strong><br>ab 16:00 Uhr</div><div class="info-box"><strong>Check-out</strong><br>bis spätestens 10:00 Uhr</div><p>Anreisen nach 19:00 Uhr bitte vorher abstimmen.</p>`,
 tax: `<h1>Kurtaxe</h1><p>Die Kurtaxe beträgt <strong>3,00 € pro Person und Nacht</strong>, maximal für 10 Nächte.</p><div class="tax-calc"><label>Personen<br><input id="persons" type="number" value="2" min="1" oninput="calcTax()"></label><label>Nächte<br><input id="nights" type="number" value="5" min="1" oninput="calcTax()"></label><div class="result" id="taxResult">30,00 €</div></div><a class="button" href="https://paypal.me/DEINPAYPALNAME" target="_blank">Mit PayPal bezahlen</a><p class="small">PayPal-Link bitte später ersetzen.</p>`,
 wifi: `<h1>WLAN</h1><div class="info-box"><strong>Netzwerk</strong><br>EOLO_226202</div><div class="info-box"><strong>Passwort</strong><br>fKkiSDqpM</div>`,
 house: `<h1>Hausinformationen</h1><img class="section-img" src="${IMG.interior}" alt="Casa Tunin"><h2>Küche</h2><p>Bitte keine Zitronen direkt auf die Marmorarbeitsplatte legen. Frische Kräuter und Zitronen aus dem Garten dürfen gerne verwendet werden.</p><h2>Mülltrennung</h2><ul><li>Schwarz: Restmüll</li><li>Gelb: Plastik</li><li>Braun: Bio</li><li>Blau: Papier</li><li>Grün: Glas</li></ul><h2>Garten</h2><p>Bitte den Sonnenschirm beim Verlassen des Gartens immer schließen.</p><h2>Hunde</h2><p>Hunde sind herzlich willkommen. Bitte nicht auf Sofas oder Betten lassen.</p>`,
 restaurants: `<h1>Restaurants & Cafés</h1><h2>Montegrazie</h2><p><strong>Ristorante al Santuario</strong><br>Traditionelle ligurische Küche. Bitte reservieren.<br>+39 0183 69192</p><p><strong>Ca du Cappellan</strong><br>Einfaches Restaurant im unteren Dorf.<br><a href="http://www.acaducappellan.it" target="_blank">Website öffnen</a></p>`,
 glutenfree: `<h1>Glutenfrei</h1><h2>Pizza</h2><ul><li>Fermento, Oneglia</li><li>Il Melograno, Oneglia</li><li>Kilo Pizza, Borgo Prino</li></ul><h2>Eis</h2><ul><li>Gelateria Pinotto</li><li>Gelateria La Foce</li></ul><h2>Bäckerei</h2><p><strong>Il Fornaio di Alassio</strong><br><a href="https://www.ilfornaiodialassio.it/en-gb/gluten-free" target="_blank">Website öffnen</a></p>`,
 markets: `<h1>Märkte</h1><h2>Wochenmarkt Oneglia</h2><p>Mittwoch & Samstag vormittags.</p><h2>Wochenmarkt Porto Maurizio</h2><p>Donnerstag vormittags.</p><h2>Markthalle Porto Maurizio</h2><p>Via Felice Cascione, Porto Maurizio.</p>`,
 beaches: `<h1>Strände & Baden</h1><div class="placeholder">Platzhalterbild Strand</div><p>Bagni Buraxen, Il Moletto, Borgo Foce Beach, San Lorenzo al Mare und Balzi Rossi.</p>`,
 hiking: `<h1>Wandern</h1><p>Montegrazie ist ein idealer Ausgangspunkt für Wanderungen durch Olivenhaine, Bergdörfer und Küstenlandschaften.</p><a class="button" href="https://de.wikiloc.com/routen-wandern/montegrazie-santuario-di-s-anna-vasia-santuario-n-s-delle-grazie-montegrazie-59679759" target="_blank">Route 1 öffnen</a><a class="button" href="https://de.wikiloc.com/routen-berglauf/montegrazie-monte-faudo-montegrazie-47231301" target="_blank">Monte Faudo öffnen</a>`,
 cycling: `<h1>Radfahren & Mountainbike</h1><div class="placeholder">Platzhalterbild Küstenradweg / Monte Faudo</div><p>Ligurien ist ideal für Küstenradwege, Rennrad und Mountainbike. Frühling und Herbst sind besonders schön.</p><a class="button" href="https://www.alltrails.com/explore/trail/italy/liguria--3/colle-di-cervo-colla-mea-chiappa" target="_blank">Route San Bartolomeo – Cervo</a>`,
 kids: `<h1>Mit Kindern</h1><ul><li>Eselreiten in Pietralata</li><li>Villa Grock</li><li>Wasserpark Le Caravelle</li><li>Whale Watching Imperia</li><li>Aquarium Genua</li><li>Tropfsteinhöhlen von Toirano</li></ul>`,
 charging: `<h1>E-Ladestationen</h1><p>Hier werden später die besten Ladestationen in Imperia, Porto Maurizio, Oneglia und San Lorenzo al Mare ergänzt.</p>`,
 numbers: `<h1>Wichtige Nummern</h1><h2>Gastgeber</h2><p>Sandra Tuchscherer<br><a href="tel:+491605525955">+49 160 5525955</a></p><p>Simon Filler<br><a href="tel:+491728242777">+49 172 8242777</a></p><h2>Notruf</h2><p>Polizei 112<br>Feuerwehr 115<br>Notarzt 118</p>`,
 legal: `<h1>Rechtliches</h1><p>Check-in ab 16:00 Uhr. Check-out bis 10:00 Uhr.</p><p>Das Haus wird am Abreisetag vorgereinigt übergeben. Dazu gehören Kochzeile, Geschirr, Lebensmittel und Müll.</p>`
};
function page(id){ return `${header()}<div class="content"><button class="back" onclick="back()">← Zurück</button>${pages[id] || ""}</div>`; }
function calcTax(){ const p=+document.getElementById('persons')?.value||0; const n=Math.min(+document.getElementById('nights')?.value||0,10); const sum=p*n*3; document.getElementById('taxResult').textContent=sum.toLocaleString('de-DE',{style:'currency',currency:'EUR'}); }
function render(id="home"){ app.innerHTML = id==="home" ? home() : page(id); if(id==="tax") calcTax(); }
render();
