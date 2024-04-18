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
    fantasy_add_female: null,
    fantasy_add_male: null,
    fantasy_add_other: null,
    fantasy_albion_female: null,
    fantasy_albion_male: null,
    fantasy_albion_undead: null,
    fantasy_deverry_female: null,
    fantasy_deverry_male: null,
    fantasy_diablo_items: null,
    fantasy_dragonlance_all: null,
    fantasy_dwarfs_female: null,
    fantasy_dwarfs_male: null,
    fantasy_dwarfs_tolkien: null,
    fantasy_elves_add: null,
    fantasy_elves_tolkien: null,
    fantasy_felana_all: null,
    fantasy_gnoms_female: null,
    fantasy_gnoms_male: null,
    fantasy_hobbits_female: null,
    fantasy_hobbits_male: null,
    fantasy_kyree_all: null,
    fantasy_orcs_add: null,
    fantasy_orcs_tolkien: null,
    fantasy_orcs_warhammer: null,
    fantasy_sparhawk_all: null,
    fantasy_trolls_female: null,
    fantasy_trolls_male: null,
    human_african_female: null,
    human_african_male: null,
    human_arabic_female: null,
    human_arabic_male: null,
    human_balkan_female: null,
    human_balkan_male: null,
    human_baltic_female: null,
    human_baltic_male: null,
    human_chinese_female: null,
    human_chinese_male: null,
    human_czechandslovak_female: null,
    human_czechandslovak_male: null,
    human_english_female: human_english_female,
    human_english_male: human_english_male,
    human_fareastwithoutchina_female: null,
    human_fareastwithoutchina_male: null,
    human_french_female: null,
    human_french_male: null,
    human_gauls_female: null,
    human_gauls_male: null,
    human_german_female: null,
    human_german_male: null,
    human_greek_female: null,
    human_greek_male: null,
    human_hungarian_female: null,
    human_hungarian_male: null,
    human_iberoamerican_female: null,
    human_iberoamerican_male: null,
    human_italian_female: null,
    human_italian_male: null,
    human_netherlandish_female: null,
    human_netherlandish_male: null,
    human_polish_female: human_polish_female,
    human_polish_male: null,
    human_scandinavian_female: null,
    human_scandinavian_male: null,
    human_ukrainian_female: null,
    human_ukrainian_male: null,
    human_vikings_female: null,
    human_vikings_male: null
}