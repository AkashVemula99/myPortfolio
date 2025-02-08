<script>
export default {
  name: "Experience",
};
</script>

<template>
  <div class="Experience">
    <h4>Professional Experience</h4>
    <a
      >Worked as senior system engineer, Sify Digital Services (Chennai,
      TamilNadu, India)</a
    ><br />
    <a>Key working points:</a>
    <div>
      <div class="Exp">
        <img
          src="https://static-00.iconduck.com/assets.00/arrow-right-circle-icon-1024x1024-vd5nvvdh.png"
        />
        <a
          >Experienced in managing VM environments with 250+ ESXi hosts and
          4000+ virtual machines, specializing in VMware upgrades, automation
          via PowerCLI, disaster recovery, and basic AWS cloud services.</a
        >
      </div>
      <div class="Exp">
        <img
          src="https://static-00.iconduck.com/assets.00/arrow-right-circle-icon-1024x1024-vd5nvvdh.png"
        />
        <a
          >Proficient in VMware vSphere, vCenter, and ESXi administration, with
          hands-on expertise in replication, disaster recovery, firmware
          upgrades, and OS like windows & Linux.</a
        >
        <a></a>
      </div>
    </div>
  </div>
</template>

<style>
.Experience {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: antiquewhite;
  padding-left: 20%;
  padding-right: 20%;
}
.Exp {
  display: grid;
  grid-template-columns: 0.1fr 1fr 1fr 1fr;
  grid-template-areas: "expimg expa expa expa";
}

.Exp img {
  width: 25px;
  margin-right: 10px;
  grid-area: expimg;
}
.Exp a {
  grid-area: expa;
}
</style>
