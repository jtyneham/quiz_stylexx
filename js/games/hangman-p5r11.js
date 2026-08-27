import { GAME_DATABASE, RANDOM_POOL } from "../../data/hangman-words.js";

let appAPI;

const templateHTML = `<div class="hangman-root">
<div class="app">
  <main class="game-card" id="gameCard">
    <div class="status-row">
      <div class="status-actions"><button class="home-button" id="homeButton" type="button" aria-label="Back to Home" title="Home">Home</button><button class="fullscreen-btn" id="fullscreenBtn" type="button" aria-label="Toggle fullscreen" title="Fullscreen">⛶</button></div>
<button class="topics-btn" id="topicsBtn" type="button">Topics <span id="topicsCount">All</span></button>
      <div class="skull-counter" id="triesText" aria-label="0 of 6 misses"><span class="miss-skull" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 3C8.8 3 4 8 4 14.2c0 4.1 2.1 7.2 5.6 8.8v4h3v2h2v-3h3v3h2v-2h3v-4c3.4-1.6 5.4-4.7 5.4-8.8C28 8 23.2 3 16 3Zm-5 14.5c-2 0-3.4-1.4-3.4-3.2S9 11.2 11 11.2s3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2Zm10 0c-2 0-3.4-1.4-3.4-3.2s1.4-3.1 3.4-3.1 3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2ZM13 21h6l-3 3-3-3Z"/></svg></span><span class="miss-skull" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 3C8.8 3 4 8 4 14.2c0 4.1 2.1 7.2 5.6 8.8v4h3v2h2v-3h3v3h2v-2h3v-4c3.4-1.6 5.4-4.7 5.4-8.8C28 8 23.2 3 16 3Zm-5 14.5c-2 0-3.4-1.4-3.4-3.2S9 11.2 11 11.2s3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2Zm10 0c-2 0-3.4-1.4-3.4-3.2s1.4-3.1 3.4-3.1 3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2ZM13 21h6l-3 3-3-3Z"/></svg></span><span class="miss-skull" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 3C8.8 3 4 8 4 14.2c0 4.1 2.1 7.2 5.6 8.8v4h3v2h2v-3h3v3h2v-2h3v-4c3.4-1.6 5.4-4.7 5.4-8.8C28 8 23.2 3 16 3Zm-5 14.5c-2 0-3.4-1.4-3.4-3.2S9 11.2 11 11.2s3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2Zm10 0c-2 0-3.4-1.4-3.4-3.2s1.4-3.1 3.4-3.1 3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2ZM13 21h6l-3 3-3-3Z"/></svg></span><span class="miss-skull" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 3C8.8 3 4 8 4 14.2c0 4.1 2.1 7.2 5.6 8.8v4h3v2h2v-3h3v3h2v-2h3v-4c3.4-1.6 5.4-4.7 5.4-8.8C28 8 23.2 3 16 3Zm-5 14.5c-2 0-3.4-1.4-3.4-3.2S9 11.2 11 11.2s3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2Zm10 0c-2 0-3.4-1.4-3.4-3.2s1.4-3.1 3.4-3.1 3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2ZM13 21h6l-3 3-3-3Z"/></svg></span><span class="miss-skull" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 3C8.8 3 4 8 4 14.2c0 4.1 2.1 7.2 5.6 8.8v4h3v2h2v-3h3v3h2v-2h3v-4c3.4-1.6 5.4-4.7 5.4-8.8C28 8 23.2 3 16 3Zm-5 14.5c-2 0-3.4-1.4-3.4-3.2S9 11.2 11 11.2s3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2Zm10 0c-2 0-3.4-1.4-3.4-3.2s1.4-3.1 3.4-3.1 3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2ZM13 21h6l-3 3-3-3Z"/></svg></span><span class="miss-skull" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 3C8.8 3 4 8 4 14.2c0 4.1 2.1 7.2 5.6 8.8v4h3v2h2v-3h3v3h2v-2h3v-4c3.4-1.6 5.4-4.7 5.4-8.8C28 8 23.2 3 16 3Zm-5 14.5c-2 0-3.4-1.4-3.4-3.2S9 11.2 11 11.2s3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2Zm10 0c-2 0-3.4-1.4-3.4-3.2s1.4-3.1 3.4-3.1 3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2ZM13 21h6l-3 3-3-3Z"/></svg></span></div>
    </div>

    <div class="hangman-wrap">
      <svg class="hangman persona-hangman" viewBox="0 0 360 300" preserveAspectRatio="xMidYMid meet" aria-label="Persona-style hangman drawing">
  <!-- scaffold: thick irregular black core, white edge, red cuts -->
  <g class="p5-scaffold">
    <path class="scaffold-outline" d="M38 286 L56 252 L63 62 L47 50 L60 29 L286 22 L301 36 L285 54 L106 58 L104 244 L128 264 L118 287 L70 291 Z"/>
    <path class="scaffold-core" d="M48 282 L66 247 L72 60 L58 51 L67 38 L282 31 L290 37 L279 46 L95 49 L94 250 L118 269 L111 280 L72 284 Z"/>
    <path class="scaffold-red red-a" d="M69 88 L95 58 L125 57 L92 100 Z"/>
    <path class="scaffold-red red-b" d="M66 181 L96 145 L95 198 L74 238 Z"/>
    <path class="scaffold-red red-c" d="M48 281 L72 260 L112 273 L97 286 Z"/>
    <path class="scaffold-outline foot-outline" d="M28 291 L49 270 L66 278 L82 264 L102 281 L125 267 L151 294 Z"/>
    <path class="scaffold-core foot-core" d="M38 290 L53 279 L68 285 L83 273 L101 287 L119 276 L138 294 Z"/>
    <path class="scaffold-red foot-red" d="M53 286 L73 275 L90 291 Z"/>
    <path class="scaffold-white-slash" d="M63 235 L72 219 L72 249 Z"/>
    <path class="scaffold-white-slash" d="M87 82 L96 68 L97 95 Z"/>
  </g>

  <!-- rope/noose -->
  <g class="p5-rope-group">
    <path class="rope-shadow" d="M262 49 L262 92 C262 102 258 108 258 118"/>
    <path class="rope" d="M258 49 L258 92 C258 102 254 108 254 118"/>
    <path class="rope-knot" d="M248 89 L266 89 L267 98 L247 98 Z"/>
  </g>

  <!-- 1: Joker head / hair / mask -->
  <g class="stage joker-stage" id="s1">
    <path class="joker-hair" d="M253 118 L242 107 L247 95 L256 103 L263 87 L269 104 L281 96 L277 114 L286 120 L278 128 L280 142 L269 152 L253 149 L241 139 L242 124 Z"/>
    <path class="joker-face" d="M244 124 Q258 114 274 124 L271 140 Q258 151 247 140 Z"/>
    <path class="joker-mask" d="M245 126 Q251 119 258 125 Q265 119 273 126 L269 136 Q263 132 258 136 Q252 132 248 136 Z"/>
    <path class="joker-eye" d="M250 128 L255 131"/>
    <path class="joker-eye" d="M263 131 L269 128"/>
    <path class="joker-noose-front" d="M244 142 C246 154 250 160 258 161 C266 160 270 154 272 142"/>
  </g>

  <!-- 2: torso / long coat -->
  <g class="stage joker-stage" id="s2">
    <path class="joker-coat" d="M249 151 L267 151 L275 169 L271 221 L260 236 L246 222 L242 169 Z"/>
    <path class="joker-lapel" d="M246 157 L258 172 L270 157"/>
    <path class="joker-shirt" d="M258 169 L260 216"/>
    <path class="joker-tail-center" d="M249 214 L258 247 L268 214"/>
  </g>

  <!-- 3: left arm / red glove -->
  <g class="stage joker-stage" id="s3">
    <path class="joker-limb" d="M245 164 Q227 177 216 201"/>
    <path class="joker-glove" d="M208 198 L217 196 L222 207 L214 214 L205 209 Z"/>
  </g>

  <!-- 4: right arm / red glove -->
  <g class="stage joker-stage" id="s4">
    <path class="joker-limb" d="M270 164 Q288 177 299 201"/>
    <path class="joker-glove" d="M293 198 L302 196 L308 207 L300 214 L291 209 Z"/>
  </g>

  <!-- 5: left leg / coat tail -->
  <g class="stage joker-stage" id="s5">
    <path class="joker-leg" d="M253 230 Q246 248 238 271"/>
    <path class="joker-boot" d="M231 273 L240 266 L246 274 L237 283 L229 280 Z"/>
    <path class="joker-tail" d="M249 208 L232 248 L251 238"/>
  </g>

  <!-- 6: right leg / coat tail -->
  <g class="stage joker-stage" id="s6">
    <path class="joker-leg" d="M264 230 Q271 248 279 271"/>
    <path class="joker-boot" d="M275 274 L282 266 L291 273 L289 281 L281 284 Z"/>
    <path class="joker-tail" d="M268 208 L285 248 L266 238"/>
  </g>
</svg>
    </div>

    <section class="word-zone" id="wordZone" title="Tap here to type a letter">
      <div class="slots" id="slots"></div>
    </section>

    <div class="feedback-zone">
      <div class="misses">
        <div class="misses-label">Misses</div>
        <div class="misses-list" id="missesList">—</div>
      </div>
      <div class="message" id="message"></div>
    </div>

    <div class="solve-panel">
      <div class="solve-ui" id="solveUi">
        <div class="solve-display" id="solveDisplay" role="textbox" aria-label="Full answer">
          <span class="solve-entry">
            <span class="solve-text" id="solveText"></span><span class="solve-caret" aria-hidden="true"></span>
          </span>
        </div>
        <button class="solve-cancel-btn" id="solveCancelBtn" type="button">Cancel</button>
      </div>
    </div>

    <div>
      <div class="controls">
        <button class="btn btn-secondary" id="solveBtn">Solve Word</button>
        <button class="btn btn-primary" id="newWordBtn">New Word</button>
      </div>
      
    </div>

    <div class="custom-keyboard" id="customKeyboard">
      <div class="kb-row">
        <button class="kb-key letter-key" data-key="Q">Q</button><button class="kb-key letter-key" data-key="W">W</button><button class="kb-key letter-key" data-key="E">E</button><button class="kb-key letter-key" data-key="R">R</button><button class="kb-key letter-key" data-key="T">T</button><button class="kb-key letter-key" data-key="Y">Y</button><button class="kb-key letter-key" data-key="U">U</button><button class="kb-key letter-key" data-key="I">I</button><button class="kb-key letter-key" data-key="O">O</button><button class="kb-key letter-key" data-key="P">P</button>
      </div>
      <div class="kb-row kb-middle">
        <button class="kb-key letter-key" data-key="A">A</button><button class="kb-key letter-key" data-key="S">S</button><button class="kb-key letter-key" data-key="D">D</button><button class="kb-key letter-key" data-key="F">F</button><button class="kb-key letter-key" data-key="G">G</button><button class="kb-key letter-key" data-key="H">H</button><button class="kb-key letter-key" data-key="J">J</button><button class="kb-key letter-key" data-key="K">K</button><button class="kb-key letter-key" data-key="L">L</button>
      </div>
      <div class="kb-row">
        <button class="kb-key letter-key" data-key="Z">Z</button><button class="kb-key letter-key" data-key="X">X</button><button class="kb-key letter-key" data-key="C">C</button><button class="kb-key letter-key" data-key="V">V</button><button class="kb-key letter-key" data-key="B">B</button><button class="kb-key letter-key" data-key="N">N</button><button class="kb-key letter-key" data-key="M">M</button><button class="kb-key special-key" data-key="BACKSPACE" aria-label="Backspace">
      <svg class="key-icon backspace-icon" viewBox="0 0 48 32" aria-hidden="true">
        <path d="M18 5H42C44 5 45 6 45 8V24C45 26 44 27 42 27H18L5 16Z"/>
        <path class="icon-detail" d="M24 11L34 21M34 11L24 21"/>
      </svg>
    </button>
      </div>
      <div class="kb-row kb-bottom">
        <button class="kb-key special-key space-key" data-key="SPACE" aria-label="Space"></button>
        <button class="kb-key special-key enter-key" data-key="ENTER" aria-label="Enter">
      <svg class="key-icon enter-icon" viewBox="0 0 48 32" aria-hidden="true">
        <path d="M39 6V15C39 18 37 20 34 20H11"/>
        <path d="M18 13L11 20L18 27"/>
      </svg>
    </button>
      </div>
    </div>

  </main>
</div>


<div class="topics-overlay" id="topicsOverlay" aria-hidden="true"><div class="topics-sheet">
<div class="topics-sheet-head"><div><div class="topics-title">Choose Topics</div><div class="topics-subtitle">Select one or more categories</div></div><button class="topics-close" id="topicsClose">×</button></div>
<div class="topics-actions-row"><button class="topics-mini-btn" id="selectAllTopics">All Topics</button><button class="topics-mini-btn" id="clearTopics">Clear</button></div>
<div class="topics-grid" id="topicsGrid"></div>
<div class="topics-footer"><button class="btn btn-ghost" id="cancelTopics">Cancel</button><button class="btn btn-primary" id="applyTopics">Apply</button></div>
</div></div>
</div>`;

function initializeHangman(root, app) {
  const TOPICS = [...new Set(GAME_DATABASE.map(e=>e.category))];
  const RANDOM_POOL = ["JOGGING","COLORING","PICNICKING","ANTIQUING","CARD GAMES","BAKING","CARPENTRY","ACTING","GENEALOGY","SONG WRITING","SIGHTSEEING","SINGING","TASTING","CALLIGRAPHY","DRAWING","WRITING","MARTIAL ARTS","BIRDWATCHING","KITE FLYING","GEOCACHING","BLOGGING","ROCK CLIMBING","CANDLE MAKING","HUNTING","PROGRAMMING","WOOD CARVING","POTTERY","SNORKELING","BLACK MAMBA","MANTA RAY","OSTRICH","ORCA","CORAL","TIGER","MITE","SPERM WHALE","BEAR","FRUIT FLY","SKINK","ALBATROSS","MOSASAURUS","JACKAL","HAWK","BLACK WIDOW","CONDOR","HEDGEHOG","ANTEATER","COBRA","ARMADILLO","NIGHTINGALE","NAUTILUS","PUFFIN","PUFFERFISH","SEAGULL","ARCHAEOPTERYX","GORILLA","FRIENDSHIP","CUISINE","PHILOSOPHY","UNIVERSITY","PRESIDENT","IMAM","CARNIVAL","EQUALITY","CHRISTIANITY","PUBLISHING","VOLUNTEERING","CHARITY","TRANSPORT","TEMPLE","CITIZENSHIP","GOVERNMENT","GENERATION","BIRTHDAY","HOLIDAY","ACCENT","JUSTICE","CENSUS","CAMPAIGN","TREATY","POLITICS","SOCIETY","MINISTER","BUSINESS","TOMATO SOUP","CORNBREAD","COOKIE","EGGPLANT","BISCUIT","CHOCOLATE","CILANTRO","PAELLA","PANCAKE","UDON","CAESAR SALAD","POMEGRANATE","ICED TEA","PASSION FRUIT","RADISH","NOODLE SOUP","PAPRIKA","PANNA COTTA","BIRTHDAY CAKE","DOUGHNUT","WAFFLE","FLATBREAD","CORN FLAKES","SAGE","SAUSAGE","BLUEBERRY","CINNAMON","AVOCADO","BETWEEN","ACCEPT","ENCOURAGE","MAGICAL","DIRECTION","POWERFUL","DETAIL","NEVER","NEAT","DEEP","REPEAT","DISCUSS","PERHAPS","CLEAN","LEAVE","SURPRISE","HOPEFUL","STRENGTH","CONFIDENT","SHORT","CONTACT","VISIT","HELPFUL","SICK","HARM","FORGIVE","SOMETIMES","HABIT","GHANA","BOLIVIA","SPAIN","MOUNTAINS","MADRID","ISTANBUL","RIVER","RED SEA","GULF","KILIMANJARO","MOJAVE","SUPERIOR","GREENLAND","SAUDI ARABIA","VOLCANO","ISRAEL","SYDNEY","MISSISSIPPI","LIBYA","TUNISIA","NEW YORK","SHANGHAI","WARSAW","NETHERLANDS","DUBLIN","ASIA","MEXICO CITY","DUNE","HASTINGS","MAGNA CARTA","KNIGHT","HENRY VIII","ALEXANDER","MACHU PICCHU","WORLD WAR ONE","PLATO","WILD WEST","CHARLEMAGNE","RACE","TELEGRAPH","PACT","ANCIENT","CLEOPATRA","VIKING","COMPASS","SILK ROAD","BATTLE","ROMAN EMPIRE","MICHELANGELO","MONGOL EMPIRE","PEARL HARBOR","CONQUISTADOR","MONARCHY","STEAM","RAMSES","MARCO POLO","PAINT BRUSH","TOOL BOX","CHAIR","HAMMER","MIXING BOWL","PILLOW","MICROWAVE","LOCK","PHONE","PENCIL","CARPET","PHONE CHARGER","BASKET","BROOM","BAKING TRAY","PICTURE","SINK","TRASH BAG","SLOW COOKER","FORK","PURSE","LIGHT SWITCH","SAUCE PAN","STOVE","TUMBLE DRYER","SUNGLASSES","ROCKING CHAIR","COFFEE TABLE","SWEAT","SKIN","UPPER ARM","HEART","VEIN","TASTE","BALANCE","APPENDIX","NEURON","LYMPH","RETINA","PALM","SPINE","TENDON","TONGUE","INTESTINE","HAIR","SKELETAL","DIGESTIVE","JOINT","LITTLE FINGER","SPINAL COLUMN","HEAD","TEETH","FINGERPRINT","BREATHING","MOUTH","INDEX FINGER","BUTCHER","BAKER","SURGEON","CARPENTER","DEVELOPER","PHARMACIST","PSYCHOLOGIST","BANKER","DIRECTOR","MUSICIAN","WORKER","ENGINEER","CARDIOLOGIST","SALESPERSON","CONDUCTOR","PHOTOGRAPHER","MANAGER","PROSECUTOR","LAWYER","COACH","ZOOKEEPER","BRICKLAYER","WAITER","ROOFER","ATTENDANT","DANCER","BARTENDER","ORTHODONTIST","RAMBO","SHERLOCK","SPIRITED AWAY","THE REVENANT","BLACK PANTHER","COCO","ENCANTO","COWBOY BEBOP","MODERN FAMILY","CLUELESS","NARCOS","ALADDIN","THE BATMAN","MONEY HEIST","POINT BREAK","SCARFACE","SEINFELD","MIAMI VICE","BRAVEHEART","TERMINATOR 2","ONE PUNCH MAN","INCEPTION","FARGO","DESPICABLE ME","GREASE","DOCTOR WHO","SOUTH PARK","ARCANE","ERHU","ACCORDION","VIOLIN","ZITHER","HARMONICA","PIANO","DOUBLE BASS","RECORDER","SNARE","BASSOON","SYNTHESIZER","GONG","CLAVES","BONGOS","LUTE","SHAMISEN","DIDGERIDOO","HURDY GURDY","STEEL DRUM","TAMBOURINE","XYLOPHONE","TROMBONE","WOODBLOCK","DJEMBE","VIBRAPHONE","PICCOLO","MELODICA","CHIMES","DOMOVOI","CHIMERA","DIONYSUS","CAMELOT","ODYSSEUS","KRAKEN","ORACLE","PERSEPHONE","TENGU","POLTERGEIST","SHIVA","SERPENT","FENRIR","CERNUNNOS","HYDRA","SUSANOO","JORMUNGANDR","IZANAGI","MOTHMAN","HEPHAESTUS","PHOENIX","SKINWALKER","BRIGID","HANUMAN","GRIFFIN","MANTICORE","GRAIL","ANUBIS","WIND","RAINBOW","TIDE","HAIL","BOULDER","MOSS","GEYSER","AURORA","LOTUS","SAND","ICEBERG","WOODLAND","CRYSTAL","ECLIPSE","WILDFIRE","GORGE","WETLAND","DROUGHT","COAST","BREEZE","MARBLE","HILL","TORNADO","BLOSSOM","SHORE","THUNDERSTORM","AVALANCHE","CREEK","BACTERIA","CALCULUS","MAGMA","LASER","DIAMETER","JOULE","GEOMETRY","CHEMISTRY","VOLT","PROBABILITY","GOLD","WATT","ELEMENT","NUCLEUS","MAGNETISM","COMPOUND","TECTONICS","CARBON","GRAVITY","VOLTAGE","CIRCUIT","CIRCLE","PRESSURE","ACID","SECOND","SODIUM","DATA","THEORY","DIAMONDS","STAND BY ME","START ME UP","LAST NITE","JUST DANCE","SEPTEMBER","IMAGINE","DILEMMA","HERE I GO AGAIN","ROAR","VOGUE","ROYALS","DO I WANNA KNOW","LET IT BE","PARANOID","THE GAMBLER","YOUR SONG","DANCING QUEEN","WAKE ME UP","TINY DANCER","SOMEBODY ELSE","CRAZY TRAIN","STAYIN' ALIVE","IN DA CLUB","HEAVEN","BLEEDING LOVE","UNWRITTEN","THE SCIENTIST","URANUS","VOYAGER","RIGEL","COSMONAUT","QUASAR","SOLAR SYSTEM","INGENUITY","SATELLITE","ASTRONAUT","LIGHT YEAR","METEOR","PERSEVERANCE","OORT CLOUD","GALAXY","SPACE STATION","NEW HORIZONS","VENUS","SOLAR FLARE","CASSINI","COSMOS","CURIOSITY","LAUNCH PAD","RELATIVITY","BLACK HOLE","SUPERNOVA","PLANET","EVENT HORIZON","APOLLO","JUDO","PENTATHLON","LONG JUMP","VOLLEYBALL","WORLD RECORD","CATCHER","DIVING","DISCUS","MATCH POINT","DEFENDER","MOTORSPORT","CURLING","FREE THROW","CANOEING","FINISH LINE","BASEBALL","ROAD CYCLING","SHOT","BILLIARDS","BOULDERING","BIKING","GOLF","YELLOW CARD","GREEN JACKET","SKI JUMPING","SERVE","HOME PLATE","FORMULA ONE","SOCIAL MEDIA","MESSAGE","CHARGER","TABLET","SERVER","UPLOAD","DATABASE","LINUX","WEB PAGE","KEYBOARD","MODEM","BARCODE","SMARTWATCH","PORT","FLASH DRIVE","MOTHERBOARD","SMART WATCH","ETHERNET","HYPERLINK","HOME PAGE","CONSOLE","SETTINGS","PROGRAM","DOWNLOAD","MOUSE","NETWORK CABLE","COMPUTER","DOMAIN","CRIBBAGE","PICK UP STICKS","GAME OF GOOSE","MONOPOLY","GUESS WHO","LEAPFROG","STRATEGO","RUMMY","HIDE AND SEEK","SOLITAIRE","TICKET TO RIDE","FOX AND GEESE","PARCHEESI","TEXAS HOLD'EM","BRIDGE","PICTIONARY","AIR HOCKEY","REVERSI","CANASTA","OTHELLO","FIVE CARD DRAW","SPINNING TOP","BLACKJACK","SUDOKU","PANDEMIC","BATTLESHIP","BOCCE","EUCHRE","MOUNTAIN BIKE","TRACTOR","SPEED BOAT","BULLET TRAIN","ELEVATOR","CABIN","TOUR BUS","TRUCK","ELECTRIC BOAT","SLEIGH","LIMOUSINE","BRAKE","SUBWAY TRAIN","SAILING BOAT","PLATFORM","SAIL","PEDAL","LIFEBOAT","CONVERTIBLE","PICKUP TRUCK","MAST","AMBULANCE","YACHT","TAXI RANK","FISHING BOAT","RUNWAY","CANOE","WAGON","DESTINY 2","UNCHARTED 2","GUILTY GEAR","MARIO KART","THE WITCHER","FALLOUT 2","CYBERPUNK 2077","BAYONETTA","DEATHLOOP","DISCO ELYSIUM","ROBLOX","SOULCALIBUR"];
  const slots = root.getElementById("slots");
  const missesList = root.getElementById("missesList");
  const triesText = root.getElementById("triesText");
  const message = root.getElementById("message");
  const solveBtn = root.getElementById("solveBtn");
  const newWordBtn = root.getElementById("newWordBtn");
  const fullscreenBtn = root.getElementById("fullscreenBtn");
  const gameCard = root.getElementById("gameCard");
  const keyboard = root.getElementById("customKeyboard");
  const solveDisplay = root.getElementById("solveDisplay");
  const solveUi = root.getElementById("solveUi");
  const solveText = root.getElementById("solveText");
  const solveCancelBtn = root.getElementById("solveCancelBtn");
  const topicsBtn=root.getElementById("topicsBtn"),topicsCount=root.getElementById("topicsCount"),topicsOverlay=root.getElementById("topicsOverlay"),topicsGrid=root.getElementById("topicsGrid"),topicsClose=root.getElementById("topicsClose"),selectAllTopics=root.getElementById("selectAllTopics"),clearTopics=root.getElementById("clearTopics"),cancelTopics=root.getElementById("cancelTopics"),applyTopics=root.getElementById("applyTopics");

  let answer="", guessed=new Set(), misses=[], wrongCount=0;
  let active=false, solveMode=false, solveBuffer="", confirmNewWord=false, confirmTimer=null;
  let selectedTopics=new Set(),draftTopics=new Set(), randomMode=true, draftRandomMode=true;

  let backspaceHoldTimer=null;
  let backspaceRepeatTimer=null;
  let backspaceHoldActive=false;
  let backspaceConsumedClick=false;
  const KEY_HAPTIC_MS = 6;
  const ENTER_HAPTIC_MS = 8;
  const KEY_POPUP_MS = 105;

  function vibrate(p){ if("vibrate" in navigator) navigator.vibrate(p); }

  function showKeyPopup(key, value){
    if(!/^[A-Z]$/.test(value)) return;

    key.querySelector(".key-popup")?.remove();

    const popup=document.createElement("span");
    popup.className="key-popup";
    popup.textContent=value;
    key.appendChild(popup);

    setTimeout(()=>{
      popup.classList.add("hide");
      setTimeout(()=>popup.remove(),80);
    },KEY_POPUP_MS);
  }
  function flashWrong(){
    gameCard.classList.remove("wrong-flash","solve-active"); void gameCard.offsetWidth;
    gameCard.classList.add("wrong-flash");
    setTimeout(()=>gameCard.classList.remove("wrong-flash"),320);
  }
  function pulseCorrect(letter){
    const hits=[...slots.querySelectorAll(`.letter-slot[data-letter="${letter}"]`)];
    hits.forEach(el=>{el.classList.remove("correct-hit");void el.offsetWidth;el.classList.add("correct-hit");});
    setTimeout(()=>hits.forEach(el=>el.classList.remove("correct-hit")),360);
  }
  function getActivePool(){
    if(randomMode){
      const allowed=new Set(RANDOM_POOL);
      return GAME_DATABASE.filter(e=>allowed.has(e.answer));
    }
    return GAME_DATABASE.filter(e=>selectedTopics.has(e.category));
  }
  function pickWord(){
    const p=getActivePool();
    if(!p.length) return "";
    let n=p[Math.floor(Math.random()*p.length)].answer;
    if(p.length>1&&n===answer){
      let i=p.findIndex(e=>e.answer===n);
      n=p[(i+1)%p.length].answer;
    }
    return n;
  }
  function resetKeys(){
    keyboard.querySelectorAll(".letter-key").forEach(k=>k.classList.remove("used","guessed-correct","guessed-wrong"));
  }
  function renderTopicChoices(){
    topicsGrid.innerHTML="";

    const randomButton=document.createElement("button");
    randomButton.type="button";
    randomButton.className="topic-chip random-topic";
    randomButton.textContent="Random";
    randomButton.classList.toggle("selected",draftRandomMode);
    randomButton.addEventListener("click",()=>{
      draftRandomMode=true;
      draftTopics.clear();
      renderTopicChoices();
    });
    topicsGrid.appendChild(randomButton);

    TOPICS.forEach(topic=>{
      const b=document.createElement("button");
      b.type="button";
      b.className="topic-chip";
      b.textContent=topic;
      b.classList.toggle("selected",!draftRandomMode && draftTopics.has(topic));
      b.addEventListener("click",()=>{
        draftRandomMode=false;
        if(draftTopics.has(topic)) draftTopics.delete(topic);
        else draftTopics.add(topic);
        renderTopicChoices();
      });
      topicsGrid.appendChild(b);
    });
  }

  function updateTopicsLabel(){
    if(randomMode) topicsCount.textContent="Random";
    else if(selectedTopics.size===TOPICS.length) topicsCount.textContent="All";
    else topicsCount.textContent=selectedTopics.size;
  }

  function openTopics(){
    draftTopics=new Set(selectedTopics);
    draftRandomMode=randomMode;
    renderTopicChoices();
    topicsOverlay.classList.add("open");
    topicsOverlay.setAttribute("aria-hidden","false");
  }

  function closeTopics(){
    topicsOverlay.classList.remove("open");
    topicsOverlay.setAttribute("aria-hidden","true");
  }

  function applyTopicSelection(){
    randomMode=draftRandomMode;
    selectedTopics=new Set(draftTopics);
    updateTopicsLabel();
    closeTopics();
    if(randomMode || selectedTopics.size) startRound();
  }

  function startRound(){
    answer=pickWord(); guessed=new Set(); misses=[]; wrongCount=0; active=true;
    root.querySelectorAll(".draw-part").forEach(part=>part.classList.remove("drawn"));
    solveMode=false; solveBuffer=""; confirmNewWord=false; clearTimeout(confirmTimer);
    slots.classList.remove("win","loss"); gameCard.classList.remove("wrong-flash");
    triesText.classList.remove("warning");
    newWordBtn.textContent="New Word"; newWordBtn.className="btn btn-primary"; newWordBtn.style.display=""; newWordBtn.hidden=false;
    solveBtn.style.display=""; solveUi.classList.remove("open"); solveText.textContent="";
    keyboard.classList.remove("solve-mode"); message.className="message"; message.textContent="";
    resetKeys(); render();
  }
  function uniqueLetters(s){ return [...new Set(s.replace(/[^A-Z]/g,""))]; }
  function render(){
    slots.innerHTML="";
    for(const ch of answer){
      const el=document.createElement("span");
      if(ch===" ") el.className="space-slot";
      else if(/[A-Z]/.test(ch)){el.className="letter-slot";el.dataset.letter=ch;el.textContent=guessed.has(ch)?ch:"";}
      else {el.className="punct";el.textContent=ch;}
      slots.appendChild(el);
    }
    missesList.textContent=misses.length?misses.join(" · "):"";
    triesText.setAttribute("aria-label",`${wrongCount} of 6 misses`);
    triesText.querySelectorAll(".miss-skull").forEach((skull,i)=>skull.classList.toggle("active",i<wrongCount));
    for(let i=1;i<=6;i++) root.getElementById("s"+i)?.classList.toggle("show",i<=wrongCount);
    root.querySelector(".hangman")?.classList.toggle("head-revealed", wrongCount >= 1);
    root.querySelector(".hangman")?.classList.toggle("game-over", wrongCount >= 6);
  }
  root.querySelectorAll(".draw-part").forEach(part=>{
    part.addEventListener("animationend",()=>{
      if(part.classList.contains("show")) part.classList.add("drawn");
    });
  });

  function solved(){ return uniqueLetters(answer).every(l=>guessed.has(l)); }
  function finishWin(){
    uniqueLetters(answer).forEach(l=>guessed.add(l)); active=false; solveMode=false;
    solveBtn.style.display="none"; solveUi.classList.remove("open"); keyboard.classList.remove("solve-mode"); gameCard.classList.remove("solve-active");
    newWordBtn.hidden=false;
    message.className="message success"; message.textContent="Correct."; slots.classList.add("win");
    vibrate([45,35,70]); render();
  }
  function finishLoss(){
    uniqueLetters(answer).forEach(l=>guessed.add(l)); active=false; solveMode=false;
    solveBtn.style.display="none"; solveUi.classList.remove("open"); keyboard.classList.remove("solve-mode"); gameCard.classList.remove("solve-active");
    newWordBtn.hidden=false;
    message.className="message danger"; message.textContent=`The answer was ${answer}.`;
    slots.classList.add("loss"); vibrate([120,60,120]); flashWrong(); render();
  }
  function wrongGuess(text){
    wrongCount++; vibrate(90); flashWrong(); render();
    if(wrongCount>=6) finishLoss(); else {message.className="message";message.textContent=text;}
  }
  function guessLetter(letter){
    if(!active||solveMode||guessed.has(letter)||misses.includes(letter)) return;
    const key=keyboard.querySelector(`[data-key="${letter}"]`);
    if(answer.includes(letter)){
      guessed.add(letter); key?.classList.add("guessed-correct","used"); render(); pulseCorrect(letter);
      if(solved()) finishWin();
    } else {
      misses.push(letter); key?.classList.add("guessed-wrong","used"); wrongGuess(`${letter} is not in the word.`);
    }
  }
  function updateSolve(){
    solveText.textContent=solveBuffer;
  }

  function enterSolve(){
    if(!active) return;
    solveMode=true;
    solveBuffer="";
    keyboard.classList.add("solve-mode");
    solveUi.classList.add("open");
    solveBtn.style.display="none";
    newWordBtn.hidden=true;
    message.textContent="";
    updateSolve();
  }

  function leaveSolve(){
    stopBackspaceHold();
    solveMode=false;
    solveBuffer="";
    keyboard.classList.remove("solve-mode");
    solveUi.classList.remove("open");
    solveBtn.style.display="";
    newWordBtn.hidden=false;
    message.textContent="";
  }

  function submitSolve(){
    const attempt=solveBuffer.trim().replace(/\s+/g," ").toUpperCase();
    if(!attempt) return;
    if(attempt===answer) finishWin(); else { leaveSolve(); wrongGuess("Wrong solution. One miss added."); }
  }


  function deleteOneSolveChar(){
    if(!solveMode || !solveBuffer) return;
    solveBuffer=solveBuffer.slice(0,-1);
    updateSolve();
  }

  function stopBackspaceHold(){
    clearTimeout(backspaceHoldTimer);
    clearInterval(backspaceRepeatTimer);
    backspaceHoldTimer=null;
    backspaceRepeatTimer=null;
    backspaceHoldActive=false;
  }

  const backspaceKey=keyboard.querySelector('[data-key="BACKSPACE"]');

  backspaceKey?.addEventListener("pointerdown",e=>{
    if(!active || !solveMode) return;

    e.preventDefault();
    backspaceConsumedClick=false;
    backspaceHoldActive=true;

    /* Smartphone-like behavior: one immediate deletion, then repeat after a pause. */
    vibrate(KEY_HAPTIC_MS);
    deleteOneSolveChar();

    backspaceHoldTimer=setTimeout(()=>{
      if(!backspaceHoldActive) return;
      backspaceConsumedClick=true;

      backspaceRepeatTimer=setInterval(()=>{
        if(!backspaceHoldActive || !solveMode || !solveBuffer){
          stopBackspaceHold();
          return;
        }
        deleteOneSolveChar();
      },70);
    },360);
  });

  ["pointerup","pointercancel","pointerleave"].forEach(type=>{
    backspaceKey?.addEventListener(type,()=>{
      stopBackspaceHold();
    });
  });

  keyboard.addEventListener("click",e=>{
    const key=e.target.closest(".kb-key");
    if(!key||!active) return;

    const v=key.dataset.key;

    /* Short, crisp haptic pulse closer to a phone keyboard tap. */
    vibrate(v==="ENTER" ? ENTER_HAPTIC_MS : KEY_HAPTIC_MS);

    key.classList.remove("key-pressed");
    void key.offsetWidth;
    key.classList.add("key-pressed");
    setTimeout(()=>key.classList.remove("key-pressed"),82);

    showKeyPopup(key,v);

    if(!solveMode){
      if(/^[A-Z]$/.test(v)) guessLetter(v);
      /* Backspace, Space and Enter intentionally do nothing here. */
      return;
    }

    if(/^[A-Z]$/.test(v)) solveBuffer+=v;
    else if(v==="SPACE" && solveBuffer && !solveBuffer.endsWith(" ")) solveBuffer+=" ";
    else if(v==="BACKSPACE"){
      if(backspaceConsumedClick){
        backspaceConsumedClick=false;
        return;
      }
      /* Fallback for browsers that dispatch click without pointerdown. */
      deleteOneSolveChar();
      return;
    }
    else if(v==="ENTER"){
      submitSolve();
      return;
    }

    updateSolve();
  });

  solveBtn.addEventListener("click",enterSolve);
  solveCancelBtn.addEventListener("click",leaveSolve);
  newWordBtn.addEventListener("click",()=>{
    if(!active){ startRound(); return; }
    if(!confirmNewWord){
      confirmNewWord=true; newWordBtn.textContent="New Word?"; newWordBtn.className="btn btn-danger";
      clearTimeout(confirmTimer);
      confirmTimer=setTimeout(()=>{confirmNewWord=false;newWordBtn.textContent="New Word";newWordBtn.className="btn btn-primary";},2200);
      return;
    }
    startRound();
  });
  topicsBtn.addEventListener("click",openTopics);topicsClose.addEventListener("click",closeTopics);cancelTopics.addEventListener("click",closeTopics);
  selectAllTopics.addEventListener("click",()=>{draftRandomMode=false;draftTopics=new Set(TOPICS);renderTopicChoices();});
  clearTopics.addEventListener("click",()=>{draftRandomMode=false;draftTopics.clear();renderTopicChoices();});
  applyTopics.addEventListener("click",applyTopicSelection);
  topicsOverlay.addEventListener("click",e=>{if(e.target===topicsOverlay)closeTopics();});


  const updateFullscreenButton = () => {
    const on = app.isFullscreen();
    fullscreenBtn.textContent = on ? "×" : "⛶";
    fullscreenBtn.setAttribute("aria-label", on ? "Exit fullscreen" : "Enter fullscreen");
  };

  fullscreenBtn.addEventListener("click", async () => {
    app.haptic(12);
    await app.toggleFullscreen();
  });

  root.getElementById("homeButton").addEventListener("click", () => {
    app.haptic(12);
    closeTopics();
    app.showHome();
  });

  app.onFullscreenChange(updateFullscreenButton);
  updateFullscreenButton();
  updateTopicsLabel();
  startRound();
}

class QuizHangman extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;
    const root = this.attachShadow({ mode: "open" });
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/hangman-p5r11.css";
    const wrapper = document.createElement("div");
    wrapper.innerHTML = templateHTML;
    root.append(link, wrapper);
    initializeHangman(root, appAPI);
  }
}

export function registerHangman(app) {
  appAPI = app;
  if (!customElements.get("quiz-hangman")) {
    customElements.define("quiz-hangman", QuizHangman);
  }
}
