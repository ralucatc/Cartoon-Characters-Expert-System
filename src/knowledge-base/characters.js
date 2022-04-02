const KB = [
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Olive Oyl', img: 'dexter.jpg' }
    }, // 1
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Blossom', img: 'dexter.jpg' }
    }, // 2
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Dexter', img: 'dexter.jpg' }
    }, // 3
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Courage', img: 'dexter.jpg' }
    }, // 4
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Buttercup', img: 'dexter.jpg' }
    }, // 5
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Edd', img: 'dexter.jpg' }
    }, // 6
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Johnny Bravo', img: 'dexter.jpg' }
    }, // 7
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Blossom', img: 'dexter.jpg' }
    }, // 8
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Dexter', img: 'dexter.jpg' }
    }, // 9
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Olive Oyl', img: 'dexter.jpg' }
    }, // 10
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Muriel Bagge', img: 'dexter.jpg' }
    }, // 11
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Edd', img: 'dexter.jpg' }
    }, // 12
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Johnny Bravo', img: 'dexter.jpg' }
    }, // 13
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Ed', img: 'dexter.jpg' }
    }, // 14
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Popeye', img: 'dexter.jpg' }
    }, // 15
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Dee Dee', img: 'dexter.jpg' }
    }, // 16
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Bubbles', img: 'dexter.jpg' }
    }, // 17
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Dexter', img: 'dexter.jpg' }
    }, // 18
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Cow', img: 'dexter.jpg' }
    }, // 19
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Ed', img: 'dexter.jpg' }
    }, // 20
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Mojo Jojo', img: 'dexter.jpg' }
    }, // 21
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'I.R. Baboon', img: 'dexter.jpg' }
    }, // 22
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Ed', img: 'dexter.jpg' }
    }, // 23
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Popeye', img: 'dexter.jpg' }
    }, // 24
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'I.R. Baboon', img: 'dexter.jpg' }
    }, // 25
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Eustace Bagge', img: 'dexter.jpg' }
    }, // 26
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Mojo Jojo', img: 'dexter.jpg' }
    }, // 27
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Dee Dee', img: 'dexter.jpg' }
    }, // 28
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Bubbles', img: 'dexter.jpg' }
    }, // 29
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Edd', img: 'dexter.jpg' }
    }, // 30
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Eddy', img: 'dexter.jpg' }
    }, // 31
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Bunny Bravo', img: 'dexter.jpg' }
    }, // 32
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Edd', img: 'dexter.jpg' }
    }, // 33
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Eddy', img: 'dexter.jpg' }
    }, // 34
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Bunny Bravo', img: 'dexter.jpg' }
    }, // 35
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Jerry', img: 'dexter.jpg' }
    }, // 36
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Olive Oyl', img: 'dexter.jpg' }
    }, // 37
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Blossom', img: 'dexter.jpg' }
    }, // 38
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'I.M. Weasel', img: 'dexter.jpg' }
    }, // 39
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Dee Dee', img: 'dexter.jpg' }
    }, // 40
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Muriel Bagge', img: 'dexter.jpg' }
    }, // 41
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'I.M. Weasel', img: 'dexter.jpg' }
    }, // 42
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Courage', img: 'dexter.jpg' }
    }, // 43
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Bubbles', img: 'dexter.jpg' }
    }, // 44
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Red Guy', img: 'dexter.jpg' }
    }, // 45
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Johnny Bravo', img: 'dexter.jpg' }
    }, // 46
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Muriel Bagge', img: 'dexter.jpg' }
    }, // 47
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Red Guy', img: 'dexter.jpg' }
    }, // 48
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Cow', img: 'dexter.jpg' }
    }, // 49
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Tom', img: 'dexter.jpg' }
    }, // 50
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Chicken', img: 'dexter.jpg' }
    }, // 51
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Olive Oyl', img: 'dexter.jpg' }
    }, // 52
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Muriel Bagge', img: 'dexter.jpg' }
    }, // 53
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Popeye', img: 'dexter.jpg' }
    }, // 54
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Johnny Bravo', img: 'dexter.jpg' }
    }, // 55
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Buttercup', img: 'dexter.jpg' }
    }, // 56
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Mojo Jojo', img: 'dexter.jpg' }
    }, // 57
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Eddy', img: 'dexter.jpg' }
    }, // 58
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Spike', img: 'dexter.jpg' }
    }, // 59
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Chicken', img: 'dexter.jpg' }
    }, // 60
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Courage', img: 'dexter.jpg' }
    }, // 61
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Tom', img: 'dexter.jpg' }
    }, // 62
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Jerry', img: 'dexter.jpg' }
    }, // 63
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Eddy', img: 'dexter.jpg' }
    }, // 64
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Buttercup', img: 'dexter.jpg' }
    }, // 65
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Jerry', img: 'dexter.jpg' }
    }, // 66
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Courage', img: 'dexter.jpg' }
    }, // 67
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Spike', img: 'dexter.jpg' }
    }, // 68
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Red Guy', img: 'dexter.jpg' }
    }, // 69
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Cow', img: 'dexter.jpg' }
    }, // 70
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Tom', img: 'dexter.jpg' }
    }, // 71
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Dexter', img: 'dexter.jpg' }
    }, // 72
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'I.R. Baboon', img: 'dexter.jpg' }
    }, // 73
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Eustace Bagge', img: 'dexter.jpg' }
    }, // 74
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'I.M. Weasel', img: 'dexter.jpg' }
    }, // 75
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Johnny Bravo', img: 'dexter.jpg' }
    }, // 76
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Eustace Bagge', img: 'dexter.jpg' }
    }, // 77
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Chicken', img: 'dexter.jpg' }
    }, // 78
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'I.R. Baboon', img: 'dexter.jpg' }
    }, // 79
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Eustace Bagge', img: 'dexter.jpg' }
    }, // 80
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Jerry', img: 'dexter.jpg' }
    }, // 81

];

export default KB;