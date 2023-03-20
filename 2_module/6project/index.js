const delay = () => {
    let l = 0
    for (let i=0; i<10000000000; i++) {
        l++
    }
}

const sayHI = () => {
    console.log("hello")
}

delay()
sayHI()