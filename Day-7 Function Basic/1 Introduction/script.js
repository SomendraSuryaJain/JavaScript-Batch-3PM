/**Case-1 
        function memes()
        {
            console.log("Samajh Rahe ho..!!");
            return `Jaldi vaha se hato` 
        }

        let x=memes();
        console.log("Returned value is:",x);
*/


/**case-2 
function memes1(fullname)
{
        console.log(`${fullname}, Bulati h magar jane ka nahi..`)
}

console.log(memes1("Himanshu"))*/


/**case-3 default parameter 
function memes2(fullname="user")
{
    console.log(`${fullname} Me bhi totla mela baap bhi totla mela pula khandan totla..!`)
}

// memes2()
memes2("Chirag")*/


/**Case-4 Arguments 
function dialog()
{
    console.log(arguments)

    console.log(`Mere ${arguments[0]+" "+arguments[1]} ayenge..!!`)
}

dialog("Karan", "Arjun")*/

/** variable declared with function keyword supports hoisting 


let x=dialog("Tinku")
console.log(x)

function dialog(name)
{
    console.log(`${name} samajh aya..!`)
}
*/

/**case-5
const firstName="Kapil";
const lastName="Sharma"

    function greet(fname,age)
    {
       
       console.log(fname)
       console.log(age)
    }

    greet(firstName,45-5)
 */


    function getAge()
    {
        return 58
    }

    function dialog()
    {
        return `Swagat nahi karoge hamara..`
    }

    function getDetails(fname,lname,age,dialog)
    {
        console.log(fname+" "+lname);
        console.log("Age: "+age);
        console.log(dialog)
    }
    getDetails("Salman","Khan",getAge(),dialog())