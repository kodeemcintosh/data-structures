
class Stack {
  top;
  elements = [];
  messages = [];

  constructor(top) {
    this.top = top;
  }

  checkIfBalancedParenthesis(str) {
    for(let i = 0 ; i < str.length ; i++ ) {
      if (str [ i ] == "(") {
        this.top = this.top + 1;
        this.elements[this.top] = " ( ";
      }

      if(str[i] == ")" ) {
        if(this.top == -1 ) {
          this.top = this.top -1 ;
          break;
        } else {
          this.top = this.top -1 ;
        }
      }
    }

    if(this.top == -1) {
      const msg = str + " -> String is Balanced!";
      this.messages.push(msg);
    }
    else {
      const msg = str + " -> String is Unbalanced!";
      this.messages.push(msg);
    }
  }

  print() {
    if(!this.messages.length) {
      console.log('No messages to print');
      return;
    }

    for(let i = 0; i < this.messages.length; i++) {
      console.log(this.messages[i]);
    }
  }
}


module.exports = { Stack };