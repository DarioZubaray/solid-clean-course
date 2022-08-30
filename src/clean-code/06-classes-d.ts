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
    }

    class User {
        public email: string;
        public role : string;
        public lastAccess: Date;

        constructor({ email, role }: UserProps ) {
            this.lastAccess = new Date();
            this.email      = email;
            this.role       = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        lastOpenFolder   : string;
        workingDirectory : string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder  : string;

        constructor({ workingDirectory, lastOpenFolder }: SettingsProps ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder  : string;
        email           : string;
        role            : string;
        name            : string;
        gender          : Gender;
        birthdate       : Date;
    }

    class UserSettings {
        public user    : User;
        public Person  : Person;
        public settings: Settings;

        constructor({
            email, role,
            name, gender, birthdate,
            workingDirectory, lastOpenFolder 
        }: UserSettingsProps) {
            this.user = new User({ email, role });
            this.Person = new Person({ name, gender, birthdate });
            this.settings = new Settings({ workingDirectory, lastOpenFolder });
        }
    }

    const userSettings = new UserSettings({
        lastOpenFolder: '/home',
        workingDirectory: '/usr/home',
        email: 'fernando@google.com',
        role: 'Admin',
        birthdate: new Date('1985-10-21'),
        gender: 'M',
        name: 'Fernando',
    });

    console.log({ userSettings });


})();