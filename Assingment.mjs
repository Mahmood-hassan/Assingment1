import { Missing_values } from "./Missing_Values.mjs";
import { Get_Types } from "./Missing_Values.mjs";
import PromptSync from "prompt-sync";

//Taking Input from user using Prompt
const prompt = PromptSync();
let name = prompt("What is your Name");
console.log("Hello", name, "Welcome to First Assingment");

// Finding Missing values and indexes in an array
var test_array = [11, 15, 17, 18, 19];
Missing_values(test_array);

//Create own Prototype Method
let Checking_Array = ["Gandu Khan", 2, 5, 7, true];
Get_Types(Checking_Array);

//
