<script>
export default {
  name: "Education",
};
</script>

<template>
  <div class="Education">
    <h3>Education</h3>
    <div class="Edu">
      <div class="dot"></div>
      <div class="line"></div>
      <div class="content">
        <b>Velammai institute of Technology</b><br />
        <i>Chennai, Tamilnadu, India</i><br /><a
          >Bachelor of Technology in Information Technology</a
        >
      </div>
    </div>
    <div class="Edu">
      <div class="dot"></div>
      <div class="line"></div>
      <div class="content">
        <b>University of NewHaven</b><br />
        <i>NewHaven, Connecticut, USA</i><br /><a></a>
        Masters in Data Science
      </div>
    </div>
  </div>
</template>

<style>
.Edu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.1fr 5fr;
  grid-template-areas:
    "edudot Educontent"
    "eduline Educontent";
}
.dot {
  width: 20px;
  height: 20px;
  background-color: rgb(41, 255, 126);
  border-radius: 25px;
  grid-area: edudot;
  margin-left: auto;
  margin-right: auto;
}
.line {
  height: 100%;
  width: 5px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(41, 255, 126);
  grid-area: eduline;
}
.Education {
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 20%;
  padding-right: 20%;
  color: aliceblue;
  background-color: rgb(59, 59, 59);
  h4 {
    margin-bottom: 30px;
  }
}

.content {
  grid-area: Educontent;
}
</style>
