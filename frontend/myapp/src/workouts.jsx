import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom"
import axios from "axios";

// State based OOP

// this is how to make a basic arrow function with many mansions in it.  The arrow function will be the main function we export.
// Always keep in mind that props, though not used here because they are in classes, are actually useful on the index render.  That's because you can then have pages like this (which are wired into the index) render customized content based on some URL sent data.
//  

// Buttons can use hook syntax without depending on componentDidMount by using    <button onClick={()=>setCount(count+1)}>Click</button>
// functions in the main arrow function are just written as function Something(){return render()}

// if you'd like to edit more than 1 direct value using hook syntax... you should either bunder them all into a collective state 1 for 1.  with multiple variables handling that 1 attribute.  OR bind them into a class and use the actual class syntax.  See your old programs for that.  Padres.

// At the very bottom of the NewPage render is where you'll see all the mini function renders wired into it.

const NewPage =() => {
    // Set up all your state variables here.  They need to be declared before any rendering happens that way they are ready to go.
    const [test, setTest]=useState([{core: 1, studio: 5}]);
    // updateTest(test[0].core='That updated!')
    
    // This is easy to handle because the state is just 1 variable linked to 1 value.  count - 0.  You use the setCount to edit it (though your not actually editing it itself but some stuff behind the scenes generates a clone of some sort)
    const [count, setCount]=useState(0)


    // doesn't work.  Do I need to use effects?? -- no.  you need to use the setter variable #2
    // const Updater=()=>{
    //     test[0].studio+=1
    // };

    // GOOD EXAMPLE
    // You can reference this in the NewPage render using Sample() but make sure that the main render has a div.
    function SampleFunctionRender(){
        return(
            <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click</button>
            <p>This is the core --{test[0].core}</p>

            {/*bug w dict n lists below. possible use class for multistate logic n hooks for iso state logic*/}
            {/*<button onClick={()=>setTest([0])(test[0].core+1)}>Click</button>*/}
            </div>)
    };

    function ToDo(){
        return(
            <div>
            <ul><strong>FRONT END</strong>
                <li>Maps</li>
                <li>Classes integrated</li>
                <li>Front/Backend development rotation</li>
                <li>Axios Hook integration</li>
                <li>Flexbox and Grid</li>
            </ul>
            <ul><strong>BACKEND</strong>
                <li>Flask Cors</li>
                <li>Flask Routes</li>
                <li>Production</li>
                <li>Axios Hook integration</li>
                <li>Database Integration</li>
                <li>Save Data</li>

            </ul>  
            </div>
            )

    };
            

    function ConditionalRenderExample(){
        return (
        <div style={null}>
            <p>Example of Triggers and single variables</p>
            {/*This is the equivalent of an if statement.  (condition) followed by ? and :*/}
            {(count>=5)
                ?<h1>You've Successfully counted at least 5 Times!</h1>
                :<h1>You have counted Less than 5 Times</h1>
            }
        </div>)
    };


    // The NewPages main render is this section below but we can plug in many renders from functions the same way that the index file works.  
    // If your wiring in functions make sure to use divs before adding them in.  One for the main render div (just the top and bottom) and they can also have their own divs inside their functions as well.
    return (
        <div>
        <p>THIS IS THE NEW PAGE</p>
        {/*Don't forget the ()*/}
        {SampleFunctionRender()}
        {ToDo()}
        {ConditionalRenderExample()}
        </div>
        )
}

export default NewPage;

// React pages have hooks.  Simplified class objects.  Multiple functions wired into a render with thier own private rendering parts.  And tons of state based objects that need to be properly updated with the second variable.  Some of the functions actually work like a type of lambda code with no name involved.


// I can make a state react to a trigger.  But i cant seem to update a variable if i nested into a state variable as a dictionary.  It just won't let me do it for some reason.  When using a raw 1 to 1 ratio like count without any nested dictionaries it works.  But the second I try to access var[0].whatever it breaks.

// maybe bring classes into the page as a render??????????
// build lots of tiny state hooks.

// Make a function.  Give it a render and functionality.  Wire it into the main render.  Then wire it into the index render as a whole unit.