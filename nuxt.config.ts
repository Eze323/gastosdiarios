// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  modules: ['nuxt-vuefire', '@nuxt/icon', '@pinia/nuxt'],
  app: {
    head:{
      htmlAttrs:{
        'data-bs-theme':'dark',
      },
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' },
        

      ],
      script: [
        { 
          src: '	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' 
          
        },
        
      ],
    }
  },
  vuefire: {
    auth:{
      enabled: true,
      sessionCookie:false,
    },
    config:{
      apiKey: process.env.FIRE_APIKEY,
      authDomain: process.env.FIRE_AUTHDOMAIN ,
      projectId: process.env.FIRE_PROJECTID,
      storageBucket: process.env.FIRE_STORAGEBUCKET,
      messagingSenderId: process.env.FIRE_MESSAGINGSENDERID,
      appId: process.env.FIRE_APPID,
      measurementId: process.env.FIRE_MEASUREMENTID
      
    }
  },
  plugins: ['~/plugins/chart.js'],
  runtimeConfig:{
    MONGO_URI: process.env.MONGO_URI || "",
  
  }

})