(() => {

    // No aplicando el principio de responsabilidad única
    // ==================================================
    // priorizar la composion sobre la herencia

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate : Date;
        gender    : Gender;
        name      : string;
    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor({ name, gender, birthdate }: PersonProps ){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email     : string;
        role      : string;
        person    : Person;
    }

    class User {
        public email: string;
        public role : string;
        public lastAccess: Date;
        public person: Person;

        constructor({ email, role, person }: UserProps ) {
            this.lastAccess = new Date();
            this.email      = email;
            this.role       = role;
            this.person     = person;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        lastOpenFolder   : string;
        workingDirectory : string;
        user             : User;
    }

    class UserSettings {
        public workingDirectory: string;
        public lastOpenFolder  : string;
        public user            : User;

        constructor({ workingDirectory, lastOpenFolder, user }: UserSettingsProps ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
            this.user             = user;
        }
    }

    const userSettings = new UserSettings({
        lastOpenFolder: '/home',
        workingDirectory: '/usr/home',
        user: new User({
            email: 'fernando@google.com',
            role: 'Admin',
            person: {
                birthdate: new Date('1985-10-21'),
                gender: 'M',
                name: 'Fernando',
            }
        })
    });

    console.log({ userSettings });


})();