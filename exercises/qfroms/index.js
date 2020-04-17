// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record){
        this.first.push(record)
    }

    remove(){
        //moving from stack1 to stack2
        while(this.first.peek()){
            this.second.push(this.first.pop())
        }
        
        //removing the top of stack 2 
        const record = this.second.pop()

        //refilling stack 1 from stack 2
        while(this.second.peek()){
            this.first.push(this.second.pop())
        }

        return record
    }

    peek(){
         //moving from stack1 to stack2
         while(this.first.peek()){
            this.second.push(this.first.pop())
        }
        
        //removing the top of stack 2 
        const record = this.second.peek()

        //refilling stack 1 from stack 2
        while(this.second.peek()){
            this.first.push(this.second.pop())
        }

        return record
    }


}

module.exports = Queue;
