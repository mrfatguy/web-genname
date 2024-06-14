/*
Maps dropdown structure to actual variables that holds object with data, read from separate files.

This is a typical JS object used as an associative array for mapping. Left side holds "keys", while right side has
references to object read, one-by-one from corresponding files (check script inclusion order in index.html).

This mimics ES6 import-export feature which is not allowed in pure browser (without server-side served JS modules) due
to CORS policy limitations.
*/

const groups = {
    'Human': {
        'African': {
            'Female': human_african_female,
            'Male': human_african_male
        },
        'Arabic': {
            'Female': null,
            'Male': null
        },
        'Balkan': {
            'Female': null,
            'Male': null
        },
        'Baltic': {
            'Female': null,
            'Male': null
        },
        'Chinese': {
            'Female': null,
            'Male': null
        },
        'Czech and Slovak': {
            'Female': null,
            'Male': null
        },
        'English': {
            'Female': human_english_female,
            'Male': human_english_male
        },
        'Far East without China': {
            'Female': null,
            'Male': null
        },
        'French': {
            'Female': null,
            'Male': null
        },
        'Gauls': {
            'Female': null,
            'Male': null
        },
        'German': {
            'Female': human_german_female,
            'Male': human_german_male
        },
        'Greek': {
            'Female': null,
            'Male': null
        },
        'Hungarian': {
            'Female': null,
            'Male': null
        },
        'Iberoamerican': {
            'Female': null,
            'Male': null
        },
        'Italian': {
            'Female': null,
            'Male': null
        },
        'Dutch': {
            'Female': null,
            'Male': null
        },
        'Polish': {
            'Female': human_polish_female,
            'Male': human_polish_male
        },
        'Ukrainian': {
            'Female': null,
            'Male': null
        },
        'Scandinavian': {
            'Female': null,
            'Male': null
        },
        'Vikings': {
            'Female': null,
            'Male': null
        }
    },
    'Fantasy': {
        'AD&D': {
            'Female': null,
            'Male': null,
            'Other': null
        },
        'Albion': {
            'Female': null,
            'Male': null,
            'Undead': null
        },
        'Deverry': {
            'Female': null,
            'Male': null
        },
        'Diablo': {
            'Items': null
        },
        'Dragon Lance': {
            'All': null
        },
        'Dwarfs': {
            'Female': null,
            'Male': null,
            'Tolkien': null
        },
        'Elves': {
            'AD&D': null,
            'Tolkien': null
        },
        'Felana': {
            'All': null
        },
        'Gnoms': {
            'Female': null,
            'Male': null
        },
        'Hobbits': {
            'Female': null,
            'Male': null
        },
        'Kyree': {
            'All': null
        },
        'Orcs': {
            'AD&D': null,
            'Tolkien': null,
            'Warhammer': null
        },
        'Sparhawk': {
            'All': null
        },
        'Trolls': {
            'Female': null,
            'Male': null
        }
    },
    'Other': {
        'Constellations': {
            'All': other_constellations_all
        }
    }
};