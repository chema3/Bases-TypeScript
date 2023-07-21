
export interface Product {
    description :string;
    price : number;
}

const phone :Product = {
    description : 'Nokia A1',
    price : 150.0
}

const tablet :Product ={
    description : 'ipad Air',
    price : 250.0
}

interface TaxCalculationOptions {
    products :Product[];
    tax: number;
}

//function taxCalculation(({products, tax}) :TaxCalculationOptions) :number[] {
export function taxCalculation(options :TaxCalculationOptions) :number[] {
    const {products, tax} = options;
    let total = 0;
    
    products.forEach(({price}) =>  {
        total += price;
    });

    return [total, total * tax ];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculation({
    products : shoppingCart,
    tax : tax,
});

console.log('Total',total);
console.log('Tax',totalTax);