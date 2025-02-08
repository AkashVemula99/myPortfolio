<script>
export default {
  name: "Contact",
};
</script>

<template>
  <div class="con">
    <h3>Contact</h3>
    <a>Please feel free to reach out on below details.</a>
    <div class="contact">
      <div class="contact-grid">
        <img
          src="https://static-00.iconduck.com/assets.00/email-icon-2048x1628-mzownmgf.png"
        />
        <h4>Email:</h4>
        <a>Akashvemula99@gmail.com</a>
      </div>

      <div class="contact-grid">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/003/720/476/small_2x/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg"
        />
        <h4>Phone:</h4>
        <a>(203)-887-9270</a>
      </div>
      <div class="contact-grid">
        <img src="https://cdn-icons-png.flaticon.com/512/0/619.png" />
        <h4>Location:</h4>
        <a>NewHaven, Connecticut, USA</a>
      </div>
    </div>
  </div>
</template>

<style>
.con {
  padding-top: 100px;
  padding-bottom: 100px;

  padding-left: 20%;
  padding-right: 20%;
}
.contact {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 25px;
  margin: 10px;
  min-width: 350px;
}
.contact-grid {
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-areas:
    "conimg  contitle contitle"
    "conimg  condesc condesc";
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}
.contact-grid img {
  grid-area: conimg;
  width: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}
.contact-grid h4 {
  grid-area: contitle;
}
.contact-grid a {
  grid-area: condesc;
}
</style>
