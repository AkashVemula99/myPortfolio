<script setup lang="ts">
import { ref } from "vue";
import AboutMe from "./components/AboutMe.vue";
import Contact from "./components/Contact.vue";
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue";
import Certification from "./components/Certification.vue";
import Objective from "./components/Objective.vue";

/* Scroll to section function */
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <!-- ✅ Bootstrap Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">My Portfolio</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <button class="nav-link btn" @click="scrollToSection('about')">
              About Me
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link btn" @click="scrollToSection('objective')">
              Objective
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link btn" @click="scrollToSection('education')">
              Education
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link btn"
              @click="scrollToSection('certification')"
            >
              Certifications
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link btn" @click="scrollToSection('experience')">
              Experience
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link btn" @click="scrollToSection('contact')">
              Contact
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link btn">
              <a href="files/resume_akash.docx" download>Download Resume</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- ✅ Sections with IDs for scrolling -->
  <div id="about" class="section"><AboutMe /></div>
  <div id="objective" class="section"><Objective /></div>
  <div id="education" class="section"><Education /></div>
  <div id="certification" class="section"><Certification /></div>
  <div id="experience" class="section"><Experience /></div>
  <div id="contact" class="section"><Contact /></div>
</template>

<!-- ✅ Global Styling -->
<style>
html {
  scroll-behavior: smooth;
}
.section {
  padding-top: 55px; /* To avoid content hiding behind navbar */
}
.navbar .btn {
  color: white;
}
.navbar .btn:hover {
  color: #f8f9fa;
  background: rgba(255, 255, 255, 0.1);
}
</style>
