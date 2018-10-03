/** setup a an object with root node variable first equal to null
 * so that it can be filled with data.
 * **/
function binarySearchTreeTraversal() {
    this.root = null;
}

/** Let's start our tree traversal function which will take our val
 * as the argument.
 * **/
binarySearchTreeTraversal.prototype.insertNode = function (val) {
    var node = {
        data : val,
        left : null,
        right : null
    };

    /** Variable to help us keep track of our currentNode **/
    var currentNode;

    //Recursive if statement)
    /** if root is NOT null, then root now equals node **/
    //this.root = null
    if (!this.root) {
        /** First Time:
         * First time through this.root is null.**/
        this.root = node;
        /** Second Time:
        * this.root becomes node {data: 8, left: null, right: null} **/
    } else {
        /** First Time:
         * Else the root IS null then we set currentNode to equal
         * this.root
         * this.root now contains a node with {data: 8, left: null, right: null}
         * **/
        currentNode = this.root;

        /** Let's start looping:
         * while currentNode is true or NOT false (null)
         * **/
        while (currentNode) {
            /** First Time:
             * val = 8 and current.data = 8
             * if (8 < 8) This is false so:
             * Skip down to else if.
             * **/

            /** Second Time:
             * val = 3 and current.data = 8
             * if (3 < 8): it is!!!
             * so, if the the left node is null then it becomes
             * our node.
             */

            /** Third Time:
             * val = 10 and current.data = 8
             * Skip down to else if statement.
             */
            if (val < currentNode.data) {
                if (!currentNode.left) {
                    /** Second Time:
                     * currentNode.left = {data: 8, left:{ data: 3, left: [object], right:[Object]};
                     * **/
                    currentNode.left = node;
                    break;
                } else {
                    currentNode = currentNode.left;
                }
                /** Third Time:
                 * val = 10 > currentNode.data = 8
                 */
            } else if (val > currentNode.data) {
                /** Third Time:
                 * if currentNode.right is null
                 * it becomes our current node
                 */
                if (!currentNode.right) {
                    /** Third Time
                     * currentNode.right =
                     * {data 8,
                     * {left:{ data:3, left: [Object], right [Object]},
                     * {right:{ data:10, left: null, right: [Object]}}}
                     * **/
                    currentNode.right = node;
                    break;
                } else {
                    currentNode = currentNode.right;
                }
                /**First Time:
                 * Console.log the below statement only if val is
                 * bad val, like a char or string.
                 */
            } else {
                console.log('Ignoring this value as the BST supposed to be a tree containing UNIQUE values');
                break;
            }
        }
    }
};

var BST = new binarySearchTreeTraversal();

BST.insertNode(8);
BST.insertNode(3);
BST.insertNode(10);
BST.insertNode(1);
BST.insertNode(6);
BST.insertNode(14);
BST.insertNode(4);
BST.insertNode(7);
BST.insertNode(13);

console.log(BST);
