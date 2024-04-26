
function longestSubstring(s) {
    // Implementation of longestSubstring function
        let longestSubStringsize = 0; //variable to calculate the substring size
   
        for (let i = 0; i < s.length; i++) {
            let currentSet = new Set();      //Set to store and check incoming strings
   
            for (let x = i; x < s.length; x++) {
               
                if (currentSet.has(s[x])) {  // check if set contains it already 
                   
                    break;
                } else {
                   
                    currentSet.add(s[x]);  // if does not contain add to the set
                }
            }
            //calculate longest substring size by comparing to max function
            longestSubStringsize = Math.max(
                longestSubStringsize,
                currentSet.size
            );                              
        }
   
        return longestSubStringsize;

   
}
module.exports = { longestSubstring };