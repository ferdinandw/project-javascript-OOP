class StopWatch {
    // date = new Date();
    constructor (){
        this.startTime = 0;
        this.stopTime = 0;
        
    }
    mulai () {
        this.startTime = new Date().getTime();
        this.stopTime = 0;
        console.log(Date())
    }
    stop () {
        this.stopTime = new Date().getTime();
        this.totalTime = (this.stopTime - this.startTime) / 1000;
        console.log(Date());
        console.log(`Waktu yang berlalu ${this.totalTime} Detik`)
    }
}

const stopwatch = new StopWatch();

