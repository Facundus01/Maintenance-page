import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchCars = async ()=>{
const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

const headers = {
  'X-RapidAPI-Key': '9f24948794msh0d1f8781246feebp18cadejsnbcdd18f11474',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
};

const response = await fetch(url,{
  headers: headers
});

const result = await response.json();

return result;
}
