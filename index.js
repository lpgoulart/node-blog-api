import app from './src/app.js'

app.listen(process.env.PORT || 3333, ()=>console.log("API running"));