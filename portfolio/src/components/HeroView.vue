<template>
  <div class="wrapper">
    <div class="greeting">
      <h1>Hey There!</h1>
      <p>
        I'm a junior at BYU getting my Computer Science degree. Mixed Reality
        and Artificial Intelligence are my passion, and making it all work with
        clean, maintainable software is a delight.
      <br>
        <strong>Select a category from the right</strong> 
        to learn more about what skills I bring to the table. 
      </p>
      <div id="quick">
        <ul>
          <li>GPA: 3.5</li>
          <li>Languages: C, C++, C#, Java, Python, JavaScript</li>
          <li>Employment: Mixed Reality Lab Assistant</li>
        </ul>
      </div>
    </div>

    <div class="glowey">
      <div class="hero">
        <div>
          <router-link to="/aws" class="inline">AWS</router-link>
          <p class="inline">&nbsp;&amp;&nbsp;</p>
          <router-link to="/sql" class="inline">SQL</router-link>
        </div>
        <router-link to="/mr">Mixed Reality</router-link>
        <div>
          <router-link to="/ue4" class="inline">Unreal Engine</router-link>
        </div>
        <router-link to="/test">Testing &amp; Verification</router-link>
        
        <router-link to="/web">Web Design</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroView",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  /* color:#0ff; */
  margin-bottom: .1vh;
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

.wrapper {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-content: center;
  align-items: center;
  color: aliceblue;
}

.greeting {
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5vw;
  flex: .35;
}

.greeting h1 {
  text-align: left;
  justify-self: flex-start;
  align-self: flex-start;
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
