const EventEmitter=require("events");
const Emitter=new EventEmitter()
Emitter.on('greet',(name)=>{
    console.log(`Hello,${name}`)
})
setInterval(()=>{
    Emitter.emit('greet','vidit')
},1000) 