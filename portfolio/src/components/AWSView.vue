<template>
<div class="wrapper">
    <main>
    <div class = "left">
    <h1>AWS</h1>
    <p>&emsp;&emsp;AWS does a lot of things, but I've had experience using DynamoDB, Lambdas, and SQS, and S3 buckets.<br>
    &emsp;&emsp;Using these tools I created an Android twitter clone capable of updating the feeds of 10000 users in under 2 minutes. The app also demonstrates proper
    storage of sensitive user information utilizing salting and hashing algorithms.<br>
    </p>
    <img src="../assets/tweeter.jpg" class = "panelImg"/>
    
    </div>
    <div class = "right">
        <img src="../assets/tweeter2.jpg" class = "panelImg" id="phone"/>
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
  background-color: #A4303F;
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
    width: 40vw;
    height: 100%;
}

#phone {
    width: 20vw;
    height: 100%;
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





</style>
