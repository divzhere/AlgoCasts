// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    insertFirst(data){
        this.head = new Node(data, this.head)
    }

    size(){
        let counter = 0;
        let node = this.head

        while(node){
            counter++
            node = node.next
        }

        return counter 
    }

    getFirst(){
        return this.head
    }

    getLast(){
        let node = this.head
        if(!node){
            return null
        }
        
        while(node){
            if(node.next === null){
                return node
            }
            node = node.next
        }
    }

    clear(){
       this.head = null
        }

    removeFirst(){
        //my solution
        // const newFirst = this.head.next 
        // if(this.head){
        //     this.head = null
        // }
        // this.head = newFirst
  
        if(!this.head) {
            return;
        }
        this.head = this.head.next
    }

    removeLast(){
      if(!this.head){
          return;
      }
      if(!this.head.next){
          this.head = null
          return;  
        }
      let previous = this.head
      let node = this.head.next
      while(node.next){
          previous = node;
          node = node.next;
        }
      previous.next = null  
    }

    
    insertLast(data){
        const last = this.getLast()

        if(last) {
            //existing nodes
            last.next = new Node(data)
        } else {
            //empty list
            this.head = new Node(data)
        }
    }

    getAt(index){
        
        let counter = 0
        let node = this.head
        while(node){
            if(counter === index){
                return node
            }
            counter++
            node = node.next
        }
        return null
        }

    removeAt(index){ 
       if(!this.head){
           return;
       } 

       if(index === 0){
           this.head = this.head.next
           return;
       }

       //my solution
       /*const previous = this.getAt(index - 1);
       const next = this.getAt(index + 1)
       previous.next = next */
       
       //as instructed
       const previous = this.getAt(index -1);
       if(!previous || !previous.next){
           return;
       }
       previous.next = previous.next.next
    }
    
    insertAt(data, index){
        //at the start
        if(!this.head){
            this.head = new Node(data);
            return
        }
        
        if(index === 0){
           this.head = new Node(data, this.head)
           return
        }

      const previous = this.getAt(index - 1) || this.getLast();
      const node = new Node(data, previous.next)
      previous.next = node  
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
          fn(node, counter);
          node = node.next;
          counter++;
        }
      }
    
      *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
          yield node;
          node = node.next;
        }
      }
}



module.exports = { Node, LinkedList };
