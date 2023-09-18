import math


def build_staircase(num: int) -> int:
    return int((math.sqrt(1 + 8 * num) - 1) / 2)


assert build_staircase(6) == 3
assert build_staircase(9) == 3
assert build_staircase(10) == 4
