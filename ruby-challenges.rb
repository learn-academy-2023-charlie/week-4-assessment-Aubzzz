# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# reposts1 = 7
# Expected output: '7 is odd'
# reposts2 = 42
# Expected output: '42 is even'
# reposts3 = 221
# Expected output: '221 is odd'

# def odd_number(reposts3)
#     if reposts3 % 2 != 0
#      "#{reposts3} is odd"
# else 
#     reposts3 %2 == 0
#     "#{reposts3} is even"
# end
# end
# p odd_number(reposts3)

# output: 
# "7 is odd"

# output:
# '42 is even'

# output:
# "221 is odd"




# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# "hello".delete "aeiou", "^e"

# beatles_album1 = 'Rubber Soul'
# p beatles_album1.delete "aeiou"
# Output: "Rbbr Sl"
# Expected output: 'Rbbr Sl'


# beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
# p beatles_album2.delete "aeiou"
# Output: "Sgt Pppr"


# beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'
# p beatles_album3.delete "aeiou" "^A"
# Output: "bby Rd"


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

#palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
#Output: Racecar is a palindrome

# palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
# output: LEARN is not a palindrome

# palindrome_test_case3 = 'Rotator'
# # Expected output: 'Rotator is a palindrome'
# # Output: Rotator is a palindrome

# def pali(palindrome_test_case3)
#     if palindrome_test_case3.downcase == palindrome_test_case3.downcase.reverse
#      "#{palindrome_test_case3} is a palindrome"
# else 
#     palindrome_test_case3.reverse != palindrome_test_case3
#     "#{palindrome_test_case3} is not a palindrome"
#     end
# end
# puts pali(palindrome_test_case3)



