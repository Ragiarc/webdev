<template>
<div class="wrapper">
    <main>
    <div class = "left">
    <h1>Azure</h1>
    <p>&emsp;&emsp;As an R&amp;D intern at <a href="https://ce21.com/">CE21</a> I reimplemented their in-house search solution. 
    By integrating with Azure Cognitive Search, the new solution saves on thousands of SQL queries, provides faster response time to clients, 
    better search results, and is easily extendable.<br>
    </p>
    
    
    </div>
    <div class = "right">
        <img src="../assets/AzureSearchCropped.png" class = "panelImg"/>
    </div>
    </main>
</div>

</template>

<script>
// import cogger1 from "../assets/Cogger1.PNG"

export default {
  name: 'AzureView',
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
    flex:1;
    margin:20px;
}

.right img {
  max-width: 30vw;
  height: auto;
}

.panelImg {
    margin-top:100px;
    max-width: 40vw;
    height: auto;
}



#azure {
  margin: top 10vh;;
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
  color: #46c2f3;
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
