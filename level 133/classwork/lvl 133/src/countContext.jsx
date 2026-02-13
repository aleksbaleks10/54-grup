// საკლასო დავალება:

// შექმენით CountContext და შემოიღეთ CountProvider. ამ ფუნქციაში უნდა გქონდეთ count მდგომარეობა და მისი setter ფუნქცია და გაიტანოთ ეს ინფორმაცია კონტექსტიდან.

// main.jsx-ში CountProvider-ს გადაეცით App.

// თქვენთვის სასურველ კომპონენტში, ორივე ინფორმაცია ამოიღეთ კონტექსტიდან. შექმენით პარაგრაფი და მას ტექსტად მდგომარეობა გაუწერეთ.
//  შექმენით ღილაკი, რომლის ტექსტიც იქნება +1 და მასზე დაკლიკებისას count 1-ით უნდა გაიზარდოს.
import { createContext, useState } from "react";
import {countContext} from "countContext.jsx"
const countContext = createContext()
const CountProvider = [count, setCount] = useState(0)


export defaut countContext;