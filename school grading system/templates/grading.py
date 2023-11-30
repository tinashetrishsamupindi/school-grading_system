mark=int(input("Enter the marks: 50"))

if marks>=75:
    grade='A'
elif marks>=60:
    grade='B'
elif marks>=50:
    grade='C'
elif marks>=45:
    grade='D'
elif marks>=40:
    grade='E'
else:
    grade='F'

print("Grade:",grade)