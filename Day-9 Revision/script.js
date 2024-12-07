/**
const sum=(a,b)=>{
                    const total=a+b;
                    console.log(`Sum: ${total}`)
                    return total;
                }
                let x=sum(10,5)
                console.log(x)
 */

                /**
    function parent()
    {
            console.log("Inside Parent Function")   

            function child1()
            {
                console.log("Inside Child-1 Function")
            }
            child1()

            function child2()
            {
                console.log("Inside Child-2 Function")
            }

            child2()

            console.log("All task done in Parent Func");
    }

    parent()

 */

    
    function parent()
    {
        console.log("papa ji bol");
        const fd="10cr";
        const jamin="10acr"

        function baman()
        {
            console.log("Baman Baman")
            console.log(fd)
        }

        return baman;
    }

    // let res=parent();
    // res()

            
let x=10;

    {
        console.log(x);  //10

        {
            console.log(x)  //10

            {
                x=100;
                console.log(x)  //100
            }   
        }   
    }
   