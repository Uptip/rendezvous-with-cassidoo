def capital_after_vowel(str):
    for (index, char) in enumerate(str):
        if index < len(str) - 1 and char in "aeiouy" and str[index + 1] not in "aeiouy":
            str = str[: index + 1] + str[index + 1].upper() + str[index + 2 :]
    return str


assert capital_after_vowel("hello world") == "heLlo WoRld"
assert capital_after_vowel("xaabeuekadii") == "xaaBeueKaDii"
