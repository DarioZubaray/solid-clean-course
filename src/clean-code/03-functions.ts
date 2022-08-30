(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getCastByMovieId( id: string ) {
        console.log({ id });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }

    interface IMovie {
        cast       : string[],
        description: string,
        rating     : number,
        title      : string,
    }

    function createMovie({ title, description, rating, cast } : IMovie) {
        console.log({ title, description, rating, cast });
    }

    function createActor( fullName: string, birthdate: Date ): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;
    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result: number;

        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }

        return result;
    }

})();
