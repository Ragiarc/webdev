<template>
<div class="wrapper">
    <main>
    <div class = "left">
    <h1>AWS</h1>
    <p>&emsp;&emsp;AWS does a lot of things, but I've had experience using DynamoDB, Lambdas, SQS, and S3 buckets.<br>
    &emsp;&emsp;Using these tools I created an Android twitter clone capable of updating the feeds of 10000 users in under 2 minutes. The app also demonstrates proper
    storage of sensitive user information utilizing salting and hashing algorithms.<br>
    </p>
    <img src="../assets/tweeter.jpg" class = "panelImg"/>
    
    </div>
    <div class = "right">
        <img src="../assets/tweeter2.jpg" class = "panelImg" id="phone"/>
    </div>
    </main>
</div>

</template>

<script>
// import cogger1 from "../assets/Cogger1.PNG"

export default {
  name: 'AWSView',
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
  background-color: #69936c;
}

main {
    margin: 10px;
    margin-left: 35px;
    display: flex;
    flex:.9;
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
    flex-direction: row;
    flex:1
}

.panelImg {
    margin:20px;
    max-width: 40vw;
    height: auto;
}

#phone {
    margin-left: 10vw;
    max-width: 20vw;
    height: auto;
}

#tags {
    /* color: grey; */
    opacity: 75%;
    font-weight: 500;
    flex:.1;
    align-self: flex-start;
    margin-left: 35px;
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
#phone {
    max-width: 40vw;
    height: auto;
}
}





</style>
