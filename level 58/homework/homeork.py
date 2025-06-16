# 1. Create a list of squares
squares = [x**2 for x in range(1, 11)]

# 2. Filter even numbers
even_numbers = [x for x in range(1, 21) if x % 2 == 0]

# 3. Convert to uppercase
lowercase_words = ['apple', 'banana', 'cherry']
uppercase_words = [word.upper() for word in lowercase_words]

# 4. Get lengths of words
words = ['hello', 'world', 'python']
word_lengths = [len(word) for word in words]

# 5. Add 5 to each number
numbers = [10, 20, 30]
added_five = [num + 5 for num in numbers]

# 6. Get first letters
strings = ['cat', 'dog', 'elephant']
first_letters = [s[0] for s in strings]

# 7. Double each number
doubled = [x * 2 for x in numbers]