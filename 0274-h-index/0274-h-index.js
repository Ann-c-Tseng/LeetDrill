/**
 * @param {number[]} citations
 * @return {number}
 */

 // 
var hIndex = function(citations) {
    var citation;
    var paper = 0;
    citations.sort(function(a,b) {
        return a-b;
    });
    console.log(citations)
    
    for(var i = citations.length-1; i >= 0; i--) {
        citation = citations[i];
        paper = paper + 1;
        if(citation < paper) {
            paper = paper - 1;
            return paper;
        }
    }

    return citations.length;
};