import re

def to_camel_case(text):
    splitted_array = re.split('_|-', text)

    splitted_array_camelcase = [str.capitalize(word) if idx > 0 else word for idx, word in enumerate(splitted_array)]

    return ''.join(splitted_array_camelcase)