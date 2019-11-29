function ListNode(val){
  this.val = val;
  this.next = null;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(4);
let l1 = node1;
node1.next = node2;
node2.next = node3;

let node4 = new ListNode(2);
let node5 = new ListNode(3);
let node6 = new ListNode(4);
let l2 = node4;
node4.next = node5;
node5.next = node6;

var mergeTwoLists = function(l1, l2) {
  if(!l1){
    return l2
  }
  if(!l2){
    return l1
  }
  let cur1 = l1;
  let cur2 = l2;
  let head = l1;
  let previous = l1;

  while(cur2){
    if(cur2.val <= head.val){
      let node = new ListNode(cur2.val);
      node.next = head;
      head = node;

      cur1 = head;
      cur2 = cur2.next;
    }else{
      cur1 = head;
      while(cur1){
        previous = cur1;
        cur1 = cur1.next;
        if((cur1 == null) && (cur2.val >= previous.val)){
          let node = new ListNode(cur2.val);
          previous.next = node;
          
          cur2 = cur2.next;
          break;
        }else if(cur2.val < cur1.val){
          let node = new ListNode(cur2.val);
          previous.next = node;
          node.next = cur1;

          cur2 = cur2.next;
          break;
        }
      }
    }
  }
  return head;
};

mergeTwoLists(l1, l2);