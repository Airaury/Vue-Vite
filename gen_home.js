// Script to generate Home.vue - part 1: template
const fs = require('fs');

const part1 = `\u003ctemplate\u003e
  \u003cdiv class="home"\u003e
    \u003cHeroCarousel :slides="heroSlides" :stats="siteStats" /\u003e
    \u003csection class="quick-nav"\u003e
      \u003cdiv class="grid-4 stagger-group"\u003e
        \u003crouter-link to="/characters" class="quick-card scroll-reveal" style="--accent:#c41e3a; --glow:rgba(196,30,58,0.4)"\u003e
          \u003cdiv class="card-icon