class StopWatch {
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
        this.totalTime = this.stopTime - this.startTime;
        console.log(Date());
        if (this.totalTime <= 60000){
            this.hasil = this.totalTime / 1000;
            console.log(`Waktu yang berlalu ${this.hasil} Detik`)
        } else if (this.totalTime >60000){
            this.hasil = this.totalTime / 60000;
            console.log(`Waktu yang berlalu ${this.hasil} Menit`)
        }
    }
}

const stopwatch = new StopWatch();

