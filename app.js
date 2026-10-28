const DATA = [
// MOVIES
['Ford v Ferrari','movie',2019,'Motorsport','A determined American carmaker and two racing talents attempt to build a machine capable of beating Ferrari at Le Mans.','Le Mans · Ford GT40 · endurance racing','movies'],
['The Fast and the Furious','movie',2001,'Street Racing','An undercover officer enters the world of illegal street racing and discovers that loyalty runs deeper than the law.','Supra · RX-7 · street culture','movies'],
['2 Fast 2 Furious','movie',2003,'Street Racing','A former officer teams up with an old friend for a dangerous undercover operation full of tuned imports and high-speed runs.','Skyline · Evo · tuner culture','movies'],
['Tokyo Drift','movie',2006,'Street Racing','An outsider finds his place in Tokyo’s underground drift scene, where respect is earned one corner at a time.','AE86 · RX-7 · drifting','movies'],
['Fast & Furious','movie',2009,'Action','Old rivals reunite to take on a dangerous operation with fast cars and unfinished business.','Muscle cars · street action','movies'],
['Fast Five','movie',2011,'Heist','A crew plans an ambitious heist in Rio while being hunted by a relentless federal agent.','Charger · GT-R · heist','movies'],
['Fast & Furious 6','movie',2013,'Action','A team of drivers is recruited to stop a highly skilled mercenary crew across Europe.','Supercars · precision driving','movies'],
['Furious 7','movie',2015,'Action','The crew faces a new threat while trying to protect the family they have built.','Lykan HyperSport · action','movies'],
['The Fate of the Furious','movie',2017,'Action','A mysterious turn forces the crew to question everything they know about loyalty.','Exotics · action','movies'],
['F9','movie',2021,'Action','The crew confronts a hidden chapter of Dom’s past in a globe-spanning adventure.','Modified cars · stunts','movies'],
['Fast X','movie',2023,'Action','A revenge-driven enemy targets the crew and everything they love.','Supercars · action','movies'],
['Rush','movie',2013,'Motorsport','The fierce rivalry between James Hunt and Niki Lauda pushes two Formula One drivers to their limits.','Formula One · rivalry','movies'],
['Need for Speed','movie',2014,'Street Racing','A skilled street racer sets out on a cross-country run for redemption and revenge.','Mustang · supercars · road race','movies'],
['Baby Driver','movie',2017,'Getaway','A gifted getaway driver tries to leave a life of crime behind, with every escape choreographed to music.','Subaru · chase sequences','movies'],
['Gone in 60 Seconds','movie',2000,'Heist','A retired car thief must steal a list of cars in one night, including the legendary Eleanor Mustang.','Shelby Mustang · car theft','movies'],
['Drive','movie',2011,'Crime Thriller','A quiet Hollywood stunt driver becomes entangled in a dangerous criminal job.','Precision driving · noir','movies'],
['The Transporter','movie',2002,'Action','A professional driver with strict rules accepts a delivery that changes everything.','Audi · tactical driving','movies'],
['Gran Turismo','movie',2023,'Motorsport','A talented racing-game player gets a rare chance to turn virtual skill into a real racing career.','GT-R · Nissan · racing','movies'],
['Mad Max: Fury Road','movie',2015,'Vehicle Action','A high-octane escape across a brutal wasteland becomes an explosive chase for freedom.','Custom war rigs · practical stunts','movies'],
['Furiosa: A Mad Max Saga','movie',2024,'Vehicle Action','A young survivor fights her way through a dangerous wasteland and its powerful warlords.','Armored vehicles · desert action','movies'],
['Ronin','movie',1998,'Car Chase','A team of former operatives takes on a job that spirals into a tense game of betrayal and pursuit.','Classic European chase scenes','movies'],
['Bullitt','movie',1968,'Classic Chase','A San Francisco detective protects a witness in a landmark crime thriller featuring an iconic car chase.','Mustang GT · San Francisco','movies'],
['The Italian Job','movie',2003,'Heist','A crew of thieves plots a carefully timed gold heist using nimble Mini Coopers.','Mini Cooper · getaway driving','movies'],
['Death Proof','movie',2007,'Thriller','A stuntman uses his reinforced car to terrorize unsuspecting drivers in a grindhouse thriller.','Stunt car · exploitation cinema','movies'],
['Duel','movie',1971,'Road Thriller','A travelling salesman is terrorized by a mysterious truck on an isolated highway.','Truck chase · suspense','movies'],
['Days of Thunder','movie',1990,'Motorsport','A hotshot driver learns the discipline and teamwork needed to compete in stock-car racing.','NASCAR · racing drama','movies'],
['Le Mans','movie',1971,'Motorsport','A driver returns to the world’s most demanding endurance race in a film built around the spectacle of the event.','Porsche 917 · endurance','movies'],
['Grand Prix','movie',1966,'Motorsport','Four Formula One drivers navigate rivalries, danger and ambition across the racing season.','Classic F1 · vintage racing','movies'],
['Ferrari','movie',2023,'Biography','Enzo Ferrari faces professional and personal crises during a pivotal period for his company.','Ferrari · Mille Miglia','movies'],
['Race for Glory: Audi vs. Lancia','movie',2024,'Rally','Audi and Lancia battle for supremacy in the high-stakes world of 1983 rally racing.','Group B · rally','movies'],
['Senna','movie',2010,'Documentary','An intimate documentary portrait of Formula One champion Ayrton Senna and his extraordinary career.','Formula One · true story','movies'],
['The 24 Hour War','movie',2016,'Documentary','The story behind Ford and Ferrari’s fierce rivalry at Le Mans during the 1960s.','Ford GT40 · Le Mans','movies'],
['Schumacher','movie',2021,'Documentary','A documentary exploring Michael Schumacher’s life, career and lasting impact on Formula One.','F1 · champion profile','movies'],
['Cars','movie',2006,'Animation','A racing car learns that life is about more than trophies when he gets stranded in a small town.','Pixar · racing · family','movies'],
['Cars 2','movie',2011,'Animation','Lightning McQueen enters a world racing championship while Mater gets caught up in international espionage.','World racing · comedy','movies'],
['Cars 3','movie',2017,'Animation','An established champion adapts to a new generation of faster racers and rediscovers his purpose.','Training · racing legacy','movies'],
['Taxi','movie',1998,'Comedy Action','A speedy taxi driver helps a police officer chase a crew of bank robbers through Marseille.','Peugeot · French chase comedy','movies'],
['Taarzan: The Wonder Car','movie',2004,'Indian Action','A young man discovers a mysterious connection to a car built by his late father.','Indian car fantasy','movies'],
['Dhoom','movie',2004,'Indian Action','A cop teams up with a skilled biker to catch a gang of high-speed thieves.','Pursuits · superbikes','movies'],
['Dhoom 2','movie',2006,'Indian Action','A master thief and a determined officer face off in a stylish international chase.','Heists · exotic vehicles','movies'],
['Dhoom 3','movie',2013,'Indian Action','A performer with a hidden agenda takes on a bank and a pair of determined investigators.','Stunts · action','movies'],
['Overdrive','movie',2017,'Heist','Two car-thief brothers are forced into a dangerous job involving a powerful crime boss.','Classic cars · heist','movies'],
['Børning','movie',2014,'Racing Comedy','An illegal street race across Norway turns into an outrageous road adventure.','Norwegian roads · racing','movies'],
['The Wraith','movie',1986,'Cult Action','A mysterious driver arrives in a desert town to challenge a violent gang of street racers.','Turbo Interceptor · cult classic','movies'],
['Vanishing Point','movie',1971,'Road Movie','A delivery driver attempts a cross-country run that becomes a rebellious race against time.','Dodge Challenger · road culture','movies'],
// SERIES
['Top Gear','series',2002,'Motoring','The long-running motoring show mixes car reviews, challenges, road trips and automotive comedy.','Reviews · challenges · specials','series'],
['The Grand Tour','series',2016,'Motoring','Three presenters take extraordinary cars on ambitious journeys and challenges around the world.','Road trips · supercars','series'],
['Fifth Gear','series',2002,'Motoring','A motoring show focused on road tests, reviews and practical automotive advice.','Reviews · testing','series'],
['Wheeler Dealers','series',2003,'Restoration','A mechanic and a car trader buy, repair and sell cars while showing the restoration process.','Repairs · restoration','series'],
["Car SOS",'series',2013,'Restoration','A restoration team secretly rebuilds cherished cars for deserving owners.','Classic cars · restoration','series'],
["Fast N' Loud",'series',2012,'Restoration','A garage searches for forgotten vehicles and turns them into saleable custom builds.','Custom cars · garage','series'],
['Car Masters: Rust to Riches','series',2018,'Restoration','A creative team transforms unusual finds into ambitious custom vehicles.','Builds · fabrication','series'],
['Formula 1: Drive to Survive','series',2019,'Motorsport','Behind-the-scenes access reveals the rivalries, pressure and personalities of Formula One.','F1 · teams · drivers','series'],
['NASCAR: Full Speed','series',2024,'Motorsport','Drivers and teams navigate the pressure of NASCAR’s championship playoffs.','NASCAR · competition','series'],
['Hyperdrive','series',2019,'Competition','Drivers from around the world test their skills on an extreme automotive obstacle course.','Precision driving · competition','series'],
['Street Outlaws','series',2013,'Drag Racing','Street-racing personalities compete in high-powered drag races and rivalries.','Drag racing · builds','series'],
['Jay Leno’s Garage','series',2015,'Car Culture','Jay Leno explores rare, historic, unusual and high-performance vehicles.','Collections · engineering','series'],
['Brawn: The Impossible Formula 1 Story','series',2023,'Motorsport','The remarkable story of the Brawn GP team’s unlikely 2009 championship.','F1 · underdogs','series'],
['Richard Hammond’s Workshop','series',2021,'Restoration','A motoring enthusiast takes on the challenges of running a classic-car restoration business.','Restoration · business','series'],
// ANIME
['Initial D First Stage','anime',1998,'Touge Racing','Takumi Fujiwara’s delivery runs build his instincts for mountain-pass racing in an AE86 Trueno.','Toyota AE86 · touge · Eurobeat','anime'],
['Initial D Second Stage','anime',1999,'Touge Racing','Takumi faces tougher rivals as the mountain-racing scene around him grows more competitive.','AE86 · rivalry','anime'],
['Initial D Third Stage','anime',2001,'Anime Film','A feature-length chapter brings new decisions and challenges to Takumi’s racing journey.','AE86 · coming of age','anime'],
['Initial D Fourth Stage','anime',2004,'Touge Racing','Project D takes on new opponents on mountain roads across the region.','Project D · downhill racing','anime'],
['Initial D Fifth Stage','anime',2012,'Touge Racing','Project D approaches its biggest challenges as the stakes and rivalries intensify.','Project D · touge','anime'],
['Initial D Final Stage','anime',2014,'Anime Series','Takumi faces a defining showdown that tests the limits of his instincts and the AE86.','AE86 · final battle','anime'],
['New Initial D the Movie: Legend 1','anime',2014,'Anime Film','The opening film retells Takumi’s first encounters with the world of mountain-pass racing.','AE86 · retelling','anime'],
['Wangan Midnight','anime',2007,'Expressway Racing','A young driver becomes obsessed with a legendary modified Fairlady Z known as the Devil Z.','Nissan Fairlady Z · highway racing','anime'],
['MF Ghost','anime',2023,'Modern Racing','In a near-future world dominated by autonomous cars, a young driver competes in a series of high-speed races.','GT86 · Porsche · modern racing','anime'],
['Redline','anime',2009,'Sci-Fi Racing','Fearless drivers enter a wild intergalactic race where anything can happen.','Stylized racing · sci-fi','anime'],
['Capeta','anime',2005,'Motorsport','A resourceful boy discovers kart racing and works toward a professional motorsport career.','Karting · ambition','anime'],
['Future GPX Cyber Formula','anime',1991,'Futuristic Racing','Drivers compete in advanced racing machines in a high-tech motorsport future.','Futuristic race cars','anime'],
['Appare-Ranman!','anime',2020,'Adventure Racing','An inventive engineer and a samurai enter a transcontinental race across America.','Racing · adventure','anime'],
['Speed Racer','anime',1967,'Classic Racing Anime','Young driver Speed Racer takes on dangerous races with the remarkable Mach 5.','Mach 5 · classic anime','anime'],
['eX-Driver','anime',2000,'Sci-Fi Action','In a future dominated by automated vehicles, expert drivers handle the cars that go wrong.','Driving skill · future cars','anime'],
['Yoroshiku Mechadoc','anime',1984,'Tuning Anime','A garage team modifies cars and takes on challenges in Japan’s enthusiast scene.','Japanese tuning culture','anime'],
// YOUTUBE
['Donut','youtube',2015,'Car Culture','A channel for approachable automotive explainers, experiments, builds and entertaining car culture.','Car science · modifications','youtube'],
['Top Gear YouTube','youtube',2007,'Motoring','Clips, reviews and challenges from the iconic British motoring brand.','Reviews · car challenges','youtube'],
['carwow','youtube',2010,'Reviews & Drag Races','Head-to-head drag races, reviews and comparisons between cars from everyday models to supercars.','Drag races · comparisons','youtube'],
['Throttle House','youtube',2017,'Reviews','Detailed and entertaining performance-car reviews and comparisons.','Sports cars · reviews','youtube'],
['Mighty Car Mods','youtube',2007,'DIY & Builds','A long-running channel documenting modifications, project cars and garage adventures.','DIY · tuning · builds','youtube'],
['Hoonigan','youtube',2010,'Motorsport Culture','Drifting, gymkhana, modified builds and energetic car culture.','Drifting · stunts','youtube'],
['TheStraightPipes','youtube',2012,'Reviews','Driving impressions and reviews covering practical cars and performance machines.','Reviews · comparisons','youtube'],
['Doug DeMuro','youtube',2013,'Car Reviews','Detailed reviews of unusual, luxury and exotic cars, with a focus on their quirks and features.','Exotics · features','youtube'],
['Shmee150','youtube',2010,'Supercars','Supercar collections, events, launches and ownership experiences.','Supercars · events','youtube'],
['Engineering Explained','youtube',2011,'Engineering','Clear explanations of engines, transmissions, vehicle dynamics and automotive technology.','Technical knowledge','youtube'],
['VINwiki','youtube',2016,'Car Stories','Enthusiasts share remarkable stories from the world of cars and automotive history.','Stories · history','youtube'],
['Petrolicious','youtube',2012,'Classic Cars','Cinematic short films celebrating classic cars and the people who love them.','Classic cars · film','youtube'],
['Gears and Gasoline','youtube',2015,'Builds & Adventures','Project cars, road trips and motorsport adventures.','Builds · road trips','youtube'],
['Noriyaro','youtube',2009,'Japanese Car Culture','A look into Japan’s drifting scene, grassroots motorsport and enthusiast cars.','Japan · drift culture','youtube'],
['PowerDrift','youtube',2013,'Indian Automotive','Indian automotive media covering cars, bikes, reviews and performance culture.','India · reviews','youtube'],
['Autocar India','youtube',2008,'Indian Automotive','Indian car reviews, road tests, comparisons and launches.','India · car reviews','youtube'],
['MotorOctane','youtube',2015,'Indian Automotive','Car reviews, comparisons, ownership topics and new-model coverage in India.','India · buying guides','youtube'],
['CarDekho','youtube',2008,'Indian Automotive','Reviews, comparisons, features and car-buying information for the Indian market.','India · buying advice','youtube'],
['AutoTopNL','youtube',2012,'Performance Videos','Performance tests, acceleration runs and exhaust sounds from a wide range of cars.','Performance · exhaust','youtube'],
// GAMES
['Forza Horizon 5','game',2021,'Open World Racing','Explore an expansive open world, collect cars and take part in road races and festival events.','Open world · car collection','games'],
['Forza Horizon 4','game',2018,'Open World Racing','A changing-season open world packed with road races, stunts and hundreds of cars.','Open world · seasons','games'],
['The Crew Motorfest','game',2023,'Open World Racing','A car-culture festival with themed events, collection challenges and open-world driving.','Car culture · open world','games'],
['Need for Speed Heat','game',2019,'Street Racing','Race by day and risk it all at night in a street-racing world.','Night racing · tuning','games'],
['Need for Speed Unbound','game',2022,'Street Racing','Build a custom ride, race through the city and develop your own street-racing style.','Street racing · customization','games'],
['Gran Turismo 7','game',2022,'Simulation Racing','A detailed driving simulator focused on collecting cars, tuning and competitive racing.','Simulation · motorsport','games'],
['Assetto Corsa','game',2014,'Simulation Racing','A flexible racing simulator known for realistic driving physics and a wide modding community.','Simulation · mods','games'],
['F1 25','game',2025,'Formula Racing','Official Formula One game action with race weekends, teams and career modes.','F1 · simulation','games'],
['Need for Speed Underground 2','game',2004,'Tuner Culture','Customize tuner cars and explore a city in a classic street-racing game.','JDM · tuning nostalgia','games'],
['Need for Speed Most Wanted','game',2005,'Street Racing','Climb a blacklist of racers while escaping persistent police pursuits.','Pursuits · tuner cars','games'],
['CarX Drift Racing Online','game',2017,'Drifting','A drifting-focused driving game with car customization and online sessions.','Drifting · tuning','games']
];
const CATEGORIES=[['all','All garage'],['movies','Movies'],['series','Series'],['anime','Anime'],['youtube','YouTube'],['games','Games'],['completed','Completed']];
const palette=[['#0d2330','#e84b3c'],['#121b32','#e5a34b'],['#102c2c','#e84b3c'],['#2a1725','#d85e75'],['#151d2b','#6d9fce'],['#252016','#c9a15a'],['#0c253a','#f04438'],['#251b18','#a8b4c0']];
const posterImages={'Initial D First Stage':'assets/ae86-tokyo.jpg','Tokyo Drift':'assets/ae86-tokyo.jpg','MF Ghost':'assets/ae86-tokyo.jpg','Wangan Midnight':'assets/ae86-tokyo.jpg','Initial D Fourth Stage':'assets/ae86-tokyo.jpg','Initial D Fifth Stage':'assets/ae86-tokyo.jpg','Initial D Final Stage':'assets/ae86-tokyo.jpg','Ford v Ferrari':'assets/mountain-drift.jpg','Need for Speed':'assets/mountain-drift.jpg'};
const categoryNames={movies:'MOVIE',series:'SERIES',anime:'ANIME',youtube:'CHANNEL',games:'GAME'};
const storeKey='driftlist.completed.v1';let completed=new Set(JSON.parse(localStorage.getItem(storeKey)||'[]'));let activeCategory='all',activeFilter='all',query='',sort='featured',deferredPrompt=null;
const $=s=>document.querySelector(s);const app=$('#app'),detailView=$('#detailView');
function save(){localStorage.setItem(storeKey,JSON.stringify([...completed]));updateStats()}
function updateStats(){const done=DATA.filter(x=>completed.has(x[0])).length;$('#statTotal').textContent=DATA.length;$('#statDone').textContent=done;$('#statPercent').textContent=Math.round(done/DATA.length*100)+'%'}
function makePoster(item,index){const title=item[0],cat=item[6],year=item[2],img=posterImages[title];const colors=palette[index%palette.length];let art=img?`url('${img}')`:`linear-gradient(145deg,${colors[0]},${colors[1]}55 48%,#080d12),repeating-linear-gradient(125deg,transparent 0 18px,#ffffff08 19px 20px)`;return `<div class="poster"><div class="poster-art" style="background-image:${art}"></div><span class="poster-kicker">${categoryNames[cat]||cat.toUpperCase()}</span><span class="poster-year">${year||'—'}</span><div class="poster-title">${escapeHtml(title)}</div>${completed.has(title)?'<span class="done-mark">✓</span>':''}</div>`}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function drawCategories(){const nav=$('#categoryNav');nav.innerHTML=CATEGORIES.map(([id,label])=>`<button class="cat-btn ${activeCategory===id?'active':''}" data-cat="${id}">${label}${id==='completed'?` (${completed.size})`:''}</button>`).join('');nav.querySelectorAll('button').forEach(b=>b.onclick=()=>{activeCategory=b.dataset.cat;drawCategories();renderCards();if(activeCategory==='completed'){activeFilter='done';document.querySelectorAll('.filter-chip').forEach(c=>c.classList.toggle('active',c.dataset.filter===activeFilter))}})}
function getItems(){let items=DATA.map((x,i)=>({...x,index:i}));if(activeCategory==='completed')items=items.filter(x=>completed.has(x[0]));else if(activeCategory!=='all')items=items.filter(x=>x[6]===activeCategory);if(activeFilter==='done')items=items.filter(x=>completed.has(x[0]));if(activeFilter==='todo')items=items.filter(x=>!completed.has(x[0]));if(query)items=items.filter(x=>x.slice(0,6).join(' ').toLowerCase().includes(query.toLowerCase()));if(sort==='az')items.sort((a,b)=>a[0].localeCompare(b[0]));if(sort==='year')items.sort((a,b)=>(b[2]||0)-(a[2]||0));return items}
function renderCards(){const items=getItems();$('#resultCount').textContent=`${items.length} TITLES · ${activeCategory==='all'?'ALL CATEGORIES':activeCategory.toUpperCase()}`;$('#cardGrid').innerHTML=items.map(x=>`<article class="media-card" data-title="${escapeHtml(x[0])}">${makePoster(x,x.index)}<div class="card-info"><div class="card-type">${escapeHtml(x[3])}</div><h3 class="card-title" title="${escapeHtml(x[0])}">${escapeHtml(x[0])}</h3><div class="card-meta"><span>${x[2]||'ONGOING'}</span><span>${completed.has(x[0])?'✓ DONE':'DETAILS ↗'}</span></div></div><div class="card-actions"><button class="mini-btn ${completed.has(x[0])?'is-done':''}" data-toggle="${escapeHtml(x[0])}">${completed.has(x[0])?'✓ Completed':'+ Mark done'}</button></div></article>`).join('');$('#emptyState').classList.toggle('hidden',items.length>0);$('#cardGrid').querySelectorAll('.media-card').forEach(c=>c.addEventListener('click',e=>{if(e.target.closest('[data-toggle]'))return;openDetail(c.dataset.title)}));$('#cardGrid').querySelectorAll('[data-toggle]').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();toggleDone(b.dataset.toggle)}));updateStats();revealCards()}
function toggleDone(title){if(completed.has(title)){completed.delete(title);toast('Removed from completed')}else{completed.add(title);toast('Marked as completed ✓')}save();drawCategories();renderCards();if(!detailView.classList.contains('hidden'))openDetail(title)}
function openDetail(title){const x=DATA.find(v=>v[0]===title);if(!x)return;const index=DATA.indexOf(x),cat=x[6],img=posterImages[title]||'assets/mountain-drift.jpg';const search=encodeURIComponent(title+' '+(cat==='youtube'?'YouTube channel':cat==='games'?'game':cat==='anime'?'anime':cat==='series'?'series':'movie')+' official');const links=cat==='youtube'?[['YouTube search',`https://www.youtube.com/results?search_query=${search}`]]:cat==='games'?[['Steam search',`https://store.steampowered.com/search/?term=${encodeURIComponent(title)}`],['Official / store search',`https://www.google.com/search?q=${search}+official+game`]]:[['JustWatch',`https://www.justwatch.com/in/search?q=${encodeURIComponent(title)}`],['Prime Video search',`https://www.primevideo.com/search/ref=atv_nb_sr?phrase=${encodeURIComponent(title)}`],['Netflix search',`https://www.netflix.com/search?q=${encodeURIComponent(title)}`],['YouTube trailers',`https://www.youtube.com/results?search_query=${encodeURIComponent(title+' official trailer')}`]];$('#detailContent').innerHTML=`<div class="detail-hero"><div class="detail-poster" style="background-image:linear-gradient(0deg,#080d12a8,transparent 55%),url('${img}')"></div><div class="detail-copy"><p class="eyebrow"><span class="redline"></span>${categoryNames[cat]||cat.toUpperCase()} · ${x[2]||'ONGOING'}</p><h1>${escapeHtml(x[0])}</h1><div class="detail-tags"><span class="tag">${escapeHtml(x[3])}</span><span class="tag">${x[2]||'ONGOING'}</span><span class="tag">${completed.has(x[0])?'✓ COMPLETED':'IN YOUR WATCHLIST'}</span></div><p class="detail-desc">${escapeHtml(x[4])}</p><p class="detail-desc"><b>Why it belongs in the garage:</b> ${escapeHtml(x[5])}.</p><div class="detail-actions"><button class="primary-btn" id="detailToggle">${completed.has(x[0])?'✓ Mark as not completed':'✓ Mark as completed'}</button><button class="ghost-btn" id="shareTitle">Share title ↗</button></div><div class="platforms"><h3>${cat==='youtube'?'Watch this channel':cat==='games'?'Find the game':'Where to watch'}</h3><p>Availability varies by country and can change. These links open live search results so you can check current streaming, rental or purchase options before watching.</p><div class="platform-links">${links.map(([label,url])=>`<a class="platform-link" href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`).join('')}</div></div></div></div>`;app.classList.add('hidden');detailView.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'});$('#detailToggle').onclick=()=>toggleDone(x[0]);$('#shareTitle').onclick=async()=>{const text=`${x[0]} (${x[2]}) — saved in my DRIFT//LIST garage`;try{if(navigator.share)await navigator.share({title:x[0],text});else{await navigator.clipboard.writeText(text);toast('Title copied to clipboard')}}catch(e){}};location.hash='title/'+encodeURIComponent(x[0])}
function closeDetail(){detailView.classList.add('hidden');app.classList.remove('hidden');location.hash='home';window.scrollTo({top:0,behavior:'smooth'})}
let toastTimer;function toast(message){const t=$('#toast');t.textContent=message;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2100)}
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>{activeCategory=b.dataset.go==='completed'?'completed':b.dataset.go;activeFilter=b.dataset.go==='completed'?'done':'all';drawCategories();document.querySelectorAll('.filter-chip').forEach(c=>c.classList.toggle('active',c.dataset.filter===activeFilter));renderCards();$('#categoryNav').scrollIntoView({behavior:'smooth',block:'start'})}));
$('#backBtn').onclick=closeDetail;$('#searchInput').addEventListener('input',e=>{query=e.target.value;renderCards()});document.querySelectorAll('.filter-chip').forEach(b=>b.addEventListener('click',()=>{activeFilter=b.dataset.filter;document.querySelectorAll('.filter-chip').forEach(c=>c.classList.toggle('active',c===b));renderCards()}));$('#sortSelect').addEventListener('change',e=>{sort=e.target.value;renderCards()});
window.addEventListener('hashchange',()=>{const m=decodeURIComponent(location.hash.slice(1));if(m.startsWith('title/'))openDetail(m.slice(6));else if(!detailView.classList.contains('hidden')){detailView.classList.add('hidden');app.classList.remove('hidden')}});
if(location.hash.startsWith('#title/'))openDetail(decodeURIComponent(location.hash.slice(7)));
if('serviceWorker' in navigator && (location.protocol==='https:'||location.hostname==='localhost'))window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').then(()=>$('#onlineStatus').textContent='OFFLINE MODE ENABLED').catch(()=>{}));
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#installBtn').classList.remove('hidden')});$('#installBtn').addEventListener('click',async()=>{if(!deferredPrompt){toast('Use Chrome menu → Install app / Add to Home screen');return}deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#installBtn').classList.add('hidden')});
drawCategories();renderCards();


// Motion & interaction polish: scroll reveal, subtle parallax and progress indicator.
function revealCards(){
  const cards=document.querySelectorAll('.media-card:not(.in-view)');
  if(!('IntersectionObserver' in window)){cards.forEach(c=>c.classList.add('in-view'));return}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){const card=entry.target;const index=[...card.parentElement.children].indexOf(card);card.style.transitionDelay=Math.min(index%10,9)*45+'ms';card.classList.add('in-view');observer.unobserve(card)}}),{threshold:.08,rootMargin:'0px 0px 45px 0px'});
  cards.forEach(card=>observer.observe(card));
}
const progressBar=document.getElementById('scrollProgress');
const topbar=document.querySelector('.topbar');
function updateScrollEffects(){const max=document.documentElement.scrollHeight-window.innerHeight;progressBar.style.width=(max>0?window.scrollY/max*100:0)+'%';topbar.classList.toggle('scrolled',window.scrollY>12)}
window.addEventListener('scroll',updateScrollEffects,{passive:true});updateScrollEffects();
const glow=document.getElementById('ambientGlow');
if(glow&&window.matchMedia('(hover:hover) and (pointer:fine)').matches){window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'},{passive:true})}
const hero=document.getElementById('hero');
if(hero&&window.matchMedia('(hover:hover) and (pointer:fine) and (prefers-reduced-motion: no-preference)').matches){hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;hero.style.backgroundPosition=`calc(50% + ${x*-14}px) calc(53% + ${y*-9}px)`});hero.addEventListener('pointerleave',()=>hero.style.backgroundPosition='50% 53%')}
