import {connect} from 'mongoose';

export default defineNitroPlugin(async(nitroApp)=>{
    const runtimeConfig = useRuntimeConfig()

    try {
      await connect(runtimeConfig.MONGO_URI)
      console.log('Connected to MongoDB')
    } catch (error) {
      console.error('Failed to connect to MongoDB', error)
    }
})
