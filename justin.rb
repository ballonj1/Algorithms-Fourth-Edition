def factors(num)
    array = []
    i = 0
    while i < num
        j = 0
        while j <= num
            if i * j == num
                array << i
            end
            j += 1
        end
        i += 1
    end
    return array
end

def aliquot_sum(num)
    numbers = factors(num)
    sum = 0
    i = 0
    while i < numbers.length
        sum += numbers[i]
        i += 1
    end
    return sum
end

def aliquot_sequence(base, n)
    aliquot_sequences = [base]
    i = 0
    while i < n - 1
        aliquot_sequences << aliquot_sum(aliquot_sequences[i])
        i += 1
    end
    return aliquot_sequences
end

p aliquot_sequence(10, 5)
