<template>
<div class="wrapper">
    <main>
    <div class = "left">
    <h1>Testing &amp; Verifcation</h1>
    <p>&emsp;&emsp;I love test driven developement. <br>
    &emsp;&emsp;To prove it, I implemented a type-checking algorithm that will type check Java code. 
    To verify my implementation I used JUnit to dynamically write tests at runtime that supplied full branch coverage and mutation coverage. 
    I then created tests to test that my dynamically created tests were created and operated correctly. <br>
    </p>
    <p>&emsp;&emsp; I completed an elective in Testing &amp; Verification where we learned how to do black box and white box testing using JUnit. We also covered topics such as formal verification languages (Dafny), 
        MC/DC and mutation coverage, and weakest precondition calculus.
    </p>  

    </div>
    <div class = "right">
        <img src="../assets/testing.jpg" class = "panelImg"/>
        <img src="../assets/testing2.jpg" class = "panelImg"/>
    </div>
    </main>
    <p id="tags">Tags: Testing &amp; Verification</p>
</div>

</template>

<script>
// import cogger1 from "../assets/Cogger1.PNG"

export default {
  name: 'TestingView',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
  color: aliceblue;
  background-color: #732C2C;
}

main {
    margin: 10px;
    margin-left: 35px;
    display: flex;
    flex:.9
}

.left {
    align-self: flex-start;
    font-size: 18px;
    line-height: 1.75;
    text-align: left;
    flex:1
 
}

.right {
    display: flex;
    flex-direction: column;
    flex:1
}

.panelImg {
    margin:20px;
    width: 40vw;
    height: 100%;
}

#tags {
    /* color: grey; */
    opacity: 75%;
    font-weight: 500;
    flex:.1
}

a {
  font-weight: 800;
  color: #C9C5BA;
  text-decoration: none;
}

a:hover {
  color: #0ff;
}

@media only screen and (max-width: 450px) {
  main {
    display: flex;
    flex-direction: column;
  }

  .panelImg {
    margin:20px;
    max-width: 80vw;
    height: auto;
}
}





</style>
