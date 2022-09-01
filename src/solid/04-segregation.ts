(()=> {
    interface Bird {
        fly(): void;
        eat(): void;
        run(): void;
        swim(): void;
    }

    class Tucan implements Bird {
        public fly(){}
        public eat(){}
        public run(){}
        public swim() {
            throw new Error('Can not swim');
        }
    }

    class Humminbird implements Bird {
        public fly(){}
        public eat(){}
        public run(){}
        public swim() {
            throw new Error('Can not swim');
        }
    }

    class Ostrich implements Bird {
        public fly() {
            throw new Error('Can not fly');
        }
        public eat(){}
        public run(){}
        public swim() {
            throw new Error('Can not swim');
        }
    }
    
    class Penguin implements Bird {
        public fly() {
            throw new Error('Can not fly');
        }
        public eat(){}
        public run(){}
        public swim(){}
    }

})();