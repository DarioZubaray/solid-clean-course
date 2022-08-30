
type Size = '' | 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL'

class Product {
    constructor (
        public name: string,
        public price: number,
        public size: Size = '',
        public inStock: boolean = false,
    ) {}

    isProductReady() : boolean {

        // if ( this.name.length <= 0)
        //     throw Error('Name is empty');

        // if ( this.price <= 0)
        //     throw Error('Price is empty');

        // if ( this.size.length <= 0)
        //     throw Error('Size is empty');

        for ( const key in this ) {
            switch( typeof this[key] ) {
                case 'string':
                    if ( (<string><unknown>this[key]).length <= 0) 
                        throw Error(`${ key } is empty`);
                    break;
                case 'number':
                    if ( (<number><unknown>this[key]) <= 0)
                        throw Error(`${ key } is zero`);
                    break;
                case 'boolean':
                    if ( !(<boolean><unknown>this[key]) )
                        throw Error(`${ key } is false`);
                    break;
                default:
                    throw Error(`${ typeof this[key] } is an invalid key`);
            }
        }
        return true;
    }

    toString() {
        if (!this.isProductReady()) return;

        return `${ this.name } (${ this.size}) - $${ this.price}`;
    }
}

(() => {
    const bluePants = new Product('Blue Large Pants', 10, 'M');
    console.log(bluePants.toString());
})()
