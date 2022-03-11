const KB = [
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Olive Oyl' }
    }, // 1
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Blossom' }
    }, // 2
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Dexter' }
    }, // 3
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Courage' }
    }, // 4
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Buttercup' }
    }, // 5
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Edd' }
    }, // 6
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Johnny Bravo' }
    }, // 7
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Blossom' }
    }, // 8
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Dexter' }
    }, // 9
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Olive Oyl' }
    }, // 10
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Muriel Bagge' }
    }, // 11
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Edd' }
    }, // 12
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Johnny Bravo' }
    }, // 13
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Ed' }
    }, // 14
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Popeye' }
    }, // 15
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Dee Dee' }
    }, // 16
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Bubbles' }
    }, // 17
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Dexter' }
    }, // 18
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Cow' }
    }, // 19
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Ed' }
    }, // 20
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Mojo Jojo' }
    }, // 21
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'I.R. Baboon' }
    }, // 22
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Ed' }
    }, // 23
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Popeye' }
    }, // 24
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'I.R. Baboon' }
    }, // 25
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Eustace Bagge' }
    }, // 26
    {
        premises: [
            { attribute: 'color', value: 'cold_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Mojo Jojo' }
    }, // 27
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Dee Dee' }
    }, // 28
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Bubbles' }
    }, // 29
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Edd' }
    }, // 30
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Eddy' }
    }, // 31
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Bunny Bravo' }
    }, // 32
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Edd' }
    }, // 33
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Eddy' }
    }, // 34
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Bunny Bravo' }
    }, // 35
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Jerry' }
    }, // 36
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Olive Oyl' }
    }, // 37
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Blossom' }
    }, // 38
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'I.M. Weasel' }
    }, // 39
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Dee Dee' }
    }, // 40
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Muriel Bagge' }
    }, // 41
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'I.M. Weasel' }
    }, // 42
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Courage' }
    }, // 43
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Bubbles' }
    }, // 44
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Red Guy' }
    }, // 45
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Johnny Bravo' }
    }, // 46
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Muriel Bagge' }
    }, // 47
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Red Guy' }
    }, // 48
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Cow' }
    }, // 49
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Tom' }
    }, // 50
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Chicken' }
    }, // 51
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Olive Oyl' }
    }, // 52
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Muriel Bagge' }
    }, // 53
    {
        premises: [
            { attribute: 'color', value: 'warm_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Popeye' }
    }, // 54
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Johnny Bravo' }
    }, // 55
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Buttercup' }
    }, // 56
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Mojo Jojo' }
    }, // 57
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Eddy' }
    }, // 58
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Spike' }
    }, // 59
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Chicken' }
    }, // 60
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Courage' }
    }, // 61
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Tom' }
    }, // 62
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'junk_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Jerry' }
    }, // 63
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Eddy' }
    }, // 64
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Buttercup' }
    }, // 65
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Jerry' }
    }, // 66
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Courage' }
    }, // 67
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Spike' }
    }, // 68
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Red Guy' }
    }, // 69
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Cow' }
    }, // 70
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Tom' }
    }, // 71
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'sweets' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Dexter' }
    }, // 72
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'I.R. Baboon' }
    }, // 73
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Eustace Bagge' }
    }, // 74
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'education' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'I.M. Weasel' }
    }, // 75
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'Johnny Bravo' }
    }, // 76
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Eustace Bagge' }
    }, // 77
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'outdoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Chicken' }
    }, // 78
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'dumb' }
        ],
        conclusion: { attribute: 'result', value: 'I.R. Baboon' }
    }, // 79
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'not_dumb_not_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Eustace Bagge' }
    }, // 80
    {
        premises: [
            { attribute: 'color', value: 'non_colors' },
            { attribute: 'food', value: 'healthy_food' },
            { attribute: 'activity', value: 'indoor_activity' },
            { attribute: 'subject', value: 'really_smart' }
        ],
        conclusion: { attribute: 'result', value: 'Jerry' }
    }, // 81

];

export default KB;