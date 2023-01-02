import re


def replace_zeros(input):
    return re.sub("0+", lambda input: str(len(input.group())), input)


assert replace_zeros("1234500362000440") == "1234523623441"
assert replace_zeros("123450036200044") == "123452362344"
assert replace_zeros("000000000000") == "12"
assert replace_zeros("123456789") == "123456789"
