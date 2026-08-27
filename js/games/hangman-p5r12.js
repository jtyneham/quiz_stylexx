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
      <div class="raster-hangman" role="img" aria-label="Persona-style gallows and progressive Joker figure">
        <img class="raster-scaffold" src="assets/hangman/persona-scaffold-idle.png" alt="" />
        <img class="raster-scaffold raster-scaffold-short" src="assets/hangman/persona-scaffold-short-rope.png?v=23" alt="" />
        <span class="raster-joker-stage stage" id="s1"><img src="assets/hangman/joker-master.png" alt="" /></span>
        <span class="raster-joker-stage stage" id="s2"><img src="assets/hangman/joker-master.png" alt="" /></span>
        <span class="raster-joker-stage stage" id="s3"><img src="assets/hangman/joker-master.png" alt="" /></span>
        <span class="raster-joker-stage stage" id="s4"><img src="assets/hangman/joker-master.png" alt="" /></span>
        <span class="raster-joker-stage stage" id="s5"><img src="assets/hangman/joker-master.png" alt="" /></span>
        <span class="raster-joker-stage stage" id="s6"><img src="assets/hangman/joker-master.png" alt="" /></span>
      </div>
      <svg class="hangman persona-hangman persona-hangman-v12" viewBox="0 0 420 330" preserveAspectRatio="xMidYMid meet" aria-label="Persona-style hangman drawing">
  <!-- =========================
       SCAFFOLD — layered, modular
       ========================= -->
  <g class="p5-scaffold scaffold-back">
    <path class="scaffold-shadow" d="M39 312 L64 274 L72 69 L53 56 L69 31 L325 22 L343 39 L325 62 L126 66 L123 268 L153 292 L141 318 L88 321 Z"/>
  </g>

  <g class="p5-scaffold scaffold-outline">
    <path class="outline-fill" d="M47 307 L69 270 L78 66 L60 55 L74 37 L320 29 L334 41 L319 54 L117 58 L114 273 L143 296 L135 311 L91 315 Z"/>
    <path class="outline-fill foot-outer" d="M30 316 L52 289 L72 298 L91 280 L113 301 L139 286 L170 319 Z"/>
  </g>

  <g class="p5-scaffold scaffold-core">
    <path class="core-fill post-main" d="M60 304 L79 267 L86 66 L71 57 L82 45 L315 38 L324 42 L314 49 L107 52 L104 278 L133 299 L128 306 L94 310 Z"/>
    <path class="core-fill beam-top" d="M88 46 L319 37 L325 43 L314 50 L107 55 L99 64 L84 58 Z"/>
    <path class="core-fill foot-main" d="M42 315 L55 300 L74 307 L91 290 L111 307 L134 296 L155 319 Z"/>
  </g>

  <g class="p5-scaffold scaffold-highlights">
    <path class="white-slice" d="M79 75 L87 63 L88 112 L81 126 Z"/>
    <path class="white-slice" d="M81 221 L88 207 L88 255 L82 267 Z"/>
    <path class="white-slice" d="M105 51 L126 51 L111 60 L98 61 Z"/>
    <path class="white-slice" d="M58 301 L69 296 L80 308 L69 311 Z"/>
    <path class="white-slice" d="M74 145 L87 125 L85 169 L77 184 Z"/>
    <path class="white-slice" d="M43 313 L55 297 L58 315 Z"/>
    <path class="white-slice" d="M148 48 L176 47 L162 54 L137 55 Z"/>
  </g>

  <g class="p5-scaffold scaffold-red-accents">
    <path class="red-slice" d="M81 91 L108 58 L139 57 L102 106 Z"/>
    <path class="red-slice" d="M80 188 L107 155 L104 218 L86 254 Z"/>
    <path class="red-slice" d="M60 308 L89 285 L126 304 L111 314 Z"/>
    <path class="red-slice" d="M119 51 L146 50 L130 58 L107 59 Z"/>
  </g>

  <g class="p5-rope-group">
    <path class="rope-shadow" d="M291 50 L291 104 C291 116 287 123 287 136"/>
    <path class="rope-main" d="M287 50 L287 104 C287 116 283 123 283 136"/>
    <path class="rope-wrap" d="M279 97 L295 97 L297 103 L278 103 Z"/>
    <path class="rope-wrap-dark" d="M281 102 L294 102 L296 108 L280 108 Z"/>
    <path class="rope-fiber" d="M284 54l6 5m-6 4l6 5m-6 4l6 5m-6 4l6 5m-6 4l6 5"/>
  </g>

  <!-- =========================
       STAGE 1 — HEAD / HAIR / MASK
       ========================= -->
  <g class="stage joker-stage" id="legacy-s1">
    <g class="joker-head-group" transform="translate(135 70) scale(.55)">
      <path class="hair-outline" d="M282 135 L271 126 L274 116 L281 119 L285 107 L291 113 L295 99 L301 113 L311 105 L311 118 L323 112 L320 126 L328 132 L320 140 L322 153 L313 161 L302 166 L288 164 L277 156 L273 145 Z"/>
      <path class="hair-core" d="M283 134 L274 126 L278 119 L284 122 L287 112 L292 118 L296 105 L301 118 L309 111 L309 123 L319 118 L316 130 L323 133 L316 139 L318 151 L311 157 L301 161 L290 159 L281 153 L278 144 Z"/>
      <path class="hair-red-accent" d="M295 111 L300 106 L301 121 L297 124 Z"/>
      <path class="face-outline" d="M281 137 Q299 123 317 137 L314 153 Q302 166 290 157 Q283 151 281 137 Z"/>
      <path class="face-core" d="M285 138 Q299 129 313 138 L310 151 Q301 160 292 154 Q286 149 285 138 Z"/>
      <path class="mask-outline" d="M284 138 Q290 130 298 136 Q307 130 314 138 L310 149 Q304 145 299 150 Q293 145 288 149 Z"/>
      <path class="mask-core" d="M287 138 Q291 134 297 138 Q305 134 311 138 L308 145 Q304 143 299 147 Q294 143 290 145 Z"/>
      <path class="mask-red-slit left" d="M290 139 L295 142"/>
      <path class="mask-red-slit right" d="M304 142 L309 139"/>
      <path class="neck-shadow" d="M294 157 L305 157 L307 169 L292 169 Z"/>
      <path class="noose-front" d="M279 151 C281 166 288 173 299 174 C310 173 317 166 319 151"/>
    </g>
  </g>

  <!-- =========================
       STAGE 2 — TORSO / COAT / LAPELS
       ========================= -->
  <g class="stage joker-stage" id="legacy-s2">
    <g class="joker-torso-group" transform="translate(135 70) scale(.55)">
      <path class="coat-outline" d="M286 166 L311 166 L321 185 L319 236 L312 250 L305 264 L293 264 L284 249 L279 235 L279 185 Z"/>
      <path class="coat-core" d="M289 168 L309 168 L317 186 L315 233 L309 247 L302 258 L295 258 L287 247 L283 233 L283 186 Z"/>
      <path class="lapel-left" d="M289 170 L299 184 L292 194 L285 181 Z"/>
      <path class="lapel-right" d="M309 170 L299 184 L306 194 L314 181 Z"/>
      <path class="vest-panel" d="M294 184 L304 184 L307 231 L292 231 Z"/>
      <path class="shirt-line" d="M299 184 L299 231"/>
      <path class="belt" d="M288 229 L311 229 L312 236 L287 236 Z"/>
      <path class="button b1" d="M299 197 L301 199 L299 201 L297 199 Z"/>
      <path class="button b2" d="M299 211 L301 213 L299 215 L297 213 Z"/>
      <path class="button b3" d="M299 224 L301 226 L299 228 L297 226 Z"/>
      <path class="coat-tail-center" d="M289 233 L299 276 L311 233 L306 264 L299 286 L292 264 Z"/>
      <path class="coat-red-seam" d="M286 191 L290 191 L289 232 L285 231 Z"/>
    </g>
  </g>

  <!-- =========================
       STAGE 3 — LEFT ARM / CUFF / GLOVE
       ========================= -->
  <g class="stage joker-stage" id="legacy-s3">
    <g class="joker-left-arm-group" transform="translate(135 70) scale(.55)">
      <path class="arm-outline" d="M284 181 Q266 193 252 221 L259 228 Q274 206 291 196 Z"/>
      <path class="arm-core" d="M285 184 Q270 195 257 220 L261 224 Q276 203 291 194 Z"/>
      <path class="cuff-outline" d="M252 218 L262 219 L266 229 L257 234 L249 228 Z"/>
      <path class="cuff-core" d="M254 220 L260 221 L263 227 L257 231 L252 227 Z"/>
      <path class="glove-outline" d="M246 228 L256 227 L261 235 L256 242 L247 243 L241 237 Z"/>
      <path class="glove-core" d="M248 230 L255 230 L258 235 L254 239 L248 240 L244 236 Z"/>
      <path class="glove-cut" d="M248 231 L254 238"/>
    </g>
  </g>

  <!-- =========================
       STAGE 4 — RIGHT ARM / CUFF / GLOVE
       ========================= -->
  <g class="stage joker-stage" id="legacy-s4">
    <g class="joker-right-arm-group" transform="translate(135 70) scale(.55)">
      <path class="arm-outline" d="M314 181 Q332 193 346 221 L339 228 Q324 206 307 196 Z"/>
      <path class="arm-core" d="M313 184 Q328 195 341 220 L337 224 Q322 203 307 194 Z"/>
      <path class="cuff-outline" d="M346 218 L336 219 L332 229 L341 234 L349 228 Z"/>
      <path class="cuff-core" d="M344 220 L338 221 L335 227 L341 231 L346 227 Z"/>
      <path class="glove-outline" d="M352 228 L342 227 L337 235 L342 242 L351 243 L357 237 Z"/>
      <path class="glove-core" d="M350 230 L343 230 L340 235 L344 239 L350 240 L354 236 Z"/>
      <path class="glove-cut" d="M350 231 L344 238"/>
    </g>
  </g>

  <!-- =========================
       STAGE 5 — LEFT LEG / LEFT COAT TAIL
       ========================= -->
  <g class="stage joker-stage" id="legacy-s5">
    <g class="joker-left-leg-group" transform="translate(135 70) scale(.55)">
      <path class="leg-outline" d="M296 258 Q289 276 279 300 L287 305 Q299 284 304 264 Z"/>
      <path class="leg-core" d="M297 260 Q292 278 283 299 L287 301 Q297 283 302 263 Z"/>
      <path class="boot-outline" d="M276 299 L288 296 L294 304 L288 314 L276 316 L268 311 Z"/>
      <path class="boot-core" d="M278 301 L286 299 L290 304 L286 310 L278 312 L272 309 Z"/>
      <path class="coat-tail-left-outline" d="M290 231 L272 272 L290 264 L296 286 L300 250 Z"/>
      <path class="coat-tail-left-core" d="M291 236 L277 268 L291 261 L296 280 L298 251 Z"/>
      <path class="tail-red-cut left" d="M285 250 L292 245 L289 266 Z"/>
    </g>
  </g>

  <!-- =========================
       STAGE 6 — RIGHT LEG / RIGHT COAT TAIL
       ========================= -->
  <g class="stage joker-stage" id="legacy-s6">
    <g class="joker-right-leg-group" transform="translate(135 70) scale(.55)">
      <path class="leg-outline" d="M303 258 Q310 276 320 300 L312 305 Q300 284 295 264 Z"/>
      <path class="leg-core" d="M302 260 Q307 278 316 299 L312 301 Q302 283 297 263 Z"/>
      <path class="boot-outline" d="M323 299 L311 296 L305 304 L311 314 L323 316 L331 311 Z"/>
      <path class="boot-core" d="M321 301 L313 299 L309 304 L313 310 L321 312 L327 309 Z"/>
      <path class="coat-tail-right-outline" d="M308 231 L326 272 L308 264 L302 286 L298 250 Z"/>
      <path class="coat-tail-right-core" d="M307 236 L321 268 L307 261 L302 280 L300 251 Z"/>
      <path class="tail-red-cut right" d="M313 250 L306 245 L309 266 Z"/>
    </g>
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
    root.querySelector(".raster-hangman")?.classList.toggle("head-revealed", wrongCount >= 1);
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
    link.href = "css/hangman-p5r12.css?v=24";
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
