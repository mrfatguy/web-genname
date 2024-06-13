// Tree-level dropdown structure.

const groupOptions = [
    'Human',
    'Fantasy'
];

const subgroupOptions = {
    'Human': [
        'African',
        'Arabic',
        'Balkan',
        'Baltic',
        'Chinese',
        'Czech and Slovak',
        'English',
        'Far East without China',
        'French',
        'Gauls',
        'German',
        'Greek',
        'Hungarian',
        'Iberoamerican',
        'Italian',
        'Netherlandish',
        'Polish',
        'Ukrainian',
        'Scandinavian',
        'Vikings'
    ],
    'Fantasy': [
        'AD&D',
        'Albion',
        'Deverry',
        'Diablo',
        'Dragon Lance',
        'Dwarfs',
        'Elves',
        'Felana',
        'Gnoms',
        'Hobbits',
        'Kyree',
        'Orcs',
        'Sparhawk',
        'Trolls'
    ],
};

const typeOptions = {
    'African': ['Female', 'Male'],
    'Arabic': ['Female', 'Male'],
    'Balkan': ['Female', 'Male'],
    'Baltic': ['Female', 'Male'],
    'Chinese': ['Female', 'Male'],
    'Czech and Slovak': ['Female', 'Male'],
    'English': ['Female', 'Male'],
    'Far East without China': ['Female', 'Male'],
    'French': ['Female', 'Male'],
    'Gauls': ['Female', 'Male'],
    'German': ['Female', 'Male'],
    'Greek': ['Female', 'Male'],
    'Hungarian': ['Female', 'Male'],
    'Iberoamerican': ['Female', 'Male'],
    'Italian': ['Female', 'Male'],
    'Netherlandish': ['Female', 'Male'],
    'Polish': ['Female', 'Male'],
    'Polish': ['Female', 'Male'],
    'Ukrainian': ['Female', 'Male'],
    'Scandinavian': ['Female', 'Male'],
    'Vikings': ['Female', 'Male'],
    'AD&D': ['Female', 'Male', 'Other'],
    'Albion': ['Female', 'Male', 'Undead'],
    'Deverry': ['Female', 'Male'],
    'Diablo': ['Items'],
    'Dragon Lance': ['All'],
    'Dwarfs': ['Female', 'Male', 'Tolkien'],
    'Elves': ['AD&D', 'Tolkien'],
    'Felana': ['All'],
    'Gnoms': ['Female', 'Male'],
    'Hobbits': ['Female', 'Male'],
    'Kyree': ['All'],
    'Orcs': ['AD&D', 'Tolkien', 'Warhammer'],
    'Sparhawk': ['All'],
    'Trolls': ['Female', 'Male']
};

// Maps dropdown structure to actual variables that holds object with data, read from separate files.
//
// This is a typical JS object used as an associative array for mapping. Left side holds "keys", while right side has references to object read,
// one-by-one from corresponding files (check script inclusion order in index.html).
//
// This mimics ES6 import-export feature which is not allowed in pure browser (without server-side served JS modules) due to CORS policy limitations.

const objectMap = {
    human_african_female: human_african_female,
    human_african_male: human_african_male,
    human_english_female: human_english_female,
    human_english_male: human_english_male,
    human_german_female: human_german_female,
    human_german_male: human_german_male,
    human_polish_female: human_polish_female,
    human_polish_male: human_polish_male
}