class myClass{
    tickets = [];
 
    Addticket(id,seatnum, flightnum,departual,arrival,date){
        
        let item = {id,seatnum, flightnum,departual,arrival,date };
        this.tickets.push(item);
    }

    displayallticket(){
      
        for(let i=0; i<this.tickets.length; i++){
          
        console.log(this.tickets[i])
        }
       
    }

    getoneticket(id){
       let ticket=0
        for(let i=0; i<this.tickets.length; i++){
            if(id===this.tickets[i].id)
         ticket =this.tickets[i]
        }
        return ticket;
    }
     updatetacket(id){
       

    let ticketitem= this.tickets.findIndex((elem)=> elem.id===id)
       console.log(this.tickets[ticketitem])
         
       
       return this.tickets[ticketitem]
   }


}

module.exports = {
    myClass
}