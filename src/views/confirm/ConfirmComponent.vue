<template>
    <div class="flex flex-col justify-between items-center">
      <div></div>
      <div>
          <p class="font-bold text-48  mb-20 "><span class="text-primary">IN</span>TANI</p>
          <p class="font-bold text-18 mb-2">{{title}}</p>
          <p id="subtitle" class="text-14 font-medium">
              {{subtitle}}
          </p>
      </div>
      <CTAButton @click="$router.push({name: 'Dashboard'})">{{buttonText}}</CTAButton>
    </div>
  </template>
  
  <script>
  export default {
      props: {
          title: {
              type: String,
              default: 'PENDAFTARAN BERHASIL'
          },
          subtitle: {
              type: String,
              default: 'Selamat datang di <span class="font-bold"><span class="text-primary">IN</span>TANI</span>'
          },
          buttonText: {
              type: String,
              default: 'Lanjut'
          }
      },
      mounted() {
          var subtitleelement = document.getElementById('subtitle')
          subtitleelement.innerHTML = this.subtitle
      }
  }
  </script>
  
  <style>
  
  </style>