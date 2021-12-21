// module.exports=getDate;  -> exports is an object therefore here we are saying that our exports object is linked to only one function that is getDate but if there was also another function that we wanted to export we won't be able to therefore we do this

module.exports.getDate = getDate; // In this way we are saying that object export has an attribute of getDate and we are giving it the function getDate to be executed when called upon.

function getDate() {
    const today = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    const currday = today.toLocaleString("en-US", options);
    // const currentDay = today.getDay();
    // const day = "";
    // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // day = days[currentDay];
    // Rendering the list.ejs file inside our views folder and replacing the getDay variable in that file with the day variable from here
    // const len=items.length;
    return currday;
}


//  This is another way to write the function here we are assigning getDay variable the function that we have defined
exports.getDay = function () {
    const today = new Date();
    const options = {
        weekday: 'long',
    };
    const currday = today.toLocaleString("en-US", options);
    return currday;
};