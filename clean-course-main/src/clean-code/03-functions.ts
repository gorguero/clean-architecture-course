


(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getBioActorById( id: string ) {
        console.log({ id });
    }
    
    interface Movie{
        title        :string, 
        description  :string, 
        rating       :number, 
        cast         :string[]
    }
    function createMovie({ title, description, rating, cast }: Movie ) {
        console.log({ title, description, rating, cast });
    }

    function fullCheckName( fullname:string ){
        console.log({fullname});
        return true;
    }
    function createActor( fullName:string, birthdate:Date ): boolean {
        
        if ( fullCheckName(fullName) ) return false;

        console.log('Crear actor');
        return true;        

    }

    


})();
