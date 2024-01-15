12. Question: Loop through an array using a for-of loop and double each element.
ANS;
# Sample array
numbers = [1, 2, 3, 4, 5]

# Using a for loop to double each element
doubled_numbers = []
for num in numbers:
    doubled_numbers.append(num * 2)

# Print the original and doubled arrays
print("Original array:", numbers)
print("Doubled array:", doubled_numbers)