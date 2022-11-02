import { Missing_values } from "./Missing_Values.mjs";
import { Get_Types } from "./Missing_Values.mjs";
import PromptSync from "prompt-sync";
import { Quiz } from "./Missing_Values.mjs";
const prompt = PromptSync();

//Taking Input from user using Prompt
let name = prompt("What is your Name");
console.log("Hello", name, "Welcome to First Assingment");

// Finding Missing values and indexes in an array
var test_array = [11, 15, 17, 18, 19];
Missing_values(test_array);

// Quiz Question
Quiz();

//Create own Prototype Method
// var Checking_Array = ["Gandu Khan", 2, 5, 7, true];
// Array.prototype.GetTypes = Get_Types();
// console.log(Checking_Array.GetTypes);
//Checking_Array.Findtypes();

//Get_Types(Checking_Array);
