class ListItem {
    /** @type any */
    value;

    /** @type ListItem */
    next;

    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class List {
    /** @type ListItem */
    head = null;

    push(el) {
        const newItem = new ListItem(el, null);
        if (!this.head) {
            this.head = newItem;
            return;
        }
       
        const lastElement = this.getLastElement();

        lastElement.next = newItem;
    }

    getLastElement() {
        if (!this.head) {
            return null;
        }

        let element = this.head;

        while (element.next) {
            element = element.next;
        }

        return element;
    }
}