<template>
  <main>
    <header class="header">
      <ul class="header-items">
        <li class="header-item app-icon">
          <font-awesome-icon :icon="['fa-solid', 'fa-wand-sparkles']" size="xs" inverse />
        </li>
        <li class="header-item app-title">Courtney Mohr - Paint</li>
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
      <div ref="interfaceMain" class="interface-main">
        <div id="screen"></div>
        <div class="screen-content">
          <h2 class="play">PLAY <font-awesome-icon :icon="['fa-solid', 'fa-play']" size="xs" inverse /></h2>
          <h1 id="text">Lemonade Crunchy Ice</h1>
          <h2 class="marker">0:00:01</h2>
        </div>
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
      <div ref="interfaceScroll" class="interface-scroll">
        <div class="scroll scroll-up" @mousedown="manualScroll('up')" @click="manualScroll('up', true)">
          <div class="button-bevel">
              <font-awesome-icon :icon="['fa-solid', 'fa-up-long']" size="xs" inverse />
            </div>
        </div>
        <div ref="scrollbar" class="scroll scrollbar"></div>
        <div class="scroll scroll-down" @mousedown="manualScroll('down')" @click="manualScroll('down', true)">
          <div class="button-bevel">
              <font-awesome-icon :icon="['fa-solid', 'fa-down-long']" size="xs" inverse />
            </div>
        </div>
      </div>
    </section>
    <section class="footer">
      <div class="color-palette">
        <div class="selected-colors">
          <div class="color color-primary" :style="`background-color: ${primaryColor};`"></div>
          <div class="color color-secondary" :style="`background-color: ${secondaryColor};`" @click="setColor"></div>
        </div>
        <div v-for="index in 28" :key="index" :class="`color color-${index}`" @click="setColor"></div>
      </div>
      <div class="footer-description">
        <p>
          <span>Built by Courtney Mohr - </span>
          <a href="https://www.linkedin.com/in/courtneymohr/" target="_blank" title="Follow Courtney Mohr on Linkedin">
            <font-awesome-icon :icon="['fa-brands', 'fa-linkedin']" size="xs" inverse />
          </a>
        </p>
        <p class="footer-caption">Be gentle, I'm a work in progress.</p>
      </div>
    </section>
  </main>
</template>

<style lang='scss'>
  $screen-background: #121010;
  $offset: 6px;
  $bgcolor: #111;
  $blue: hsl(202, 37%, 48%);
  $pink: hsl(288, 100%, 89%);
  $pinkDarken15: hsl(288, 100%, 75%);
  $pinkLighten4: hsl(288, 100%, 93%);
  $purple: hsl(274, 64%, 59%);
  $purpleDarken19: hsl(274, 64%, 40%);
  $colorPalette: #D15234, #E75B5F, #EF7E8A, #EF9DA3, #FD57AE, #E6709C, #E66798, #D68CD5, #B483C0, #b391d1, #A889D0, #9778C5, #8979C9, #7779C3,
  #4D86A8, #3E8DD2, #188FBA, #019CBD, #0099B0, #0FA6B3, #0CA2AF, #17A9BA, #4FB9C4, #63ACAF, #A6B4AD, #C7AE96, #B8BF7C, #CEE7B4;

  @mixin animation($animate...) {
    $max: length($animate);
    $animations: '';

    @for $i from 1 through $max {
        $animations: #{$animations + nth($animate, $i)};

        @if $i < $max {
            $animations: #{$animations + ', '};
        }
    }
    -webkit-animation: $animations;
    -moz-animation:    $animations;
    -o-animation:      $animations;
    animation:         $animations;
  }

  @mixin keyframes($animationName) {
      @-webkit-keyframes #{$animationName} {
          @content;
      }
      @-moz-keyframes #{$animationName} {
          @content;
      }
      @-o-keyframes #{$animationName} {
          @content;
      }
      @keyframes #{$animationName} {
          @content;
      }
  }

  @mixin transform($value){
    -webkit-transform: $value;
    -moz-transform: $value;
    -ms-transform: $value;
    -o-transform: $value;
    transform: $value;
  }

  @mixin opacity($value) {
    $IEValue: $value*100;
    opacity: $value;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity='+$IEValue+')';
    filter: alpha(opacity=$IEValue);
  }

  @mixin pseudo {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @mixin fill {
    position: absolute;
    top: 0;	
    left: 0;
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    width: 100%;
  }

  main {
    position: relative;
    z-index: 9;
    background-color: $pinkLighten4;
    border: outset 4px $pinkDarken15;
  }

  .header-items {
    display: flex;
    align-items: center;
    background-color: $pink;
    margin: 0;
    padding: 0;

    .header-item {
      display: inline-block;

      &:last-of-type {
        margin-left: auto;
      }
    }

    .svg-inline--fa {
      filter: drop-shadow(1px 1px 1px darken($purple, 20%));
    }

    .app-icon {
      padding: 8px;
      margin: 0 4px;
    }

    .app-title {
      color: $purpleDarken19;
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
        background-color: $pink;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        
        img {
          filter: drop-shadow(1px 1px 1px darken($purple, 20%));
        }
      }
    }
  }

  .navigiation {
    background-color: $pinkLighten4;
    list-style-type: none;
    margin: 0;
    padding: 8px 12px;

    .nav-item {
      color: $purpleDarken19;
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
      background-color: $pinkLighten4;
      margin: 0;
      padding: 2px 6px 24px 4px;

      &:before {
        content: '';
        display: block;
        background-color: darken($pinkLighten4, 10%);
        width: calc(100% + 4px);
        height: 1px;
        margin-top: -2px;
        margin-bottom: 3px;
      }
      
      &:after {
        content: '';
        display: block;
        background-color: darken($pinkLighten4, 10%);
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
            background-color: $pink;
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
          background-color: $pinkLighten4;
          width: 100%;
          height: 100%;
        }
      }
    }

    .interface-main {
      position: relative;
      flex: 1;
      overflow: hidden;

      .screen-content {
        position: relative;
        height: calc(100vh - 152px);

        h1 {
          position: relative;
          top: 40%;
          left: 16px;
          z-index: 10000;
          margin: 8px 0;
          width: 100%;
          font-family: 'vcr_osd_monoregular', monospace;
          font-size: 88px;
          text-align: center;
          color: $pinkLighten4;
          text-shadow: -3px 2px $blue;
          opacity: 1;
          mix-blend-mode: screen;
          -webkit-filter: blur(1px);
          -moz-filter: blur(1px);
          filter: blur(1px);
          @include animation('skew 2s infinite, flash 6s infinite');
          
          &:after,
          &:before {
            content: attr(data-text);
            position: absolute;
            mix-blend-mode: screen;
          }

          &:after {
            top: 0;
            left: $offset;
            color: blue;
            @include animation('move 1.5s infinite');
          }

          &:before {
            top: -0.4*$offset;
            left: 0.6*$offset;
            color: limegreen;
          }
        }

        h2 {
          position: absolute;
          left: 16px;
          z-index: 10000;
          margin: 8px 0;
          width: 100%;
          font-family: 'vcr_osd_monoregular', monospace;
          font-size: 48px;
          color: white;
          text-shadow: -3px 2px $blue;
          opacity: 0.8;

          &.play {
            top: 8px;

            .svg-inline--fa {
              width: 24px;
              filter: drop-shadow(-3px 2px $blue);
            }
          }

          &.marker {
            bottom: 8px;
          }
        }
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
      background-color: $pinkLighten4;
      overflow: hidden;

      .scroll-up,
      .scroll-down {
        display: inline-block;
        background-color: white;
        border: outset 3px white;
        padding: 0px;

        .button-bevel {
          background-color: $pink;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          
          .svg-inline--fa {
            filter: drop-shadow(1px 1px 1px darken($purple, 20%));
          }
        }
      }

      .scrollbar {
        position: absolute;
        top: 34px; // max: 129px;
        background-color: $pinkLighten4;
        width: 34px;
        height: calc(100% - 25%);
        transition: top 0.2s ease-in-out;
        box-shadow: 1px 1px 1px $purple;
      }
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 4px;
      display: block;
      background-color: darken($pinkLighten4, 10%);
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
      filter: url('#turbulence');
    }
  }

  .color-palette {
    display: grid;
    grid-template-areas:
      'selected color-1 color-2 color-3 color-4 color-5 color-6 color-7 color-8 color-9 color-10 color-11 color-12 color-13 color-14'
      'selected color-15 color-16 color-17 color-18 color-19 color-20 color-21 color-22 color-23 color-24 color-25 color-26 color-27 color-28';
    gap: 4px;
    padding: 12px 4px;
    background-color: $pinkLighten4;
    width: 51%;
    max-width: 590px;

    .selected-colors {
      position: relative;
      grid-area: selected;
      width: 48px;
      background-image: url('~/assets/images/grid.svg');
      background-color: $pinkLighten4;
      border: inset 3px white;
      padding: 8px;

      .color {
        border: outset 3px $pinkLighten4;
        cursor: pointer;

        &-primary {
          position: relative;
          z-index: 999;
        }

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
      cursor: url('~/assets/images/cursor-eyedropper.svg'), auto;
    }

    @for $i from 1 through length($colorPalette) {
      .color-#{$i} {
        grid-area: color-#{$i};
        background-color: nth($colorPalette, $i);
      }
    }
  }

  .screen-container {
    position: absolute;
    top: 0;
    left: -5px;
    width: 125%;
		height: 100vh;
    overflow: hidden;

    .screen-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      #screen {
        width: 100%;
        height: 100%;

        .image {
          width: 100%;
          height: auto;
          filter: blur(1.2px);
        }
      }

      canvas {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9998;
        width: 100%;
        height: 100%;
        
        &.snow {
          background-color: $pinkLighten4;
          opacity: 0.1;
        }
      }
    }
    
    .vcr {
      opacity: 0.6
    }
  
    .scanlines {
      pointer-events: none;
      @include fill;
      z-index: 9999;
    }
  }

  #root {
    position: absolute;
    top: 50%;
    left: 50%;
    @include transform(translateY(-50%) translateX(-50%));
  }

  .line {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background: blue;
    mix-blend-mode: screen;
    -webkit-filter: blur(1px);
    -moz-filter: blur(1px);
    filter: blur(1px);

    &:after,
    &:before {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 1px;
      mix-blend-mode: screen;
    }

    &:after{
      top: 2px;
      background: red;
    }

    &:before{
      top: -2px;
      background: limegreen;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .footer-description,
    a,
    .fa-inverse {
      color: $purpleDarken19;
    }

    .footer-description {
      padding: 0 16px;
      line-height: 0.2;
      text-align: right;
    }

    .footer-caption {
      font-size: 0.78rem;
    }

    .fa-inverse {
      font-size: 1rem;
      position: relative;
      top: 2px;
    }
  }

  @include keyframes(skew) {
    0%    { @include transform(none) }
    30%   { @include transform(none) }
    30.2% { @include transform(skewX(50deg)) }
    30.4% { @include transform(skewX(-50deg)) }
    31%   { @include transform(none) }
  }

  @include keyframes(move) {
    0%   { @include transform(none); }
    30%  { @include transform(none); }
    31%  { @include transform(translateX(-$offset)) }
    33%  { @include transform(none); }
    98%  { @include transform(none); }
    100% { @include transform(translateX($offset)) }
  }

  @include keyframes(flash) {
    0%   { @include opacity(1) }
    50%  { @include opacity(0.8) }
  }

  @include keyframes(lines) {
    0%   { @include opacity(0.1) }
    50%  { @include opacity(1) }
  }

</style>

<script>
  import FreeSelect from '~/assets/images/free-select.svg?inline';
  var dat; // declare so we can get this shit mounted
  if (process.browser) {
    require('dat.gui')
  }

  export default {
    data() {
      return {
        dat: null,
        screen: null,
        gui: null,
        config: {
          effects: {
            roll: {
              enabled: false,
              options: {
                speed: 1000
              }
            },
            image: {
              enabled: true,
              options: {
                src: './images/vaporwave-water.jpg',
                blur: 1.2
              }
            },
            vignette: { enabled: true },
            scanlines: { enabled: true },
            vcr: {
              enabled: true,
              options: {
                opacity: 1,
                miny: 220,
                miny2: 220,
                num: 70,
                fps: 60
              }
            },
            wobbley: { enabled: true },
            snow: {
              enabled: true,
              options: {
                opacity: 0.2
              }			
            },
          },
        },
        primaryColor: '#D15234',
        secondaryColor: '#E75B5F',
        scrollbarConfig: {
          focused: false,
          initialized: false,
          mousedown: false,
          current: null,
          height: null,
          top: null,
          bottom: null
        }
      }
    },
    components: { FreeSelect },
    methods: {
      render() {
        this.screen = new this.$ScreenEffect('#screen', {});
        this.gui = new this.dat.GUI();
        this.gui.hide();

        const f1 = this.gui.addFolder('Effects');
        const f2 = this.gui.addFolder('Snow');
        const f3 = this.gui.addFolder('VCR');
        const f4 = this.gui.addFolder('Roll');
        const f5 = this.gui.addFolder('Image');

        for ( const effect in this.config.effects ) {
          const type = this.config.effects[effect];
          f1.add(type, 'enabled').name(effect).onChange(bool => {
            if ( bool ) {
              this.screen.add(effect, config.effects[effect].options);
            } else {
              this.screen.remove(effect);
            }
          });
          
          if ( type.options ) {
            let folder = effect === 'vcr' || effect === 'video' ? f3 : f2;
            for ( const p in type.options ) {
              
              if ( p === 'speed' ) {
                f4.add(type.options, p).min(100).step(1).max(10000).onChange(val => {
                  this.screen.effects[effect].node.style.animationDuration = `${val}ms`;
                });
              }
              
              if ( p === 'opacity' ) {
                folder.add(type.options, p).name(`${effect} opacity`).min(0).step(0.1).max(1).onChange(val => {
                  this.screen.effects[effect].node.style.opacity = val;
                });
              }
              
              if ( p === 'miny' ) {
                folder.add(type.options, p).name(`tracking`).min(0).step(0.1).max(400).onChange(val => {
                  this.screen.effects[effect].config.miny = val;
                  this.screen.effects[effect].config.miny2 = 400 - val;
                });
              }
              
              if ( p === 'num' ) {
                folder.add(type.options, p).name(`tape age`).min(1).step(0.1).max(100).onChange(val => {
                  this.screen.effects[effect].config.num = val;
                });
              }
              
              if ( p === 'blur' ) {
                f5.add(type.options, p).name(`blur`).min(1).step(0.1).max(5).onChange(val => {
                  if ( effect === 'vcr' ) {
                    this.screen.effects[effect].config.blur = val;
                  } else {
                    this.screen.effects[effect].node.style.filter = `blur(${val}px)`;
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
        f5.open();

        setTimeout(() => {
          for ( const prop in this.config.effects ) {
            if ( !!this.config.effects[prop].enabled ) {
              this.screen.add(prop, this.config.effects[prop].options);
            }
          }
          this.screen.drawLines();
        }, 0);
      },
      setColor(e) {
        // swapping primary and secondary colors
        if (e.target.className.includes('primary') || e.target.className.includes('secondary')) {
          const pc = this.primaryColor;
          const sc = this.secondaryColor;
          this.primaryColor = sc;
          this.secondaryColor = pc;
          return;
        }

        // replacing primary color with one from the palette
        this.primaryColor = getComputedStyle(e.target).backgroundColor;
      },
      fetchScrollValues() {
        // construct scrollbar values
        // height of the scroll bar to subtract from total height
        this.scrollbarConfig.height = document.querySelector('.scrollbar').offsetHeight;
        // current computed top value, sanitized as an integer for tha maths
        this.scrollbarConfig.current = this.sanitizeUnitValue(getComputedStyle(document.querySelector('.scrollbar')).top);
        // offset by 34 to account for scroll up button
        this.scrollbarConfig.top = 34;
        // infer the safe maximum value for top property for scroll bar
        this.scrollbarConfig.bottom = this.sanitizeUnitValue(getComputedStyle(this.$refs.interfaceScroll).height) - this.sanitizeUnitValue((this.scrollbarConfig.height + 34));
      },
      scrollUp(e) {
        const scrollIncriment = typeof e === 'number' ? e : Math.abs(e.deltaY);

        if (Math.round(scrollIncriment) + Math.round(this.scrollbarConfig.current) <= this.scrollbarConfig.bottom) {
          this.scrollbarConfig.current = Math.round(this.scrollbarConfig.current) + Math.round(scrollIncriment);
        } else {
          this.scrollbarConfig.current = this.scrollbarConfig.bottom;
        }
        document.querySelector('.scrollbar').style.top = `${this.scrollbarConfig.current}px`;
      },
      scrollDown(e) {
        const scrollIncriment = typeof e === 'number' ? e : e.deltaY;

        if (Math.round(scrollIncriment) + Math.round(this.scrollbarConfig.current) <= this.scrollbarConfig.top) {
          this.scrollbarConfig.current = Math.round(this.scrollbarConfig.current) - Math.round(scrollIncriment);
        } else {
          this.scrollbarConfig.current = this.scrollbarConfig.top;
        }
        console.log('scrollbar', document.querySelector('.scrollbar'))
        document.querySelector('.scrollbar').style.top = `${this.scrollbarConfig.current}px`;
      },
      scroll(e) {
        e.preventDefault();
        e.stopPropagation();
        this.fetchScrollValues();

        console.log(e.deltaY)

        if (e.deltaY < 0) {
          this.scrollUp(e);
        } else if (e.deltaY > 0) {
          this.scrollDown(e);
        }
      },
      manualScroll(dir, click = false) {
        let interval;
        const scrollIncriment = 4;
        this.fetchScrollValues();
        
        if (!click) {
          if (dir === 'up') {
            this.scrollDown(scrollIncriment);
            interval = setInterval(() => {
              if (this.scrollbarConfig.current < this.scrollbarConfig.top) {
                this.scrollDown(scrollIncriment);
              } else {
                console.log('limit reached: clearing interval')
                clearInterval(interval);
                return;
              }
            });
          } else {
            this.scrollUp(scrollIncriment);
            interval = setInterval(() => {
              if (this.scrollbarConfig.current < this.scrollbarConfig.bottom) {
                this.scrollUp(scrollIncriment);
              } else {
                console.log('limit reached: clearing interval')
                clearInterval(interval);
                return;
              }
            });
          }
        } else {
          console.log('mouseup: clearing interval')
          clearInterval(interval);
          return;
        }
      },
      initializeScroll(e) {
        if (!this.scrollbarConfig.initialized) {
          this.scrollbarConfig.initialized = true;
          this.$refs.interfaceMain.addEventListener('wheel', this.scroll, false);
          return;
        }
      },
      sanitizeUnitValue(value) {
        value = value.toString();
        return parseInt(value.replace(/\D+/g, ''));
      }
    },
    watch: {
      dat: function(value) {
        this.render(); // only render once the dat mount succeeds
      }
    },
    mounted() {
      if (window) {
        const init = async() => {
          this.dat = await import('dat.gui'); // dynamic imports yay
          this.$refs.interfaceMain.addEventListener('mouseover', this.initializeScroll, true);
          this.$refs.interfaceMain.addEventListener('mouseleave', (e) => {
            console.log('leaving')
            this.scrollbarConfig.initialized = false;
            document.querySelector('body').style.position = 'static';
            document.querySelector('body').style['overflow-y'] = 'auto';
            this.$refs.interfaceMain.removeEventListener('scroll', this.scroll);
          });
        }
        init();
      }
    },
    beforeDestroy() {
      this.$refs.interfaceMain.removeEventListener('wheel', this.scroll);
      this.$refs.interfaceMain.removeEventListener('mouseover', this.initializeScroll);
      this.$refs.interfaceMain.removeEventListener('mouseleave', this.initializeScroll);
    }
  };
</script>