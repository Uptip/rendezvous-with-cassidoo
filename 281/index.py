def max_subarray(arr, n):
    if len(arr) < n:
        return None
    max = 0
    subarray = []
    for index in range(len(arr) - n + 1):
        sample = arr[index : index + n]
        if sum(sample) > max:
            max = sum(sample)
            subarray = sample
    return subarray


assert max_subarray([-4, 2, -5, 1, 2, 3, 6, -5, 1], 4) == [1, 2, 3, 6]
assert max_subarray([1, 2, 0, 5], 2) == [0, 5]
