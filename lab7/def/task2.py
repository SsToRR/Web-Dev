words = input()

def count_words(words):
    cnt = 0
    i = 0
    while i < len(words):
        if(words[i] == ' '):
            i += 1
            
        else:
            cnt += 1
            while(i < len(words) and words[i] != ' '):
                i += 1
    return cnt

print(count_words(words))