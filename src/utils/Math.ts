export function round(num:number,places:number){
    const base_10 = Math.pow(10,places);
    // console.log('base 10 is '+base_10)
    return Math.round(num*base_10)/base_10;

}