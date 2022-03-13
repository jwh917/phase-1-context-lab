/* Your Code Here */
function createEmployeeRecord(array) {
    let employee = {
        // 1) populates a firstName field from the 0th element
        firstName: array[0],
        // 2) populates a familyName field from the 1th element
        familyName: array[1],
        // 3) populates a title field from the 2th element
        title: array[2],
        // 4) populates a payPerHour field from the 3th element
        payPerHour: array[3],
        // // 5) initializes a field, timeInEvents, to hold an empty Array
        timeInEvents: new Array,
        // // 6) initializes a field, timeOutEvents, to hold an empty Array
        timeOutEvents: new Array

    }
// console.log(employee)
return employee
}

function createEmployeeRecords(array){
    // console.log(array)
    createEmployeeRecord(array)
    let newArr = []
    let arrLength = array.length
   
    for(let i = 0; i < arrLength; i++) {
        // console.log(array[i])
        newArr.push(createEmployeeRecord(array[i]))

     }
    
    // console.log(newArr)    
    return newArr
}

function createTimeInEvent(dateStamp){
    // console.log('This is the this keyword: ', this)
    // console.log('This is the dateStamp keyword: ', dateStamp)


    let theDay = dateStamp.slice(0, 10)

    let theHours = parseInt(dateStamp.slice(11, 16))

    // console.log(theDay)
    // console.log(theHours)

    let timeStamp = {
        type: "TimeIn",
        date: theDay,
        hour: theHours

    }
    
    // console.log(timeStamp)
    this.timeInEvents.push(timeStamp)
    // console.log('This is the this keyword: ', this)

    return this

}


function createTimeOutEvent(dateStamp){
    // console.log('This is the this keyword: ', this)
    // console.log('This is the dateStamp keyword: ', dateStamp)


    let theDay = dateStamp.slice(0, 10)

    let theHours = parseInt(dateStamp.slice(11, 16))

    // console.log(theDay)
    // console.log(theHours)

    let timeStamp = {
        type: "TimeOut",
        date: theDay,
        hour: theHours

    }    
    // console.log('This is the this keyword: ', this)

    this.timeOutEvents.push(timeStamp)

    return this

}


function hoursWorkedOnDate(givenDate){
    // console.log(givenDate)
    // console.log(this)
    // console.log(this.timeInEvents)    
    // console.log(this.timeOutEvents)
    let hoursWorkedOnDate

    let hoursOut = this.timeOutEvents.find( (element) => element.date ===  givenDate).hour
    let hoursIn = this.timeInEvents.find( (element) => element.date ===  givenDate).hour

    hoursWorkedOnDate = hoursOut - hoursIn
    
    let hoursWorked = hoursWorkedOnDate.toString()
    let hours = parseInt(hoursWorked.replace("00", ""))
    // console.log(hours, givenDate)
    return hours
}

function wagesEarnedOnDate(givenDate){
    // console.log(hoursWorkedOnDate.call(this, givenDate) * this.payPerHour)
    return hoursWorkedOnDate.call(this, givenDate) * this.payPerHour

}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    

    // console.log(this)
    // console.log(this.timeInEvents)
    const eligibleDates = this.timeInEvents.map(function (e) {
        // console.log(e.date)

        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        // console.log(memo)
        // console.log(d)
        return memo + wagesEarnedOnDate.call(this, d)
   
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    // console.log(payable)
    return payable
}

function findEmployeeByFirstName(srcArray, firstName){

    // console.log(this)
    // console.log(srcArray)
    // console.log(firstName)
    // for(const element of srcArray){
    //     console.log(element.firstName)

    // }
    // 

    let recordMatch

    srcArray.forEach(element => {
        // console.log(element.firstName)
        if(element.firstName === firstName){
            // console.log(element.familyName)
            // console.log(element)
            recordMatch = Object.assign({}, element)
            // recordMatch.push(element)
      
    }
    
})
    // console.log(recordMatch)
    return recordMatch
}

function calculatePayroll(array){
    // console.log(array)
    let allSum = 0

    array.forEach(element => {
       let wagesFromArr = allWagesFor.call(element)
       allSum = allSum + wagesFromArr
    //    console.log(allSum)
    })
    return allSum
}