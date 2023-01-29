// 2131. Longest Palindrome by Concatenating Two Letter Words
// Medium
// 2.1K
// 39
// Companies
// You are given an array of strings words. Each element of words consists of two lowercase English letters.

// Create the longest possible palindrome by selecting some elements from words and concatenating them in any order. Each element can be selected at most once.

// Return the length of the longest palindrome that you can create. If it is impossible to create any palindrome, return 0.

// A palindrome is a string that reads the same forward and backward.

// Example 1:
// Input: words = ["lc","cl","gg"]
// Output: 6
// Explanation: One longest palindrome is "lc" + "gg" + "cl" = "lcggcl", of length 6.
// Note that "clgglc" is another longest palindrome that can be created.

// Example 2:
// Input: words = ["ab","ty","yt","lc","cl","ab"]
// Output: 8
// Explanation: One longest palindrome is "ty" + "lc" + "cl" + "yt" = "tylcclyt", of length 8.
// Note that "lcyttycl" is another longest palindrome that can be created.

// Example 3:
// Input: words = ["cc","ll","xx"]
// Output: 2
// Explanation: One longest palindrome is "cc", of length 2.
// Note that "ll" is another longest palindrome that can be created, and so is "xx".

var longestPalindrome = function(words) {
    const map = words.reduce((map, word) => {
        map[word] || (map[word] = 0);
        map[word]++;
        return map;
    }, {});
    
    let samewords = 0;
    let odds = 0;
    
    
    for(let key in map) {
        const revKey = [...key].reverse().join('');
        
        if (revKey === key) {
            if (map[key] % 2 === 0) {
                samewords += map[key];
            } else {
                samewords += map[key] - 1;
                odds++;
            }
            continue;
        }
        
        if (map[revKey] > 0 && map[key] > 0) {
            const min = Math.min(map[key], map[revKey]);
            samewords += 2 * min;
            map[key] -= min;
            map[revKey] -= min;
        }
    }
    
    if (odds > 0) {
        samewords++;
    }
    
    return samewords * 2;
};