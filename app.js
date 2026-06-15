const IMG = {
  hero: "assets/tunin/hero.jpg",
  interior: "assets/tunin/interior.jpg",
  window: "assets/tunin/window.jpg",
  garden: "assets/tunin/garden.jpg"
};

const sections = [
  ["welcome","Willkommen"],
  ["arrival","Anreise nach Montegrazie"],
  ["way","Weg zum Haus"],
  ["checkin","Check-in & Check-out"],
  ["tax","Kurtaxe"],
  ["wifi","WLAN"],
  ["house","Hausinformationen"],
  ["restaurants","Restaurants & Cafés"],
  ["glutenfree","Glutenfrei"],
  ["markets","Märkte"],
  ["beaches","Strände & Baden"],
  ["hiking","Wandern"],
  ["cycling","Radfahren & Mountainbike"],
  ["kids","Mit Kindern"],
  ["charging","E-Ladestationen"],
  ["numbers","Wichtige Nummern"],
  ["legal","Rechtliches"]
];

let lang = localStorage.getItem("vsLang") || "DE";
let current = "home";
const app = document.getElementById("app");

function header(){
  return `
    <div class="header">
      <div class="logo">VECCHI SASSI</div>
      <div class="lang">
        ${["DE","EN","IT","FR","NL"].map(l =>
          `<button onclick="setLang('${l}')" class="${lang===l?'active':''}">${l}</button>`
        ).join(" | ")}
      </div>
    </div>
  `;
}

function setLang(l){
  lang = l;
  localStorage.setItem("vsLang", l);
  render(current);
}

function go(s){
  current = s;
  render(s);
  scrollTo(0,0);
}

function back(){
  go("home");
}

function home(){
  return `
    ${header()}
    <img class="hero" src="${IMG.hero}" alt="Casa Tunin">
    <div class="content">
      <h1>Casa Tunin</h1>
      <p class="intro">Guest Guide für Ihren Aufenthalt in Montegrazie.</p>
      <div class="menu">
        ${sections.map(([id,title]) =>
          `<button class="card" onclick="go('${id}')">${title}</button>`
        ).join("")}
      </div>
    </div>
  `;
}

const pages = {
  welcome: `
    <h1>Willkommen im Casa Tunin</h1>
    <img class="section-img" src="${IMG.window}" alt="Montegrazie">

    <p>Liebe Gäste,</p>

    <p>wir freuen uns sehr, Sie im Casa Tunin begrüßen zu dürfen und unser kleines Stück Ligurien mit Ihnen zu teilen.</p>

    <p>Bei der Renovierung des Hauses war es uns wichtig, den ursprünglichen Charakter und die Geschichte des Gebäudes zu bewahren. Authentizität lag uns dabei mehr am Herzen als Perfektion. Gerade dieses Unperfekte macht für uns den besonderen Charme Liguriens aus – und wir hoffen, dass Sie dies genauso empfinden.</p>

    <p>In dieser Gästemappe finden Sie alle wichtigen Informationen für Ihren Aufenthalt: Anreise und WLAN, Hausinformationen, Empfehlungen für Restaurants und Ausflüge sowie Hinweise zur Abreise.</p>

    <p>Wir wünschen Ihnen eine erholsame Zeit in Montegrazie und viele schöne Momente im Casa Tunin.</p>

    <p><strong>Saluti</strong><br>Sandra & Simon</p>

    <div class="info-box">
      <strong>Kontakt</strong><br>
      Sandra Tuchscherer<br>
      <a href="tel:+491605525955">+49 160 5525955</a><br>
      <a href="mailto:info@casafrancese.com">info@casafrancese.com</a>
    </div>

    <div class="info-box">
      <strong>Casa Tunin</strong><br>
      Via Antica Gennaro 4/1<br>
      18100 Montegrazie (IM)<br>
      Italia
    </div>

    <div class="info-box">
      <strong>Anfahrbare Adresse</strong><br>
      Via delle Scuole 2<br>
      18100 Montegrazie (IM)<br>
      Italia
    </div>
  `,

  arrival: `
    <h1>Anreise nach Montegrazie</h1>

    <p>Liebe Gäste, bitte lesen Sie diese Anfahrtsbeschreibung sorgfältig durch. Google Maps führt Gäste gelegentlich über eine sehr schmale Straße über S. Agata nach Montegrazie. Diese Strecke ist nicht zu empfehlen.</p>

    <p>Bitte nutzen Sie unbedingt die Autobahnausfahrt <strong>Imperia Ovest (A10)</strong>.</p>

    <ul>
      <li>Von Genua kommend: 2. Ausfahrt Imperia</li>
      <li>Von Nizza kommend: 1. Ausfahrt Imperia</li>
    </ul>

    <h2>Anfahrt ab Imperia Ovest</h2>

    <ol>
      <li>Nach der Ausfahrt Richtung Imperia / Porto Maurizio fahren.</li>
      <li>Der Beschilderung nach Caramagna folgen.</li>
      <li>Durch das Tal bis nach Caramagna fahren.</li>
      <li>In Caramagna auf der Hauptstraße bleiben und Richtung Montegrazie fahren.</li>
      <li>Über die Via delle Scuole bis zum Dorfeingang von Montegrazie fahren.</li>
    </ol>

    <p><strong>Fahrzeit:</strong> ca. 20 Minuten ab der Autobahnausfahrt Imperia Ovest.</p>

    <h2>Parken</h2>

    <p>Am Dorfeingang befinden sich kostenlose Parkmöglichkeiten entlang der Straße sowie ein Parkhaus.</p>

    <p>Weitere Parkmöglichkeiten befinden sich vor der Kirche von Montegrazie. Dafür fahren Sie durch die schmale Durchfahrt beim roten Haus.</p>

    <p>Ein weiterer kostenloser Parkplatz befindet sich im oberen Dorf. Wir empfehlen, bei engen Durchfahrten die Außenspiegel einzuklappen.</p>
  `,

  way: `
    <h1>Weg zum Haus</h1>

    <p>Vom Schul- oder Kirchparkplatz gehen Sie zur Kirche von Montegrazie. Von dort führt die Gasse <strong>Via delle Torre</strong> direkt neben der Kirche nach oben.</p>

    <div class="placeholder">
      Hier später Fotos einfügen:<br>
      Kirche · Beginn der Gasse · erster Bogen · zweiter Bogen · Treppe · Eingang · Schlüsselkasten
    </div>

    <p>Folgen Sie dem Weg durch die beiden Steinbögen. Nach wenigen Metern erreichen Sie das Haus.</p>

    <p>Die genaue Fotostrecke wird später mit den Bildern aus der Smoobu-App ergänzt.</p>
  `,

  checkin: `
    <h1>Check-in & Check-out</h1>

    <div class="info-box">
      <strong>Check-in</strong><br>
      ab 16:00 Uhr
    </div>

    <div class="info-box">
      <strong>Check-out</strong><br>
      bis spätestens 10:00 Uhr
    </div>

    <p>Anreisen nach 19:00 Uhr bitte vorher abstimmen. Ohne vorherige Absprache kann eine Gebühr von 20 € pro angefangener Stunde berechnet werden.</p>

    <h2>Vor der Abreise</h2>

    <ul>
      <li>Geschirr spülen und einräumen</li>
      <li>Kochbereich reinigen</li>
      <li>Lebensmittel entsorgen</li>
      <li>Müll entsorgen</li>
      <li>Persönliche Gegenstände mitnehmen</li>
      <li>Schlüssel zurücklegen bzw. abgeben</li>
    </ul>
  `,

  tax: `
    <h1>Kurtaxe</h1>

    <p>Die Stadt Imperia erhebt eine Kurtaxe für Übernachtungsgäste.</p>

    <div class="info-box">
      <strong>Gebühr</strong><br>
      3,00 € pro Person und Nacht<br>
      maximal für 10 Nächte
    </div>

    <div class="tax-calc">
      <label>Personen<br>
        <input id="persons" type="number" value="2" min="1" oninput="calcTax()">
      </label>

      <label>Nächte<br>
        <input id="nights" type="number" value="5" min="1" oninput="calcTax()">
      </label>

      <div class="result" id="taxResult">30,00 €</div>
    </div>

    <a class="button" href="https://paypal.me/DEINPAYPALNAME" target="_blank">
      Mit PayPal bezahlen
    </a>

    <p class="small">PayPal-Link bitte später ersetzen.</p>
  `,

  wifi: `
    <h1>WLAN</h1>

    <div class="info-box">
      <strong>Netzwerk</strong><br>
      EOLO_226202
    </div>

    <div class="info-box">
      <strong>Passwort</strong><br>
      fKkiSDqpM
    </div>

    <p>Der WLAN-Router befindet sich im Büro.</p>
  `,

  house: `
    <h1>Hausinformationen</h1>
    <img class="section-img" src="${IMG.interior}" alt="Casa Tunin">

    <h2>Sicherungskasten</h2>
    <p>Der Sicherungskasten befindet sich im Eingangsbereich hinter der kleinen Holzschranktür links neben der Eingangstür.</p>

    <h2>Waschmaschine & Trocknen</h2>
    <p>Die Waschmaschine befindet sich im unteren Badezimmer. Bügelbrett und Wäscheständer liegen unter dem Bett im unteren Schlafzimmer.</p>

    <h2>Küche</h2>
    <p>Bitte keine Zitronen direkt auf die Marmorarbeitsplatte legen, da die Säure die Oberfläche beschädigen kann.</p>
    <p>Frische Kräuter und Zitronen aus dem Garten dürfen gerne verwendet werden.</p>

    <h2>Geschirrspüler</h2>
    <p>Der Geschirrspüler befindet sich in der kleinen Kammer links neben der Küchenzeile.</p>

    <h2>Kühlschrank</h2>
    <p>Bitte keine gefrorenen, offenen oder verderblichen Lebensmittel bei der Abreise zurücklassen.</p>

    <h2>Kaffeemaschine</h2>
    <ul>
      <li>Nespresso-Kaffeemaschine</li>
      <li>Mokkakanne</li>
    </ul>

    <h2>Gasherd</h2>
    <p>Wählen Sie die gewünschte Kochplatte aus und drücken Sie den Regler leicht ein, bis die Flamme zündet. Danach auf die gewünschte Stufe drehen.</p>
    <p>Bitte keine scheuernden Reinigungsmittel oder rauen Schwämme verwenden.</p>

    <h2>Mülltrennung</h2>
    <p>Müllcontainer befinden sich am Schulplatz und am oberen Parkplatz. Der kleine Schlüssel am goldenen Schlüsselbund öffnet die Container am Schulplatz.</p>

    <ul>
      <li>Schwarz: Restmüll</li>
      <li>Gelb: Plastik</li>
      <li>Braun: Bioabfall</li>
      <li>Blau: Papier</li>
      <li>Grün: Glas</li>
    </ul>

    <p>Bitte den Müll vor der Abreise entsorgen.</p>

    <h2>Handtücher</h2>
    <p>Bitte bringen Sie eigene Strandtücher mit. Die weißen Handtücher aus dem Haus dürfen nicht mit an den Strand genommen werden.</p>

    <h2>Garten</h2>
    <img class="section-img" src="${IMG.garden}" alt="Garten Casa Tunin">
    <p>Bitte den Sonnenschirm beim Verlassen des Gartens immer schließen. Auch an ruhigen Tagen können plötzliche Windböen auftreten.</p>
    <p>Die Gartenbeleuchtung kann am kleinen Holzverschlag eingeschaltet werden. Bitte beim Verlassen des Gartens wieder ausschalten.</p>

    <h2>Wohnzimmer</h2>
    <p>Die Couch ist empfindlich. Bitte achten Sie besonders mit Rotwein, Kindern und Hunden darauf, Flecken oder Beschädigungen zu vermeiden.</p>
    <p>Die Couch ist keine Schlafcouch.</p>

    <h2>Schlafzimmer</h2>
    <p>An warmen Tagen empfehlen wir, die Fensterläden tagsüber geschlossen zu halten, um die Räume angenehm kühl zu halten.</p>
    <p>In allen Schlafzimmern befinden sich Moskitonetze oder Mückenstecker.</p>

    <h2>Hunde</h2>
    <p>Hunde sind bei uns herzlich willkommen. Aus Rücksicht auf zukünftige Gäste bitten wir Sie jedoch, Hunde nicht auf Sofas oder Betten zu lassen.</p>
  `,

    restaurants: `
    <h1>Restaurants & Cafés</h1>

    <p>In Montegrazie gibt es 2 Restaurants, das "Ristorante al Santuario" mit typisch ligurischen Menü in sehr schöner Kulisse. Es empfiehlt sich aber anzurufen und zu reservieren da es nicht immer offen hat. Schöner kleiner Fussweg vom Haus zur Wallfahrtskirche und ein weiteres, "Cappelan" im unteren Dorf.</p>

    <h2>Ristorante al Santuario (Montegrazie)</h2>
    <p>Besitzer Roberto spricht auch englisch ☎️ +39 0183 69192 +393382675498</p>

    <hr>

    <h2>Ca du capellan (Montegrazie)</h2>
    <p>Einfaches Restaurant, bitte vorher anrufen.</p>
    <p>Tel. 0183 730979 ☎️ 339 8521470<br>
    <a href="http://www.acaducappellan.it" target="_blank">http://www.acaducappellan.it</a></p>

    <p>Unsere Empfehlungen für Restaurants, Cafés, Bars in Imperia (besteht aus zwei Stadtteilen: Porto Maurizio und Oneglia).</p>

    <h2>🌊 Strandrestaurants & Bars in Imperia</h2>

    <h3>Bagni Buraxen (Marina)</h3>
    <p>Strand Restaurant mit außergewöhnlicher Küche, sonntags DJ von mittags bis abends. 📍 Corso Giovanni Boine 2, Imperia | ☎️ +39 0183 61722</p>

    <hr>

    <h3>Il Moletto (Marina)</h3>
    <p>Beach Bar & Lido – Frühstück, Grill, DJ-Musik und traumhafter Blick auf das Meer und die Altstadt von Porto Maurizio, perfekter Aperitvo Spot. 📍 Via Banchina Medaglie d’Oro, Imperia | ☎️ +39 345 0489252 | ✉️ ilmolettobeachbar@hotmail.com | 🌐 <a href="https://ilmoletto.it" target="_blank">ilmoletto.it</a></p>

    <hr>

    <h3>Il Chioscetto di Fulvio (Prino)</h3>
    <p>Kultiger Strandkiosk mit Panini & Drinks direkt am Meer und an der neuen Fahrradstrecke. 📍 Borgo Prino, Lungomare C. Colombo 112, Imperia</p>

    <hr>

    <h3>Altamarea (Marina)</h3>
    <p>Strandrestaurant direkt am Meer, frischer Fisch, entspannte Strandatmosphäre. 📍 Lungomare C. Colombo 176, Borgo Prino, Imperia | ☎️ +39 0183 63750</p>

    <hr>

    <h3>Bar La Terrazza sul Mare (Prino)</h3>
    <p>Aperitivi & Snacks mit herrlicher Aussicht über Hafen & Meer. 📍 Borgo Marina, Imperia (glutenfreie Optionen)</p>

    <hr>

    <h3>Prino 58 (Prino)</h3>
    <p>Außergewöhnliches, sehr kleines Restaurant für Austern- und Meeresfrüchten Spezialitäten, unbedingt reservieren 📍 Borgo Prino, Lungomare C. Colombo 58, Imperia | ☎️ +39 349 547 6615</p>

    <hr>

    <h3>Ristorante Sarri (Prino)</h3>
    <p>Michelin-Stern, moderne Fischküche, Meerblick. 📍 Lungomare C. Colombo 108, Borgo Prino, Imperia | ☎️ +39 0183 754056 | 🌐 <a href="https://ristorantesarri.it" target="_blank">ristorantesarri.it</a></p>

    <hr>

    <h3>La Ruota (Borgo Foce)</h3>
    <p>Traditions-Fischrestaurant seit 1979, exzellente mediterrane Küche. Romantisch gelegen im alten Fischerhafen 📍 Largo Spianata Varese 25, Imperia | ☎️ 0183 61206 | 🌐 <a href="https://laruotaimperia.com" target="_blank">laruotaimperia.com</a> (glutenfreie Optionen)</p>

    <hr>

    <h3>I Sognatori (Borgo Foce)</h3>
    <p>Mediterrane Küche, Romantisch gelegen im alten Fischerhafen (glutenfreie Optionen). 📍 Largo Varese 16, Imperia | ☎️ +39 0183 63179 | 🌐 <a href="https://isognatori.fun" target="_blank">isognatori.fun</a></p>

    <hr>

    <h3>Kilo Pizza (Borgo Prino)</h3>
    <p>Spezialisiert auf Pinsa Romana (leichte Gourmet-Pizza)(glutenfreie Optionen). 📍 Lungomare C. Colombo 188, Imperia | ☎️ +39 0183 681213</p>

    <hr>

    <h3>Oasi La Pizza (Borgo Marina)</h3>
    <p>Pizzeria seit 1984, große Auswahl, auch Pasta & Terrasse. Rotierendes Pizza System 📍 Piazza Sant’Antonio 15, Imperia | ☎️ +39 0183 666892 | 🌐 <a href="https://oasilapizza.it" target="_blank">oasilapizza.it</a></p>

    <hr>

    <h3>Olio Grosso (Parasio)</h3>
    <p>Slow-Food-Osteria, Fisch & regionale Spezialitäten. Schön gelegen auf dem Altstadthügel 📍 Parasio, Imperia | ☎️ +39 0183 60815</p>

    <hr>

    <h3>L’Amuen (Parasio)</h3>
    <p>Lokale Pizzeria & Osteria mit traditioneller Küche. 📍 Via San Leonardo 14, Imperia | ☎️ +39 347 941 7856</p>

    <hr>

    <h3>Il Melograno (Oneglia, Hafen)</h3>
    <p>Pizzeria am Hafen mit 4 verschiedene Pizzateigen, (glutenfreie Optionen) 📍 Via Des Geneys 12 / Calata G. B. Cuneo 7, Imperia | ☎️ +39 0183 272907</p>

    <hr>

    <h3>Fermento (Oneglia, Hafen)</h3>
    <p>Pizzeria mit vielen Teigvarianten, beste glutenfreie Pizza Imperias. Adresse: Calata G.B. Cuneo 49, Imperia ☎️ 0183 1972008</p>

    <h2>☕ Cafés & Bars</h2>

    <h3>Orto Bar (Oneglia Hafen)</h3>
    <p>Bar mit Cocktails, Musik und entspannter Atmosphäre in der Nähe des Hafens</p>

    <hr>

    <h3>Surf /Taste of Surf (Oneglia Hafen)</h3>
    <p>Junges und modernes Restaurant am Hafen mit außergewöhnlichen Kreationen. 🌐 <a href="https://www.tasteofsurf.it" target="_blank">www.tasteofsurf.it</a></p>

    <hr>

    <h3>Monkeys Bar (Oneglia Hafen)</h3>
    <p>Bar mit toller Getränkeauswahl, freundlichen Service und intime Atmosphäre. 📍Calata Giovanni Battista Cuneo 5, Imperia ☎️ +39 0183 881647 🌐 <a href="https://threemonkeys3m.com" target="_blank">threemonkeys3m.com</a></p>

    <hr>

    <h3>Cafe del Porto (Oneglia Hafen)</h3>
    <p>Café mit Blick aufs Hafenbecken, ideal für Kaffee, Crostata, Gubeletti, Snacks und handgemachte Speisen. Adresse: Piazza De Amicis 9, Imperia (Oneglia) ☎️ +39 329 4717575 / 0183 681545 <a href="https://caffe-del-porto-imperia.it" target="_blank">caffe-del-porto-imperia.it</a></p>

    <hr>

    <h3>Caffè Piccardo (Oneglia Innenstadt)</h3>
    <p>Historisches Café im Herzen von Oneglia, berühmt für Torten, Eis & Espresso. 📍 Piazza Dante 29, Imperia | ☎️ +39 0183 63546 | 🌐 <a href="https://piccardopasticceria.it" target="_blank">piccardopasticceria.it</a></p>

    <hr>

    <h3>Café Pepito (Porto Innenstadt)</h3>
    <p>Beliebter Treff für Frühstück, Aperitivo & Snacks. 📍 Piazza Goito 14, Imperia | ☎️ +39 0183 292559 • Bar La Terrazza sul Mare – Aperitivi mit Panorama über den Yachthafen.</p>

    <h2>🏞️ Umland von Imperia</h2>

    <h3>Ristorante Val Prino (Molini di Prelà)</h3>
    <p>Familienrestaurant mit Menü mit ligurischen Klassikern. 📍 Piazza Umberto I, 8, 18020 Molini (Prelà) | ☎️ +39 0183 282230</p>

    <hr>

    <h3>Casa della Rocca (Dolcedo)</h3>
    <p>Kreative ligurische Küche mit internationalen Einflüssen. 📍 Via Ripalta 3, Dolcedo | ☎️ +39 0183 682648 | 🌐 <a href="https://ristorantecasadellarocca.it" target="_blank">ristorantecasadellarocca.it</a></p>

    <hr>

    <h3>Osteria Tunù (Da Tunu, Dolcedo)</h3>
    <p>Gemütlich, einfach & familiär, Aperitivi, gute ligurische Küche. 📍 Piazza Andrea Doria 2, Dolcedo | ☎️ +39 0183 961258</p>

    <hr>

    <h3>Al Santuario (Montegrazie)</h3>
    <p>Rustikales Agriturismo mit traditioneller Küche direkt beim der Wallfahrtskirche, fussläufig vom Haus erreichbar. 📍 Via del Santuario 1, Montegrazie | ☎️ +39 0183 69192</p>

    <hr>

    <h3>Osteria Osteria Vegni a vé (Villatalla)</h3>
    <p>Einfaches aber gutes Restaurant, typisch ligurisch mit Boccia Bahn und fantastischen Blick über die Berge aufs Meer. 📍Via Tavole, 9, Villatalla, ☎️ +39320 907 8527</p>

    <hr>

    <h3>Equilibrio (Dolcedo)</h3>
    <p>Michelin-Restaurant mit hoher Kochkunst – zeitgemäße Interpretationen lokaler Küche, oft mit saisonalen Zutaten aus eigenem Garten. 📍Località Martin 13, Dolcedo (IM) Telefon: +39 0183 684685</p>

    <h2>Eisdielen</h2>

    <h3>Gelateria Pinotto (Marina)</h3>
    <p>Die historische Eisdiele – eine Institution in Porto Maurizio, bekannt für hervorragendes Eis (glutenfreie Optionen mit glutenfreien Waffeln) 📍Via Scarincio, 98 – 18100 Imperia</p>

    <hr>

    <h3>Gelateria la Foce (Borgo Foce)</h3>
    <p>Vom Gambero Rosso ausgezeichnete Eisdiele (glutenfreie Optionen mit glutenfreien Waffeln) 📍Spianata Luigi Varese, 4, ☎️ 0183 684781</p>
  `,
  markets: `
    <h1>Märkte</h1>

    <h2>Wochenmarkt Oneglia</h2>
    <p>Der größte Wochenmarkt in Imperia.</p>
    <p><strong>Ort:</strong> Oneglia, rund um Piazza Doria und Basilika San Giovanni</p>
    <p><strong>Zeit:</strong> Mittwoch & Samstag vormittags</p>

    <h2>Wochenmarkt Porto Maurizio</h2>
    <p>Traditioneller Wochenmarkt im historischen Stadtteil Porto Maurizio.</p>
    <p><strong>Ort:</strong> Via Cascione, Porto Maurizio</p>
    <p><strong>Zeit:</strong> Donnerstag vormittags</p>

    <h2>Markthalle Porto Maurizio</h2>
    <p>Überdachte Markthalle mit regionalen Lebensmitteln und frischen Produkten.</p>
    <p><strong>Ort:</strong> Via Felice Cascione, Porto Maurizio</p>
  `,
glutenfree: `
<h1>🌾 Glutenfrei in Ligurien</h1>

<p>Italien gehört zu den besten Reiseländern für Menschen mit Zöliakie oder Glutenunverträglichkeit.</p>

<h2>🍕 Glutenfreie Pizza</h2>

<h3>Fermento (Oneglia Hafen)</h3>
<p>Pizzeria mit vielen Teigvarianten und unserer Meinung nach der besten glutenfreien Pizza in Imperia.</p>

<h3>Il Melograno (Oneglia Hafen)</h3>
<p>Pizzeria am Hafen mit vier verschiedenen Pizzateigen und glutenfreien Optionen.</p>

<h3>Kilo Pizza (Borgo Prino)</h3>
<p>Spezialisiert auf Pinsa Romana mit glutenfreien Optionen.</p>

<h3>Oasi La Pizza (Borgo Marina)</h3>
<p>Pizzeria seit 1984 mit großer Auswahl und glutenfreien Optionen.</p>

<h2>🍦 Eisdielen</h2>

<p><strong>Gelateria Pinotto</strong><br>
Glutenfreie Waffeln erhältlich.</p>

<p><strong>Gelateria La Foce</strong><br>
Glutenfreie Waffeln erhältlich.</p>

<h2>🥐 Glutenfreie Bäckerei</h2>

<p><strong>Il Fornaio di Alassio</strong><br>
<a href="https://www.ilfornaiodialassio.it/en-gb/gluten-free" target="_blank">
Website öffnen
</a></p>
`,
  beaches: `
    <h1>Strände & Baden</h1>

    <p>In Imperia gibt es ein großes Angebot an Stränden: Sandstrand mit Liegen, freie Strände und auch Hundestrände.</p>

    <h2>Bagni Buraxen</h2>
    <p>Traditionelles Strandbad direkt am Meer mit Restaurant. Ideal für entspannte Tage.</p>
    <p>Corso Giovanni Boine 2, Imperia<br>
    <a href="tel:+39018361722">+39 0183 61722</a></p>

    <h2>Il Moletto</h2>
    <p>Strand mit Bar und Restaurant. Frühstück, Grill-Essen und Panoramablick auf Porto Maurizio.</p>
    <p><a href="https://ilmoletto.it" target="_blank">Website öffnen</a></p>

    <h2>Borgo Foce Beach</h2>
    <p>Geschützter Strand in der Bucht von Borgo Foce. Ruhig und entspannend.</p>

    <h2>San Lorenzo al Mare</h2>
    <p>Familienfreundliche Strände und direkter Zugang zum Küstenradweg.</p>

    <h2>Balzi Rossi</h2>
    <p>Exklusives Strandbad nahe Ventimiglia / Grimaldi Inferiore.</p>
  `,

  hiking: `
    <h1>Wandern</h1>

    <p>Montegrazie ist ein idealer Ausgangspunkt für Wanderungen durch Olivenhaine, mittelalterliche Dörfer, alpine Landschaften und spektakuläre Aussichtspunkte mit Blick auf das Meer.</p>

    <h2>Rund um Montegrazie</h2>

    <a class="button" href="https://de.wikiloc.com/routen-wandern/montegrazie-santuario-di-s-anna-vasia-santuario-n-s-delle-grazie-montegrazie-59679759" target="_blank">Santuario di S. Anna Route öffnen</a>

    <a class="button" href="https://de.wikiloc.com/routen-berglauf/montegrazie-monte-faudo-montegrazie-47231301" target="_blank">Monte Faudo Route öffnen</a>

    <a class="button" href="https://de.wikiloc.com/routen-berglauf/montegrazie-vasia-m-te-acquarone-villatalla-ritorno-a-montegrazie-46887751" target="_blank">Monte Acquarone Route öffnen</a>

    <a class="button" href="https://de.wikiloc.com/routen-wandern/chiesetta-di-s-brigida-casone-dei-partigiani-monte-faudo-chiesetta-di-s-brigida-38746723" target="_blank">Santa Brigida Route öffnen</a>

    <h2>Ligurische Alpen</h2>

    <a class="button" href="https://de.wikiloc.com/routen-wandern/viozene-monte-mongioie-passo-delle-saline-carnino-rifugio-mongioie-viozene-50604829" target="_blank">Monte Mongioie Route öffnen</a>

    <a class="button" href="https://de.wikiloc.com/routen-off-road/alta-via-del-sale-ligurische-grenzkammstrasse-von-pigna-nach-limone-piemonte-86460082" target="_blank">Alta Via del Sale öffnen</a>

    <h2>Küste</h2>

    <a class="button" href="https://de.wikiloc.com/routen-wandern/colle-mea-da-cervo-colle-chiappa-rollo-capo-mimosa-porteghetto-a-cervo-giro-ad-anello-193281837" target="_blank">Cervo Küstenrunde öffnen</a>
  `,

  cycling: `
    <h1>Radfahren & Mountainbike</h1>

    <p>Ligurien entwickelt sich immer mehr zu einem Hotspot für Mountainbiker und Radfahrer. Montegrazie ist ein idealer Ausgangspunkt für Touren in ganz Ligurien.</p>

    <h2>Küstenradweg Imperia – Sanremo</h2>
    <p>Der Küstenradweg verläuft auf der ehemaligen Bahntrasse direkt am Meer. Er ist gut ausgebaut und führt durch Tunnel, vorbei an Küstenorten und mit schönen Ausblicken aufs Meer.</p>

    <h2>Dolcedo – Pantasina – Vasia – Passo Acquarone</h2>
    <p>Abwechslungsreiche Rundtour durch das Hinterland von Imperia.</p>

    <h2>Colle d'Oggia</h2>
    <p>Anspruchsvolle und landschaftlich wunderschöne Rennradtour.</p>

    <h2>Passo della Teglia</h2>
    <p>Sehr anspruchsvolle Tour für erfahrene Radfahrer.</p>

    <h2>San Bartolomeo – Cervo</h2>
    <a class="button" href="https://www.alltrails.com/explore/trail/italy/liguria--3/colle-di-cervo-colla-mea-chiappa" target="_blank">Route öffnen</a>
  `,

  kids: `
    <h1>Mit Kindern</h1>

    <h2>Eselreiten in Pietralata</h2>
    <p>Begegnungen mit Eseln in natürlicher Umgebung.</p>
    <p><a href="https://www.asd-asinidipietralata.com" target="_blank">Website öffnen</a></p>

    <h2>Villa Grock</h2>
    <p>Clownmuseum in Imperia mit wechselnden Programmen und kreativen Angeboten.</p>

    <h2>Wasserpark Le Caravelle</h2>
    <p>Wasserrutschen, Kinderbecken, Wellenbad und Spielbereiche.</p>
    <p><a href="https://www.lecaravelle.com" target="_blank">Website öffnen</a></p>

    <h2>Whale Watching Imperia</h2>
    <p>Bootsausflüge zur Beobachtung von Delfinen und Walen.</p>

    <h2>Ozeanografisches Museum Monaco</h2>
    <p><a href="https://musee.oceano.org" target="_blank">Website öffnen</a></p>

    <h2>Aquarium Genua</h2>
    <p><a href="https://www.acquariodigenova.it" target="_blank">Website öffnen</a></p>

    <h2>Tropfsteinhöhlen von Toirano</h2>
    <p><a href="https://www.toiranogrotte.it" target="_blank">Website öffnen</a></p>
  `,

  charging: `
    <h1>E-Ladestationen</h1>

    <p>Hier werden später die besten E-Ladestationen in Imperia, Porto Maurizio, Oneglia und San Lorenzo al Mare ergänzt.</p>

    <p>Bis dahin empfehlen wir, die aktuelle Verfügbarkeit direkt über die jeweilige Lade-App oder Google Maps zu prüfen.</p>
  `,

  numbers: `
    <h1>Wichtige Nummern</h1>

    <h2>Gastgeber</h2>

    <p><strong>Sandra Tuchscherer</strong><br>
    <a href="tel:+491605525955">+49 160 5525955</a></p>

    <p><strong>Simon Filler</strong><br>
    <a href="tel:+491728242777">+49 172 8242777</a></p>

    <p><strong>Anne Kruschwitz</strong><br>
    <a href="tel:+393297827215">+39 329 7827215</a></p>

    <h2>Notruf</h2>
    <p>Polizei: <a href="tel:112">112</a><br>
    Feuerwehr: <a href="tel:115">115</a><br>
    Notarzt: <a href="tel:118">118</a></p>

    <h2>Apotheke</h2>
    <p><strong>Farmacia Caramagna Di Barla Elvio</strong><br>
    Via Caramagna 41, 18100 Imperia<br>
    ca. 4 km</p>

    <h2>Krankenhaus</h2>
    <p><strong>Ospedale di Imperia</strong><br>
    18100 Imperia, Oneglia<br>
    <a href="tel:+3901835361">+39 0183 5361</a><br>
    Notaufnahme: Pronto Soccorso</p>

    <h2>Ärztin</h2>
    <p><strong>Dr. Gesa Papendieck</strong><br>
    Studio Imperia Med<br>
    Via Felice Cascione 30, Imperia<br>
    <a href="tel:+390183881958">+39 0183 881958</a><br>
    spricht Deutsch, Englisch und Italienisch</p>

    <h2>Tierarzt</h2>
    <p><strong>Dr. Gudrun Heller</strong><br>
    Pantasina<br>
    <a href="tel:+393336077660">+39 333 6077660</a><br>
    spricht Deutsch, Englisch und Italienisch</p>
  `,

  legal: `
    <h1>Rechtliches</h1>

    <h2>Vorzeitige Abreise</h2>
    <p>Bei einer vorzeitigen Abreise besteht grundsätzlich kein Anspruch auf Erstattung des Mietpreises.</p>

    <h2>Schäden & Störungen</h2>
    <p>Bitte melden Sie Schäden oder Störungen unverzüglich, spätestens innerhalb von 24 Stunden nach Ankunft.</p>

    <h2>Kaution</h2>
    <p>Das Haus ist hochwertig ausgestattet. Die Kaution dient der Absicherung gegen Schäden.</p>

    <h2>Abreise</h2>
    <p>Am Abreisetag wird das Mietobjekt vorgereinigt übergeben. Dazu gehören Kochzeile, Geschirr, Lebensmittel und Müll.</p>

    <h2>Sicherheit</h2>
    <p>Sämtliche Einrichtungen des Hauses werden auf eigene Gefahr genutzt. Kinder müssen beaufsichtigt werden.</p>

    <h2>Internet</h2>
    <p>Das WLAN wird kostenlos zur Verfügung gestellt. Für Ausfälle des Internetanbieters oder technische Störungen kann keine Haftung übernommen werden.</p>
  `
};

function page(id){
  return `
    ${header()}
    <div class="content">
      <button class="back" onclick="back()">← Zurück</button>
      ${pages[id] || ""}
    </div>
  `;
}

function calcTax(){
  const p = +document.getElementById("persons")?.value || 0;
  const n = Math.min(+document.getElementById("nights")?.value || 0, 10);
  const sum = p * n * 3;
  document.getElementById("taxResult").textContent =
    sum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
}

function render(id="home"){
  app.innerHTML = id === "home" ? home() : page(id);
  if(id === "tax") calcTax();
}

render();
