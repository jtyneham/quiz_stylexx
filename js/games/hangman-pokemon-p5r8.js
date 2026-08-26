import { POKEMON_WORDS } from "../../data/missing-word-pokemon-words.js";

let appAPI;

const templateHTML = `<div class="hangman-root">
<div class="app">
  <main class="game-card" id="gameCard">
    <div class="status-row">
      <div class="status-actions"><button class="home-button" id="homeButton" type="button" aria-label="Back to Home" title="Home">Home</button><button class="fullscreen-btn" id="fullscreenBtn" type="button" aria-label="Toggle fullscreen" title="Fullscreen">⛶</button></div>
<button class="topics-btn" id="topicsBtn" type="button">Topics <span id="topicsCount">All</span></button>
      <div class="skull-counter" id="triesText" aria-label="0 of 6 misses">
        <span class="miss-skull" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 3C8.8 3 4 8 4 14.2c0 4.1 2.1 7.2 5.6 8.8v4h3v2h2v-3h3v3h2v-2h3v-4c3.4-1.6 5.4-4.7 5.4-8.8C28 8 23.2 3 16 3Zm-5 14.5c-2 0-3.4-1.4-3.4-3.2S9 11.2 11 11.2s3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2Zm10 0c-2 0-3.4-1.4-3.4-3.2s1.4-3.1 3.4-3.1 3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2ZM13 21h6l-3 3-3-3Z"/></svg></span>
        <span class="miss-skull" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 3C8.8 3 4 8 4 14.2c0 4.1 2.1 7.2 5.6 8.8v4h3v2h2v-3h3v3h2v-2h3v-4c3.4-1.6 5.4-4.7 5.4-8.8C28 8 23.2 3 16 3Zm-5 14.5c-2 0-3.4-1.4-3.4-3.2S9 11.2 11 11.2s3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2Zm10 0c-2 0-3.4-1.4-3.4-3.2s1.4-3.1 3.4-3.1 3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2ZM13 21h6l-3 3-3-3Z"/></svg></span>
        <span class="miss-skull" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 3C8.8 3 4 8 4 14.2c0 4.1 2.1 7.2 5.6 8.8v4h3v2h2v-3h3v3h2v-2h3v-4c3.4-1.6 5.4-4.7 5.4-8.8C28 8 23.2 3 16 3Zm-5 14.5c-2 0-3.4-1.4-3.4-3.2S9 11.2 11 11.2s3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2Zm10 0c-2 0-3.4-1.4-3.4-3.2s1.4-3.1 3.4-3.1 3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2ZM13 21h6l-3 3-3-3Z"/></svg></span>
        <span class="miss-skull" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 3C8.8 3 4 8 4 14.2c0 4.1 2.1 7.2 5.6 8.8v4h3v2h2v-3h3v3h2v-2h3v-4c3.4-1.6 5.4-4.7 5.4-8.8C28 8 23.2 3 16 3Zm-5 14.5c-2 0-3.4-1.4-3.4-3.2S9 11.2 11 11.2s3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2Zm10 0c-2 0-3.4-1.4-3.4-3.2s1.4-3.1 3.4-3.1 3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2ZM13 21h6l-3 3-3-3Z"/></svg></span>
        <span class="miss-skull" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 3C8.8 3 4 8 4 14.2c0 4.1 2.1 7.2 5.6 8.8v4h3v2h2v-3h3v3h2v-2h3v-4c3.4-1.6 5.4-4.7 5.4-8.8C28 8 23.2 3 16 3Zm-5 14.5c-2 0-3.4-1.4-3.4-3.2S9 11.2 11 11.2s3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2Zm10 0c-2 0-3.4-1.4-3.4-3.2s1.4-3.1 3.4-3.1 3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2ZM13 21h6l-3 3-3-3Z"/></svg></span>
        <span class="miss-skull" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 3C8.8 3 4 8 4 14.2c0 4.1 2.1 7.2 5.6 8.8v4h3v2h2v-3h3v3h2v-2h3v-4c3.4-1.6 5.4-4.7 5.4-8.8C28 8 23.2 3 16 3Zm-5 14.5c-2 0-3.4-1.4-3.4-3.2S9 11.2 11 11.2s3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2Zm10 0c-2 0-3.4-1.4-3.4-3.2s1.4-3.1 3.4-3.1 3.4 1.3 3.4 3.1-1.4 3.2-3.4 3.2ZM13 21h6l-3 3-3-3Z"/></svg></span>
      </div><span class="miss-skull" aria-hidden="true">☠</span><span class="miss-skull" aria-hidden="true">☠</span>
          <span class="miss-skull" aria-hidden="true">☠</span><span class="miss-skull" aria-hidden="true">☠</span><span class="miss-skull" aria-hidden="true">☠</span>
        </div>
    </div>

    <div class="hangman-wrap">
      <svg class="hangman persona-hangman" viewBox="0 0 300 240" preserveAspectRatio="xMidYMid meet" aria-label="Persona-style hangman drawing">
        <!-- Persona-style scaffold: white under-shape, black core, red cuts -->
        <path class="p5-scaffold-outline" d="M43 229 L55 207 L59 50 L46 42 L57 25 L225 18 L236 29 L225 44 L89 47 L88 211 L106 221 L100 235 L55 236 Z"/>
        <path class="p5-scaffold-main" d="M51 226 L64 204 L67 49 L56 42 L64 31 L222 25 L228 30 L219 38 L80 41 L79 214 L98 224 L94 230 L61 231 Z"/>
        <path class="p5-scaffold-cut" d="M59 176 L80 144 L79 194 L64 215 Z"/>
        <path class="p5-scaffold-cut" d="M71 68 L96 42 L116 41 L82 79 Z"/>
        <path class="p5-scaffold-cut" d="M50 228 L72 211 L98 225 L89 233 Z"/>

        <!-- jagged feet -->
        <path class="p5-scaffold-outline" d="M35 233 L52 216 L69 224 L82 214 L96 226 L112 217 L127 235 Z"/>
        <path class="p5-scaffold-main" d="M43 233 L55 222 L69 229 L82 220 L96 231 L108 224 L117 235 Z"/>
        <path class="p5-scaffold-cut" d="M55 230 L70 222 L82 232 Z"/>

        <!-- rope -->
        <path class="p5-rope-shadow" d="M209 40 L209 77 C209 84 205 88 205 96"/>
        <path class="p5-rope" d="M206 40 L206 77 C206 84 202 88 202 96"/>
        <path class="p5-knot" d="M199 72 L211 72 L212 79 L198 79 Z"/>

        <!-- 1: Joker head, hair and mask -->
        <g class="stage joker-stage" id="s1">
          <path class="joker-hair" d="M202 76 L194 67 L199 57 L207 65 L213 53 L218 66 L228 60 L224 75 L231 80 L220 83 L222 95 L211 105 L197 101 L189 91 L191 80 Z"/>
          <path class="joker-face" d="M193 81 Q204 73 217 81 L215 94 Q205 103 195 94 Z"/>
          <path class="joker-mask" d="M194 83 Q199 78 204 82 Q210 78 216 83 L212 90 Q207 87 204 91 Q200 87 197 90 Z"/>
          <path class="joker-eye" d="M198 84 L202 86"/>
          <path class="joker-eye" d="M210 86 L214 84"/>
        </g>

        <!-- 2: torso and coat body -->
        <g class="stage joker-stage" id="s2">
          <path class="joker-coat" d="M198 102 L211 102 L218 117 L214 154 L205 166 L195 154 L192 117 Z"/>
          <path class="joker-lapel" d="M197 106 L204 116 L211 105"/>
          <path class="joker-shirt" d="M204 114 L207 145"/>
          <path class="joker-coat-tail-center" d="M198 151 L205 172 L212 151"/>
        </g>

        <!-- 3: left arm + red glove -->
        <g class="stage joker-stage" id="s3">
          <path class="joker-limb" d="M195 113 Q184 122 176 143"/>
          <path class="joker-glove" d="M171 140 L178 139 L181 148 L174 152 L169 148 Z"/>
        </g>

        <!-- 4: right arm + red glove -->
        <g class="stage joker-stage" id="s4">
          <path class="joker-limb" d="M214 113 Q226 122 234 143"/>
          <path class="joker-glove" d="M230 140 L237 139 L241 148 L235 152 L228 148 Z"/>
        </g>

        <!-- 5: left leg + left coat tail -->
        <g class="stage joker-stage" id="s5">
          <path class="joker-leg" d="M201 161 Q196 176 191 197"/>
          <path class="joker-boot" d="M186 198 L193 194 L196 201 L189 207 L184 204 Z"/>
          <path class="joker-tail" d="M198 148 L187 177 L199 170"/>
        </g>

        <!-- 6: right leg + right coat tail -->
        <g class="stage joker-stage" id="s6">
          <path class="joker-leg" d="M209 161 Q214 176 219 197"/>
          <path class="joker-boot" d="M216 201 L222 194 L227 198 L226 204 L220 207 Z"/>
          <path class="joker-tail" d="M212 148 L224 177 L211 170"/>
        </g>

        <!-- noose front appears with head -->
        <path class="p5-noose-front" d="M194 96 C195 107 199 111 205 112 C211 111 215 107 216 96"/>
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

    <div class="topics-overlay" id="topicsOverlay" aria-hidden="true"><div class="topics-sheet">
      <div class="topics-sheet-head"><div><div class="topics-title">Choose Topics</div><div class="topics-subtitle">Select one or more Pokémon categories</div></div><button class="topics-close" id="topicsClose">×</button></div>
      <div class="topics-actions-row"><button class="topics-mini-btn" id="selectAllTopics">All Topics</button><button class="topics-mini-btn" id="clearTopics">Clear</button></div>
      <div class="topics-grid" id="topicsGrid"></div>
      <div class="topics-footer"><button class="btn btn-ghost" id="cancelTopics">Cancel</button><button class="btn btn-primary" id="applyTopics">Apply</button></div>
    </div></div>

  </main>
</div>
</div>`;

function initializeHangmanPokemon(root, app) {
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
  const TOPICS = ["Pokemon All Names", "Gen 1", "Gen 2", "Gen 3", "Gen 4", "Gen 5", "Gen 6", "Gen 7", "Gen 8", "Gen 9", "Moves + Abilities", "Moves", "Abilities", "Final Evolutions", "Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"];
  const topicsBtn=root.getElementById("topicsBtn"), topicsCount=root.getElementById("topicsCount"), topicsOverlay=root.getElementById("topicsOverlay"), topicsGrid=root.getElementById("topicsGrid"), topicsClose=root.getElementById("topicsClose"), selectAllTopics=root.getElementById("selectAllTopics"), clearTopics=root.getElementById("clearTopics"), cancelTopics=root.getElementById("cancelTopics"), applyTopics=root.getElementById("applyTopics");
  let selectedTopics=new Set(["Pokemon All Names"]), draftTopics=new Set(["Pokemon All Names"]);

  let answer="", guessed=new Set(), misses=[], wrongCount=0;
  let active=false, solveMode=false, solveBuffer="", confirmNewWord=false, confirmTimer=null;

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
  function currentPokemonPool(){
    const pool=POKEMON_WORDS.filter(entry=>entry.topics.some(topic=>selectedTopics.has(topic))).map(entry=>entry.word.toUpperCase());
    return pool.length ? pool : POKEMON_WORDS.map(entry=>entry.word.toUpperCase());
  }
  function pickWord(){
    const pool=currentPokemonPool();
    let next=pool[Math.floor(Math.random()*pool.length)];
    if(pool.length>1 && next===answer) next=pool[(pool.indexOf(next)+1)%pool.length];
    return next;
  }
  function updateTopicsCount(){topicsCount.textContent=selectedTopics.size===TOPICS.length?"All":selectedTopics.size;}
  function renderTopicChoices(){
    topicsGrid.replaceChildren();
    TOPICS.forEach(topic=>{const b=document.createElement("button");b.type="button";b.className="topic-chip";b.textContent=topic;b.classList.toggle("selected",draftTopics.has(topic));b.addEventListener("click",()=>{draftTopics.has(topic)?draftTopics.delete(topic):draftTopics.add(topic);renderTopicChoices();});topicsGrid.appendChild(b);});
  }
  function openTopics(){draftTopics=new Set(selectedTopics);renderTopicChoices();topicsOverlay.classList.add("open");topicsOverlay.setAttribute("aria-hidden","false");}
  function closeTopics(){topicsOverlay.classList.remove("open");topicsOverlay.setAttribute("aria-hidden","true");}
  topicsBtn.addEventListener("click",openTopics);topicsClose.addEventListener("click",closeTopics);cancelTopics.addEventListener("click",closeTopics);
  selectAllTopics.addEventListener("click",()=>{draftTopics=new Set(TOPICS);renderTopicChoices();});
  clearTopics.addEventListener("click",()=>{draftTopics.clear();renderTopicChoices();});
  applyTopics.addEventListener("click",()=>{if(!draftTopics.size)return;selectedTopics=new Set(draftTopics);updateTopicsCount();closeTopics();startRound();});
  topicsOverlay.addEventListener("click",e=>{if(e.target===topicsOverlay)closeTopics();});
  updateTopicsCount();

  function resetKeys(){
    keyboard.querySelectorAll(".letter-key").forEach(key=>{
      key.classList.remove("used","guessed-correct","guessed-wrong","key-pressed");
      key.querySelector(".key-popup")?.remove();
    });
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

  function normalizePlayableChar(ch){
    const base=(ch||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();
    return /^[A-Z]$/.test(base) ? base : "";
  }

  function normalizePlayableAnswer(str){
    return [...str].map(ch=>{
      const normalized=normalizePlayableChar(ch);
      return normalized || ch;
    }).join("");
  }

  function uniqueLetters(s){
    return [...new Set([...s].map(normalizePlayableChar).filter(Boolean))];
  }
  function render(){
    slots.innerHTML="";
    for(const ch of answer){
      const el=document.createElement("span");
      if(ch===" ") el.className="space-slot";
      else if(normalizePlayableChar(ch)){
        const playable=normalizePlayableChar(ch);
        el.className="letter-slot";
        el.dataset.letter=playable;
        el.textContent=guessed.has(playable)?ch:"";
      }
      else {el.className="punct";el.textContent=ch;}
      slots.appendChild(el);
    }
    missesList.textContent=misses.length?misses.join(" · "):"";
    triesText.setAttribute("aria-label",`${wrongCount} of 6 misses`);
    triesText.querySelectorAll(".miss-skull").forEach((skull,i)=>{
      skull.classList.toggle("active",i<wrongCount);
    });
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
    if(normalizePlayableAnswer(answer).includes(letter)){
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
    if(attempt===normalizePlayableAnswer(answer)) finishWin(); else { leaveSolve(); wrongGuess("Wrong solution. One miss added."); }
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
    app.showHome();
  });

  app.onFullscreenChange(updateFullscreenButton);
  updateFullscreenButton();
  startRound();
}

class QuizHangmanPokemon extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;
    const root = this.attachShadow({ mode: "open" });
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/hangman-pokemon-p5r8.css";
    const wrapper = document.createElement("div");
    wrapper.innerHTML = templateHTML;
    root.append(link, wrapper);
    initializeHangmanPokemon(root, appAPI);
  }
}

export function registerHangmanPokemon(app) {
  appAPI = app;
  if (!customElements.get("quiz-hangman-pokemon")) {
    customElements.define("quiz-hangman-pokemon", QuizHangmanPokemon);
  }
}
