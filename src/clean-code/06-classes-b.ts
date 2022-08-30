(() => {

    type Gender = 'M' | 'F';

    interface PersonProps {
        name     : string;
        gender   : Gender;
        birthdate: Date;

    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }

    const newPerson = new Person({ name: 'Dario', gender: 'M', birthdate: new Date('1989-01-16 08:00:00') });
    console.log({ newPerson });

    interface UserProps {
        email : string;
        role  : string;
        person: PersonProps;
    }

    class User extends Person {
        public email     : string;
        public role      : string;
        public lastAccess: Date;
    
        constructor({ email, role, person }: UserProps) {
            super({ ...person });

            this.email      = email;
            this.role       = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder  : string;
        user: UserProps;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder  : string;

        constructor({ workingDirectory, lastOpenFolder, user }: UserSettingsProps) {
            super({...user});

            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        user: {
            email: 'dzubaray@gmail.com',
            role: 'admin',
            person: {
                name: 'dario',
                gender: 'M',
                birthdate: new Date('1989-01-16 08:00:00')
            }
        }
    });
    console.log({ userSettings });

})();