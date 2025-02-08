<script>
export default {
  name: "AboutMe",
};
</script>

<template>
  <div class="About">
    <div class="aboutcontent">
      <img
        class="myimg"
        src="https://media.licdn.com/dms/image/v2/D5603AQHztFriWY2o0g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723572849761?e=2147483647&v=beta&t=f_aFtj9pTsRqVdLzFY43sK2H9thw0Lrrh1vKBnLiRLw"
      />
      <spam>
        <h1>Akash vemula</h1>
        <a>Software developer</a>
        <section class="medialinks">
          <a
            class="social"
            href="https://in.linkedin.com/in/akash-vemula-07178114a?trk=people-guest_people_search-card"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" />
          </a>
          <a
            class="social"
            href="https://in.linkedin.com/in/akash-vemula-07178114a?trk=people-guest_people_search-card"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
          </a>
          <a
            class="social"
            href="https://in.linkedin.com/in/akash-vemula-07178114a?trk=people-guest_people_search-card"
          >
            <img src="https://www.svgrepo.com/show/306107/gmail.svg" />
          </a>
        </section>
      </spam>
    </div>
  </div>
</template>

<style>
.About {
  height: 100vh;
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
  background-color: rgb(59, 59, 59);
  padding-left: 20%;
  padding-right: 20%;
}
.medialinks {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.social {
  img {
    width: 30px;
    background-color: aliceblue;
    border-radius: 5px;
  }
}
.aboutcontent {
  display: flex;
  align-items: center; /* Aligns items vertically */
  gap: 20px; /* Adds spacing between image and text */

  padding: 20px;
  border-radius: 10px;
}

.myimg {
  width: 300px;
  border-radius: 100% 25% 75% 65%;
  animation: move-border 5s linear infinite;
}

spam {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
}

h1,
a {
  margin: 0;
  color: white;
}

@keyframes move-border {
  0% {
    border-radius: 50% 75% 50% 75%;
  }
  25% {
    border-radius: 25% 46% 25% 85%;
  }
  75% {
    border-radius: 85% 60% 55% 75%;
  }
  100% {
    border-radius: 50% 75% 50% 75%;
  }
}

@media only screen and (max-width: 600px) {
  .aboutcontent {
    flex-direction: column;
  }
  img {
    width: 200px;
  }
}
</style>
