<template>
  <wrapper>
  <div class="panel">
    <div class="greeting">
      <h1>Hey there!</h1>
      <p>
        I'm graduating from BYU in April 2023 with a Computer Science degree. 
        <br>Mixed Reality
        and Artificial Intelligence are my passion, and making it all work with
        clean, maintainable software is a delight.
      <br>
        To learn more about the skills I bring to the table, select a category
        below.
      </p>
      <div id="quick">
        <ul>
          <li>GPA: 3.5</li>
          <li>Languages: C, C++, C#, Java, Python, JavaScript</li>
          <li>Employment: Mixed Reality Lab Assistant</li>
        </ul>
      </div>
    </div>

      <div class="hero">
        <img src="../assets/Aug2022-croppedMore.jpg" class = "panelImg"/>
      </div>
    </div>
    <div class="submenu" style="--items: 2">
      <router-link class="menuItem" to="/backend">Backend</router-link>
      <router-link class="menuItem" to="/mr">VR/AR</router-link>
      <router-link class="menuItem" to="/test">Testing</router-link>
      <router-link class="menuItem" to="/web">Front End</router-link>
      <span class="line"></span>
    </div>
  </wrapper>
</template>

<script>
export default {
  name: "HeroView",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  color:#97f19d;
  margin-bottom: 1vh;
}
p {
  font-weight: 400;
  font-size: 1.25em;
  line-height: 2;
}

strong {
  color: #42b983;
}

#quick {
  font-weight: 300;
  font-size: .75em;
  line-height: 1.5;
}

.panel {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-content: center;
  align-items: center;
  color: aliceblue;
}

.panelImg {
  max-width: 22vw;
  height: auto;
}

.submenu {
  display: flex;
  justify-content: center;
  background-color: #123;
	background-image: linear-gradient(to bottom, #0003, transparent);
	border-bottom: 1px solid #0003;
	box-shadow: 0 0 32px #0003;
	font-size: 1em;
	font-weight: 100;
}

.menuItem {
	color: #9ab;
	padding: .75em;
	text-align: center;
	text-decoration: none;
	transition: all .5s;
}
.menuItem:hover {
	background: #ffffff06;
	color: #adf;
}
.submenu > .line {
	background: #68a;
	height: 1px;
	pointer-events: none;
}

.submenu > .line {
	opacity: 0;
	transition: all .5s;
	position: absolute;
	bottom: 0;
	left: var(--left, calc(100% / var(--items) * (var(--index) - 1)));
	width: var(--width, calc(100% / var(--items)));
	--index: 0;
}
.submenu > .menuItem:hover ~ .line {
	opacity: 1;
}

.links > a:nth-of-type(1):hover ~ .line { --index: 1; }
.links > a:nth-of-type(2):hover ~ .line { --index: 2; }
.links > a:nth-of-type(3):hover ~ .line { --index: 3; }
.links > a:nth-of-type(4):hover ~ .line { --index: 4; }
.links > a:nth-of-type(5):hover ~ .line { --index: 5; }
.links > a:nth-of-type(6):hover ~ .line { --index: 6; }
.links > a:nth-of-type(7):hover ~ .line { --index: 7; }
.links > a:nth-of-type(8):hover ~ .line { --index: 8; }
.links > a:nth-of-type(9):hover ~ .line { --index: 9; }
.links > a:nth-of-type(10):hover ~ .line { --index: 10; }
.links > a:last-of-type:hover ~ .line { --index: var(--items); }


.greeting {
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5vw;
  flex: .7;
}

.greeting h1 {
  text-align: left;
  justify-self: flex-start;
  align-self: flex-start;
  font-size: 3em;
}

.glowey {
  flex: .65;
  margin-top: 15vh;
  margin-bottom: 5vh;
  box-shadow: inset 0 0 50px #fff, /* inner white */ inset 20px 0 80px #f0f,
    /* inner left magenta short */ inset -20px 0 80px #0ff,
    /* inner right cyan short */ inset 20px 0 300px #f0f,
    /* inner left magenta broad */ inset -20px 0 300px #0ff,
    /* inner right cyan broad */ 0 0 50px #fff,
    /* outer white */ -10px 0 80px #f0f,
    /* outer left magenta */ 10px 0 80px #0ff; /* outer right cyan */
  max-width: fit-content;
  height: fit-content;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero {
  margin: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.hero p {
  font-weight: 800;
  font-size: 1.5em;
  line-height: 1.5;
  color: #c9c5ba;
  text-size-adjust: auto;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 8px;
}

.inline {
  display: inline;
  font-size: 1.5em;
  /* line-height: .5; */
}

a {
  font-weight: 800;
  font-size: 1.5em;
  color: #c9c5ba;
  text-decoration: none;
}

a:hover {
  color: #0ff;
}

a.router-link-active {
  color: #42b983;
}

@media only screen and (max-width: 450px) {
  .wrapper {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-content: center;
    align-items: center;
    color: aliceblue;
  }
  .hero {
    margin: 10vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .hero p {
    font-weight: 800;
    font-size: 3vh;
    color: #c9c5ba;
    text-size-adjust: auto;
  }
}
</style>
