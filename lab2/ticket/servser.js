var myMod = require("./maduale")
var myclass=myMod.myClass

var user1=new myclass
user1.Addticket(1,1,1,"cairo","alex","1-5-2023")
user1.Addticket(2,3,4,"cairo","alex","2-5-2023")
user1.Addticket(4,3,5,"cairo","alex","8-5-2023")
user1.displayallticket()
console.log(user1.getoneticket(1))
console.log(user1.getoneticket(2))
console.log(user1.getoneticket(3))

var user2=new myclass

user2.Addticket(1,2,3,"alex","cairo","5-5-2023")
user2.Addticket(2,3,3,"cairo","alex","3-5-2023")
console.log(user2.getoneticket(1))
console.log(user2.getoneticket(2))
user2.displayallticket()

var user3=new myclass
user3.Addticket(1,4,2,"cairo","aswan","9-4-2023")
user3.Addticket(3,4,2,"cairo","aswan","6-4-2023")
user3.Addticket(7,4,2,"cairo","aswan","3-4-2023")
console.log(user3.getoneticket(1))
console.log(user3.getoneticket(3))
console.log(user3.getoneticket(7))
user3.displayallticket()



//update user1 arrival
console.log(user1.getoneticket(2))
user1.updatetacket(2).arrival="aswan"
console.log(user1.getoneticket(2))


//update user2 date
console.log(user2.getoneticket(1))
user2.updatetacket(1).date="5-8-2023"
console.log(user2.getoneticket(1))