(()=> {
    interface Bird {
        eat(): void;
    }
    
    interface FlyingBird {
        fly(): number;
    }
    
    interface RunningBird {
        run(): void;
    }

    interface SwimmerBird {
        swim(): void;
    }

    class Tucan implements Bird, FlyingBird {
        public eat(){}
        public fly(){ return 10; }
    }

    class Humminbird implements Bird, FlyingBird {
        public eat(){}
        public fly(){ return 30; }
    }

    class Ostrich implements Bird, RunningBird {
        public eat(){}
        public run(){}
    }

    class Penguin implements Bird, SwimmerBird {
        public eat(){}
        public swim(){}
    }

})();