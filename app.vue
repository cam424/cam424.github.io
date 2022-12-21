<template>
  <main>
    <header class="header">
      <ul class="header-items">
        <li class="header-item app-icon">
          <font-awesome-icon :icon="['fa-solid', 'fa-wand-sparkles']" size="xs" inverse />
        </li>
        <li class="header-item app-title">untitled - Paint</li>
        <li class="header-item app-options">
          <ul class="options-buttons">
            <li class="option-button">
              <div class="button-bevel">
                <font-awesome-icon :icon="['fa-solid', 'fa-window-minimize']" size="xs" inverse />
              </div>
            </li>
            <li class="option-button">
              <div class="button-bevel">
                <font-awesome-icon :icon="['fa-solid', 'fa-window-maximize']" size="xs" inverse />
              </div>
            </li>
            <li class="option-button">
              <div class="button-bevel">
                <font-awesome-icon :icon="['fa-solid', 'fa-xmark']" size="xs" inverse />
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <nav>
        <ul class="navigiation">
          <li class="nav-item">
            <span class="underline">F</span>ile
          </li>
          <li class="nav-item">
            <span class="underline">E</span>dit
          </li>
          <li class="nav-item">
            <span class="underline">V</span>iew
          </li>
          <li class="nav-item">
            <span class="underline">I</span>mage
          </li>
          <li class="nav-item">
            <span class="underline">O</span>ptions
          </li>
          <li class="nav-item">
            <span class="underline">H</span>elp
          </li>
        </ul>
      </nav>
    </header>
    <section class="interface">
      <aside class="interface-aside">
        <ul class="aside-list">
          <li class="aside-button">
            <div class="button-bevel">
              <img src="~/assets/images/free-select.svg" />
            </div>
          </li>
          <li class="aside-button">
            <div class="button-bevel">
              <img src="~/assets/images/select.svg" />
            </div>
          </li>
          <li class="aside-button">
            <div class="button-bevel">
              <img src="~/assets/images/eraser.svg" />
            </div>
          </li>
          <li class="aside-button">
            <div class="button-bevel">
              <img src="~/assets/images/fill.svg" />
            </div>
          </li>
          <li class="aside-button">
            <div class="button-bevel">
              <img src="~/assets/images/eyedropper.svg" />
            </div>
          </li>
          <li class="aside-button">
            <div class="button-bevel">
              <img src="~/assets/images/zoom.svg" />
            </div>
          </li>
          <li class="aside-button">
            <div class="button-bevel">
              <img src="~/assets/images/pencil.svg" />
            </div>
          </li>
          <li class="aside-button">
            <div class="button-bevel">
              <img src="~/assets/images/paint.svg" />
            </div>
          </li>
          <li class="aside-button">
            <div class="button-bevel">
              <img src="~/assets/images/spraypaint.svg" />
            </div>
          </li>
          <li class="aside-button">
            <div class="button-bevel">
              <img src="~/assets/images/text.svg" />
            </div>
          </li>
          <li class="aside-button">
            <div class="button-bevel">
              <img src="~/assets/images/line.svg" />
            </div>
          </li>
          <li class="aside-button">
            <div class="button-bevel">
              <img src="~/assets/images/anchor-line.svg" />
            </div>
          </li>
          <li class="aside-button">
            <div class="button-bevel">
              <img src="~/assets/images/rectangle.svg" />
            </div>
          </li>
          <li class="aside-button">
            <div class="button-bevel">
              <img src="~/assets/images/poly.svg" />
            </div>
          </li>
          <li class="aside-button">
            <div class="button-bevel">
              <img src="~/assets/images/oval.svg" />
            </div>
          </li>
          <li class="aside-button">
            <div class="button-bevel">
              <img src="~/assets/images/pill.svg" />
            </div>
          </li>
        </ul>
        <div class="spacer"></div>
      </aside>
      <div class="interface-main">
        <div id="screen"></div>
        <h1>VIDEO</h1>
        <div class="static background">
          <div class="water background"></div>
          <svg>
            <filter id="turbulence" x="0" y="0" width="100%" height="100%">
              <feTurbulence id="waves" numOctaves="1" seed="10" baseFrequency="1 1"></feTurbulence>
              <feDisplacementMap scale="13" in="SourceGraphic"></feDisplacementMap>
              <animate xlink:href="#waves" attributeName="baseFrequency" dur="60s" 
              keyTimes="0; 0.5; 1" values="0.02 0.06; 0.04 0.08; 0.02 0.06" repeatCount="indefinite"/>
            </filter>
          </svg>
        </div>
      </div>
      <div class="interface-scroll">
        <div class="scroll scroll-up">
          <div class="button-bevel">
              <font-awesome-icon :icon="['fa-solid', 'fa-up-long']" size="xs" inverse />
            </div>
        </div>
        <div class="scroll scrollbar"></div>
        <div class="scroll scroll-down">
          <div class="button-bevel">
              <font-awesome-icon :icon="['fa-solid', 'fa-down-long']" size="xs" inverse />
            </div>
        </div>
      </div>
    </section>
    <section class="color-palette">
      <div class="selected-colors">
        <div class="color color-primary"></div>
        <div class="color color-secondary"></div>
      </div>
      <div class="color color-1"></div>
      <div class="color color-2"></div>
      <div class="color color-3"></div>
      <div class="color color-4"></div>
      <div class="color color-5"></div>
      <div class="color color-6"></div>
      <div class="color color-7"></div>
      <div class="color color-8"></div>
      <div class="color color-9"></div>
      <div class="color color-10"></div>
      <div class="color color-11"></div>
      <div class="color color-12"></div>
      <div class="color color-13"></div>
      <div class="color color-14"></div>
      <div class="color color-15"></div>
      <div class="color color-16"></div>
      <div class="color color-17"></div>
      <div class="color color-18"></div>
      <div class="color color-19"></div>
      <div class="color color-20"></div>
      <div class="color color-21"></div>
      <div class="color color-22"></div>
      <div class="color color-23"></div>
      <div class="color color-24"></div>
      <div class="color color-25"></div>
      <div class="color color-26"></div>
      <div class="color color-27"></div>
      <div class="color color-28"></div>
    </section>
  </main>
</template>

<style lang='scss'>
  $colorPrimary: #f580ff;
  $colorSecondary: #f4c8ff;
  $colorSecondary-alt: #f6e1fb;
  $colorTertiary: #a054da;
  $colorQuaternary: #6e21a9;
  $colorPalette: #D15234, #E75B5F, #EF7E8A, #EF9DA3, #FD57AE, #E6709C, #E66798, #D68CD5, #B483C0, #b391d1, #A889D0, #9778C5, #8979C9, #7779C3,
  #4D86A8, #3E8DD2, #188FBA, #019CBD, #0099B0, #0FA6B3, #0CA2AF, #17A9BA, #4FB9C4, #63ACAF, #A6B4AD, #C7AE96, #B8BF7C, #CEE7B4;

  body {
    margin: 0;
  }

  main {
    position: relative;
    z-index: 9;
    background-color: $colorSecondary-alt;
    border: outset 4px $colorPrimary;
  }

  .header-items {
    display: flex;
    align-items: center;
    background-color: $colorSecondary;
    margin: 0;
    padding: 0;

    .header-item {
      display: inline-block;

      &:last-of-type {
        margin-left: auto;
      }
    }

    .svg-inline--fa {
      filter: drop-shadow(1px 1px 1px darken($colorTertiary, 20%));
    }

    .app-icon {
      padding: 8px;
      margin: 0 4px;
    }

    .app-title {
      color: $colorQuaternary;
    }
  }

  .options-buttons {
    list-style-type: none;
    margin: 0;
    padding: 0;

    .option-button {
      display: inline-block;
      background-color: white;
      border: outset 3px white;
      padding: 0px;

      .button-bevel {
        background-color: $colorSecondary;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        
        img {
          filter: drop-shadow(1px 1px 1px darken($colorTertiary, 20%));
        }
      }
    }
  }

  .navigiation {
    background-color: $colorSecondary-alt;
    list-style-type: none;
    margin: 0;
    padding: 8px 12px;

    .nav-item {
      color: $colorQuaternary;
      display: inline-block;
      margin-right: 12px;

      .underline {
        text-decoration: underline;
      }
    }
  }

  .interface {
    position: relative;
    display: flex;
    height: calc(100vh - 152px);

    .interface-aside {
      position: relative;
      background-color: $colorSecondary-alt;
      margin: 0;
      padding: 2px 6px 24px 4px;

      &:before {
        content: '';
        display: block;
        background-color: darken($colorSecondary-alt, 10%);
        width: calc(100% + 4px);
        height: 1px;
        margin-top: -2px;
        margin-bottom: 3px;
      }
      
      &:after {
        content: '';
        display: block;
        background-color: darken($colorSecondary-alt, 10%);
        width: 1px;
        height: calc(100vh - 153px);
        position: absolute;
        top: 1px;
        right: 2px;
      }

      .aside-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;

        .aside-button {
          display: inline-block;
          background-color: white;
          border: outset 3px white;
          padding: 0px;

          .button-bevel {
            background-color: $colorSecondary;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
          }
        }
      }

      .spacer {
        position: relative;
        height: calc(100% - 283px);
        margin: 4px 0;
        background-color: white;
        border: inset 3px white;

        &:before {
          content: '';
          display: block;
          background-color: $colorSecondary-alt;
          width: 100%;
          height: 100%;
        }
      }
    }

    .interface-main {
      position: relative;
      flex: 1;
      overflow: hidden;

      h1 {
        font-family: "vcr_osd_monoregular", monospace;
        font-size: 48px;
        color: white;
        text-shadow: -3px 2px #4D86A8;
        position: absolute;
        z-index: 10000;
        right: 8px;
        margin: 16px 0;
      }
    }

    .interface-scroll {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 34px;
      background-image: url('~/assets/images/grid.svg');
      background-color: $colorSecondary-alt;
      overflow: hidden;

      .scroll-up,
      .scroll-down {
        display: inline-block;
        background-color: white;
        border: outset 3px white;
        padding: 0px;

        .button-bevel {
          background-color: $colorSecondary;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          
          .svg-inline--fa {
            filter: drop-shadow(1px 1px 1px darken($colorTertiary, 20%));
          }
        }
      }

      .scrollbar {
        position: absolute;
        top: 34px; // max: 129px;
        background-color: $colorSecondary-alt;
        width: 34px;
        height: calc(100% - 25%);
        transition: top 0.2s ease-in-out;
        box-shadow: 1px 1px 1px $colorTertiary;
      }
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 4px;
      display: block;
      background-color: darken($colorSecondary-alt, 10%);
      width: 72px;
      height: 1px;
    }
  }

  .background {
    background-image: url('assets/images/vaporwave-water.jpg');
    background-color: pink;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: -5px;
    width: 125%;
    height: 125%
  }

  .static {
    height: 100vh;

    .water {
      height: 100%;
      filter: url("#turbulence");
    }
  }

  .color-palette {
    display: grid;
    grid-template-areas:
      'selected color-1 color-2 color-3 color-4 color-5 color-6 color-7 color-8 color-9 color-10 color-11 color-12 color-13 color-14'
      'selected color-15 color-16 color-17 color-18 color-19 color-20 color-21 color-22 color-23 color-24 color-25 color-26 color-27 color-28';
    gap: 4px;
    padding: 12px 4px;
    background-color: $colorSecondary-alt;
    width: 51%;

    .selected-colors {
      position: relative;
      grid-area: selected;
      width: 48px;
      background-image: url('~/assets/images/grid.svg');
      background-color: $colorSecondary-alt;
      border: inset 3px white;
      padding: 8px;

      .color {
        border: outset 3px $colorSecondary-alt;

        &-secondary {
          position: absolute;
          bottom: 8px;
          right: 8px;
        }
      }
    }

    .color {
      height: 26px;
      width: 26px;
      border: inset 3px white;
    }

    @for $i from 1 through length($colorPalette) {
      .color-#{$i} {
        grid-area: color-#{$i};
        background-color: nth($colorPalette, $i);
      }
    }
  }


canvas {
	position: absolute;
	left: 0;
	top: 0;
	z-index: 9998;
	// background-color: #fff;
	width: 100%;
	height: 100%;
	
	&.snow {
		background-color: #aaa;
		opacity: 0.2;
	}
}

#screen {
	width: 100%;
	height: 100%;
	background: transparent
		linear-gradient(to bottom, #85908c 0%, #323431 100%)
		repeat
		scroll
		0
		0;
	background-size: cover;
}

$screen-background: #121010;


@mixin pseudo {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	content: "";
}

@mixin fill {
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;	
}

.screen-container {
		width: 640px;
		height: 360px;
	overflow: hidden;
	position: relative;
}

.screen-wrapper {
	position: relative;
	width: 100%;
	height: 100%;
}

.vcr {
	opacity: 0.6
}

.video {
	filter: blur(1px);
	width: 100%;
	height: 100%;	
}

.image {
	width: 100%;
	height: auto;
	filter: blur(1.2px);
}

.scanlines {
	@include fill;
	z-index: 9999;
	background: linear-gradient(
			transparentize($screen-background, 1) 50%,
			transparentize(darken($screen-background, 10), 0.75) 50%
		),
		linear-gradient(
			90deg,
			transparentize(#ff0000, 0.94),
			transparentize(#00ff00, 0.98),
			transparentize(#0000ff, 0.94)
		);
	background-size: 100% 2px, 3px 100%;
	pointer-events: none;
}

.glitch {
	animation: 5s ease 2000ms normal none infinite running glitch;
}

@keyframes glitch {
	30% {
	}
	40% {
		opacity: 1;
		transform: scale(1, 1);
		transform: skew(0, 0);
	}
	41% {
		opacity: 0.8;
		transform: scale(1, 1.2);
		transform: skew(80deg, 0);
	}
	42% {
		opacity: 0.8;
		transform: scale(1, 1.2);
		transform: skew(-50deg, 0);
	}
	43% {
		opacity: 1;
		transform: scale(1, 1);
		transform: skew(0, 0);
	}
	65% {
	}
}

@keyframes glitch1 {
	0% {
		transform: translateX(0);
	}
	30% {
		transform: translateX(0);
	}
	31% {
		transform: translateX(10px);
	}
	32% {
		transform: translateX(0);
	}
	98% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(10px);
	}
}

.text span:nth-child(2) {
	animation: glitch2 1s infinite;
}

@keyframes glitch2 {
	0% {
		transform: translateX(0);
	}
	30% {
		transform: translateX(0);
	}
	31% {
		transform: translateX(-10px);
	}
	32% {
		transform: translateX(0);
	}
	98% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-10px);
	}
}

.overlay .text {
	animation: 5s ease 2000ms normal none infinite running glitch;
}

.on > .screen-wrapper {
	animation: 3000ms linear 0ms normal forwards 1 running on;
}

.off > .screen-wrapper {
	animation: 750ms
		cubic-bezier(0.230, 1.000, 0.320, 1.000)
		0ms
		normal
		forwards
		1
		running
		off;
}

@keyframes on {
	0% {
		transform: scale(1, 0.8) translate3d(0, 0, 0);
		filter: brightness(4);
		opacity: 1;
	}
	3.5% {
		transform: scale(1, 0.8) translate3d(0, 100%, 0);
	}
	3.6% {
		transform: scale(1, 0.8) translate3d(0, -100%, 0);
		opacity: 1;
	}
	9% {
		transform: scale(1.3, 0.6) translate3d(0, 100%, 0);
		filter: brightness(4);
		opacity: 0;
	}
	11% {
		transform: scale(1, 1) translate3d(0, 0, 0);
		filter: contrast(0) brightness(0);
		opacity: 0;
	}
	100% {
		transform: scale(1, 1) translate3d(0, 0, 0);
		filter: contrast(1) brightness(1.2) saturate(1.3);
		opacity: 1;
	}
}

@keyframes off {
	0% {
		transform: scale(1, 1);
		filter: brightness(1);
	}
	40% {
		transform: scale(1, 0.005);
		filter: brightness(100);
	}
	70% {
		transform: scale(1, 0.005);
	}
	90% {
		transform: scale(0.005, 0.005);
	}
	100% {
		transform: scale(0, 0);
	}
}

.dg.ac {
	z-index: 10000 !important;
}

</style>

<script>
import FreeSelect from '~/assets/images/free-select.svg?inline';
import Water from '~/assets/images/vaporwave-water.jpg';
var dat;
if (process.browser) {
  require('dat.gui')
}

export default {
  data() {
    return {
      parent: null,
      rect: null,
      nodes: {},
      config: {
        effects: {
          image: {
            enabled: true,
            options: {
              src: Water,
              blur: 1.2
            }
          },
          scanlines: {
            enabled: true
          },
          vcr: {
            enabled: true,
            options: {
              opacity: 1,
              miny: 220,
              miny2: 220,
              num: 70,
              fps: 60,
              ctx: null,
              width: null,
              height: null
            }
          },
          snow: {
            enabled: true,
            options: {
              opacity: 0.2
            }			
          },
        },
      },
      effects: {},
      dat,
      vcrInterval: null,
      snowframe: null
    }
  },
  components: { FreeSelect },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    renderTail(ctx, x, y, radius) {
      const n = this.getRandomInt(1, 50);
      const dirs = [1, -1];
      let rd = radius;
      const dir = dirs[Math.floor(Math.random() * dirs.length)];

      for (let i = 0; i < n; i++) {
        const step = 0.01;
        let r = this.getRandomInt((rd -= step), radius);
        let dx = this.getRandomInt(1, 4);

        radius -= 0.1;
        dx *= dir;
        ctx.fillRect((x += dx), y, r, r);
        ctx.fill();
      }
    },
    renderTrackingNoise(radius = 2, xmax, ymax) {
      const canvas = this.config.effects.vcr.node;
      const config = this.config.effects.vcr.options;
      const ctx = config.ctx;
      let posy1 = config.miny || 0;
      let posy2 = config.maxy || ymax;
      let posy3 = config.miny2 || 0;
      const num = config.num || 20;	
      
      canvas.style.filter = `blur(${config.blur}px)`;
      ctx.clearRect(0, 0, xmax, ymax);
      ctx.fillStyle = `white`;
      ctx.beginPath();

      for (let i = 0; i <= num; i++) {
        let x = Math.random(i) * xmax;
        let y1 = this.getRandomInt(posy1+=3, posy2);
        let y2 = this.getRandomInt(0, posy3-=3);
        ctx.fillRect(x, y1, radius, radius);
        ctx.fillRect(x, y2, radius, radius);
        ctx.fill();

        this.renderTail(ctx, x, y1, radius);
        this.renderTail(ctx, x, y2, radius);
      }
      ctx.closePath();
    },
    generateSnow(snow) {
      const config = snow.options || this.config.effects.snow.options;
      let w = config.width || 100;
      let h = config.height || 100;
      let d = config.ctx.createImageData(w, h);
      let b = new Uint32Array(d.data.buffer);
      let len = b.length;

      for (var i = 0; i < len; i++) {
        b[i] = ((255 * Math.random()) | 0) << 24;
      }
      config.ctx.putImageData(d, 0, 0);
    },
    animate(ctx) {
      this.generateSnow(ctx);
      this.snowframe = requestAnimationFrame(this.animate(ctx));
    },
    generateVCRNoise(vcr) {
      const config = vcr.options || this.config.effects.vcr.options;

      if ( config.fps >= 60) {
        cancelAnimationFrame(this.vcrInterval);
        this.renderTrackingNoise(2, config.width, config.height);
        this.vcrInterval = requestAnimationFrame(this.animate(config.ctx));
      } else {
        clearInterval(this.vcrInterval);
        this.vcrInterval = setInterval(() => {
          this.renderTrackingNoise(2, config.width, config.height);
        }, 1000 / config.fps);
      }
    },
    add(type) {
      console.log(type)
      let config = Object.assign({}, {
        fps: 30,
        blur: 1
      });
      
      if (Array.isArray(type)) {
        for (const t of type) {
          this.add(t);
        }
      }

      let node;
      let wrapper = this.nodes.wrapper2;
      let addEffect = (type, wrapper, node, options = {}) => {
        this.effects[type] = {
          wrapper,
          node,
          enabled: true,
          options
        };
      }
      
      switch(type) {
        case 'snow':
          node = document.createElement('canvas');
          node.classList.add(type);
          node.width = this.rect.width / 2;
          node.height = this.rect.height / 2;
          wrapper.appendChild(node);
          addEffect(type, wrapper, node, config);
          this.config.effects[type].options.ctx = node.getContext('2d');
          this.config.effects[type].options.width = this.rect.width / 2;
          this.config.effects[type].options.height = this.rect.height / 2;
          break;
        case 'vcr':
          node = document.createElement('canvas');
          node.classList.add(type);
          node.width = this.rect.width;
          node.height = this.rect.height;
          wrapper.appendChild(node);
          addEffect(type, wrapper, node, config);
          this.config.effects[type].options.ctx = node.getContext('2d');
          this.config.effects[type].options.width = this.rect.width;
          this.config.effects[type].options.height = this.rect.height;
          break;
        case 'scanlines':
          node = document.createElement('div');
          node.classList.add(type);
          wrapper.appendChild(node);
          addEffect(type, wrapper, node, config);
          break;
        case 'image':
          wrapper = this.parent;
          node = document.createElement('img');
          node.classList.add(type);
          node.src = this.config.effects[type].options.src;
          wrapper.appendChild(node);
          addEffect(type, wrapper, node, config);
          break;
      }

      if (type === 'snow') {
        this.animate(this.config.effects[type].options.ctx);
      } else if (type === 'vcr') {
        this.generateVCRNoise(this.config.effects[type]);
      }
    },
    onResize() {
      this.rect = this.parent.getBoundingClientRect();

      if (!!this.effects.vcr?.enabled && !!this.effects.vcr.options?.ctx) {
        this.generateVCRNoise(this.effects.vcr);
      }
    },
    initialize() {

    },
    render() {
      let gui = new this.dat.GUI();
      const f1 = gui.addFolder('Effects');
      const f2 = gui.addFolder('Snow');
      const f3 = gui.addFolder('VCR');
      const f4 = gui.addFolder('Image');
      window.addEventListener('resize', this.onResize);

      const container = document.createElement('div');
      const wrapper1 = document.createElement('div');
      const wrapper2 = document.createElement('div');
      const wrapper3 = document.createElement('div');
      this.parent = this.$refs.screen || document.getElementById('screen');
      
      container.classList.add('screen-container');
      wrapper1.classList.add('screen-wrapper');
      wrapper2.classList.add('screen-wrapper');	
      wrapper3.classList.add('screen-wrapper');
      
      this.parent.parentNode.insertBefore(container, this.parent);
      wrapper1.appendChild(wrapper2);
      wrapper2.appendChild(wrapper3);
      wrapper3.appendChild(this.parent);
      container.appendChild(wrapper1);
      this.nodes = {
        container,
        wrapper1,
        wrapper2,
        wrapper3
      };
      
      this.onResize();

      for (let effect in this.config.effects) {
        let type = this.config.effects[effect];
        f1.add(type, 'enabled').name(effect).onChange(bool => {
          if (bool) {
            this.add(effect, this.config.effects[effect].options);
          } else {
            this.remove(effect);
          }
        });

        console.log(this.effects[effect])
        
        if (type.options) {
          let folder = effect === 'vcr' || effect === 'video' ? f3 : f2;
          for (const p in type.options) {
            if (p === 'opacity') {
              folder.add(type.options, p).name(`${effect} opacity`).min(0).step(0.1).max(1).onChange(val => {
                this.effects[effect].node.style.opacity = val || this.config.effects[effect].options.opacity;
              });
            }

            if ( p === 'miny' ) {
              folder.add(type.options, p).name(`tracking`).min(0).step(0.1).max(400).onChange(val => {
                this.effects[effect].options.miny = val || this.config.effects[effect].options.miny;
                this.effects[effect].options.miny2 = val ? 400 - val : 400 - this.config.effects[effect].options.val;
              });
            }
            
            if (p === 'num') {
              folder.add(type.options, p).name(`tape age`).min(1).step(0.1).max(100).onChange(val => {
                this.effects[effect].options.num = val || this.config.effects[effect].options.num;
              });
            }
            
            if (p === 'blur') {
              f4.add(type.options, p).name(`blur`).min(1).step(0.1).max(5).onChange(val => {
                if ( effect === "vcr" ) {
                  this.effects[effect].options.blur = val || this.config.effects[effect].options.blur;
                } else {
                  this.effects[effect].node.style.filter = val ? `blur(${val}px)` : `blur(${this.config.effects[effect].options}px)`;
                }
              });
            }				
          }
        }
      }

      f1.open();
      f2.open();
      f3.open();
      f4.open();

      setTimeout(() => {
        for (const prop in this.config.effects) {
          if (!!this.config.effects[prop].enabled) {
            this.add(prop, this.config.effects[prop].options);
          }
        }
      }, 1000);
    }
  },
  watch: {
    dat: function(value) {
      this.render();
    }
  },
  mounted() {
    if (window) {
      const init = async() => {
        this.dat = await import('dat.gui');
      }
      init();
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  }
};
</script>