def sum_every_other(num: int) -> int:
    num = str(num).replace(".", "")
    return sum([int(num[i]) for i in range(len(num)) if i % 2 == 1])


assert sum_every_other(548915381) == 26
assert sum_every_other(10) == 0
assert sum_every_other(1010.11) == 1
