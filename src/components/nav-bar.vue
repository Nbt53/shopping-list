<template>
  <nav class="nav">
    <div class="navItem" @click="navigateTo('/home')" role="button" tabindex="0">
      <ion-icon :icon="homeOutline"></ion-icon>
    </div>
    <div class="navItem" @click="navigateTo('/lists')" role="button" tabindex="0">
      <ion-icon :icon="listOutline"></ion-icon>
    </div>
    <div class="navItem" @click="navigateTo('/messages')" role="button" tabindex="0">
      <ion-icon :icon="mailOutline"></ion-icon>
    </div>
    <div class="navItem" @click="navigateTo('/account')" role="button" tabindex="0">
      <ion-icon :icon="personCircleOutline"></ion-icon>
    </div>
  </nav>
</template>

<script>
import { homeOutline, listOutline, personCircleOutline, mailOutline } from "ionicons/icons";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const navigateTo = (path) => {
      if (router.currentRoute.value.path !== path) {
        router.push(path).catch(err => {
          if (err.name !== 'NavigationDuplicated' && !err.message.includes('Avoided redundant navigation to current location')) {
            console.error(err);
          }
        });
      }
    };

    return {
      homeOutline,
      listOutline,
      personCircleOutline,
      mailOutline,
      navigateTo,
    };
  },
};
</script>

<style>
.nav {
  display: flex;
  flex-direction: row;
  height: 80px;
  width: 100%;
  padding: 10px;
  background-color: #777;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.26);
}

.navItem {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 25%;
  margin: 0 10px;
  cursor: pointer; /* Makes it clear the item is clickable */
}

ion-icon {
  color: #fff;
  font-size: 40px; /* Consolidated font-size and color */
  margin: 0 auto;
}
</style>