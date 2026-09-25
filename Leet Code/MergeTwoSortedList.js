var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode(0);
    let head = newList;

    while(list1 && list2){
        if(list1.val <= list2.val){
            newList.next = list1;
            list1 = list1.next;
        }else{
            newList.next = list2;
            list2 = list2.next;
        }
        newList = newList.next
    }
    if(list1 !== null){
        newList.next = list1;
    }else{
        newList.next = list2;
    }

    return head.next;
};