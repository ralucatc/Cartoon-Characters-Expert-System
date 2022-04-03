const KB = [
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Olive Oyl', img: 'oliveoyl.png' }
    }, // 1
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Blossom', img: 'blossom.jpg' }
    }, // 2
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Dexter', img: 'dexter.png' }
    }, // 3
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Courage', img: 'courage.png' }
    }, // 4
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Buttercup', img: 'buttercup.png' }
    }, // 5
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Edd', img: 'edd.jpg' }
    }, // 6
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Johnny Bravo', img: 'johnnybravo.png' }
    }, // 7
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Blossom', img: 'blossom.jpg' }
    }, // 8
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Dexter', img: 'dexter.png' }
    }, // 9
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Olive Oyl', img: 'oliveoyl.png' }
    }, // 10
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Muriel Bagge', img: 'muriel.png' }
    }, // 11
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Edd', img: 'edd.jpg' }
    }, // 12
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Johnny Bravo', img: 'johnnybravo.png' }
    }, // 13
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Ed', img: 'ed.jpg' }
    }, // 14
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Popeye', img: 'popeye.jpg' }
    }, // 15
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Dee Dee', img: 'deedee.png' }
    }, // 16
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Bubbles', img: 'bubbles.jpg' }
    }, // 17
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Dexter', img: 'dexter.png' }
    }, // 18
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Cow', img: 'cow.png' }
    }, // 19
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Ed', img: 'ed.jpg' }
    }, // 20
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Mojo Jojo', img: 'mojojojo.png' }
    }, // 21
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'I.R. Baboon', img: 'baboon.png' }
    }, // 22
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Ed', img: 'ed.jpg' }
    }, // 23
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Popeye', img: 'popeye.jpg' }
    }, // 24
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'I.R. Baboon', img: 'baboon.png' }
    }, // 25
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Eustace Bagge', img: 'eustace.png' }
    }, // 26
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Mojo Jojo', img: 'mojojojo.png' }
    }, // 27
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Dee Dee', img: 'deedee.png' }
    }, // 28
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Bubbles', img: 'bubbles.jpg' }
    }, // 29
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Edd', img: 'edd.jpg' }
    }, // 30
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Eddy', img: 'eddy.png' }
    }, // 31
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Bunny Bravo', img: 'bunnybravo.png' }
    }, // 32
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Edd', img: 'edd.jpg' }
    }, // 33
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Eddy', img: 'eddy.png' }
    }, // 34
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Bunny Bravo', img: 'bunnybravo.png' }
    }, // 35
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Jerry', img: 'jerry.png' }
    }, // 36
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Olive Oyl', img: 'oliveoyl.png' }
    }, // 37
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Blossom', img: 'blossom.jpg' }
    }, // 38
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'I.M. Weasel', img: 'weasel.png' }
    }, // 39
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Dee Dee', img: 'deedee.png' }
    }, // 40
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Muriel Bagge', img: 'muriel.png' }
    }, // 41
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'I.M. Weasel', img: 'weasel.png' }
    }, // 42
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Courage', img: 'courage.png' }
    }, // 43
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Bubbles', img: 'bubbles.jpg' }
    }, // 44
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Red Guy', img: 'redguy.jpg' }
    }, // 45
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Johnny Bravo', img: 'johnnybravo.png' }
    }, // 46
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Muriel Bagge', img: 'muriel.png' }
    }, // 47
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Red Guy', img: 'redguy.jpg' }
    }, // 48
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Cow', img: 'cow.png' }
    }, // 49
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Tom', img: 'tom.png' }
    }, // 50
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Chicken', img: 'chicken.png' }
    }, // 51
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Olive Oyl', img: 'oliveoyl.png' }
    }, // 52
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Muriel Bagge', img: 'muriel.png' }
    }, // 53
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Popeye', img: 'popeye.jpg' }
    }, // 54
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Johnny Bravo', img: 'johnnybravo.png' }
    }, // 55
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Buttercup', img: 'buttercup.png' }
    }, // 56
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Mojo Jojo', img: 'mojojojo.png' }
    }, // 57
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Eddy', img: 'eddy.png' }
    }, // 58
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Spike', img: 'spike.png' }
    }, // 59
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Chicken', img: 'chicken.png' }
    }, // 60
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Courage', img: 'courage.png' }
    }, // 61
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Tom', img: 'tom.png' }
    }, // 62
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Jerry', img: 'jerry.png' }
    }, // 63
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Eddy', img: 'eddy.jpg' }
    }, // 64
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Buttercup', img: 'buttercup.png' }
    }, // 65
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Jerry', img: 'jerry.png' }
    }, // 66
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Courage', img: 'courage.png' }
    }, // 67
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Spike', img: 'spike.png' }
    }, // 68
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Red Guy', img: 'redguy.jpg' }
    }, // 69
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Cow', img: 'cow.png' }
    }, // 70
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Tom', img: 'tom.png' }
    }, // 71
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Dexter', img: 'dexter.png' }
    }, // 72
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'I.R. Baboon', img: 'baboon.png' }
    }, // 73
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Eustace Bagge', img: 'eustace.png' }
    }, // 74
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'I.M. Weasel', img: 'weasel.png' }
    }, // 75
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Johnny Bravo', img: 'johnnybravo.png' }
    }, // 76
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Eustace Bagge', img: 'eustace.png' }
    }, // 77
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Chicken', img: 'chicken.png' }
    }, // 78
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'I.R. Baboon', img: 'baboon.png' }
    }, // 79
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Eustace Bagge', img: 'eustace.png' }
    }, // 80
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Jerry', img: 'jerry.png' }
    }, // 81

];

export default KB;