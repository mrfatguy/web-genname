window.onload = function() {handleLoad()};
window.onresize = function() {updateLists(generateNames())};

function handleLoad() {
    populateDropdown('group-select', groupOptions);

    document.getElementById('group-select').value = (localStorage.getItem('group') !== null) ? localStorage.getItem('group') : document.getElementById('group-select').options[0].value;

    updateSubgroup(true);
}

function populateDropdown(dropdownId, options) {
    const dropdown = document.getElementById(dropdownId);
    
    dropdown.innerHTML = '';
    
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.innerHTML = option;
        dropdown.appendChild(opt);
    });
}

function updateSubgroup(init = false) {
    let groupValue = document.getElementById('group-select').value;

    localStorage.setItem('group', groupValue);

    populateDropdown('subgroup-select', subgroupOptions[groupValue]);

    if (init) {
        let subgroupValue = localStorage.getItem('subgroup');

        document.getElementById('subgroup-select').value = (subgroupValue !== null && subgroupValue !== '') ? subgroupValue : document.getElementById('subgroup-select').options[0].value;
    }

    updateType(init);
}

function updateType(init = false) {
    let subgroupValue = document.getElementById('subgroup-select').value;
    localStorage.setItem('subgroup', subgroupValue);

    populateDropdown('type-select', typeOptions[subgroupValue] || []);

    if (init) {
        let typeValue = localStorage.getItem('type');

        document.getElementById('type-select').value = (typeValue !== null && typeValue !== '') ? typeValue : document.getElementById('type-select').options[0].value;
    }

    generateNames(true);
}

function updateLists(value) {
    const lists = $('textarea:visible');
    
    if (typeof value === 'string') {
        for (let i = 0; i < lists.length; i++) {
            lists[i].value = value;
        }
    }
    
    if (Array.isArray(value)) {
        let
            groupCount = lists.length,
            groupSize = Math.ceil(value.length / groupCount);
        
        for (let i = 0; i < groupCount; i++) {
            let
                startIndex = i * groupSize,
                endIndex = (i + 1) * groupSize
                
            lists[i].value = value.slice(startIndex, endIndex).join('\n');
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cleanMetaFields() {
    let elements = document.querySelectorAll('[id^="meta-"]');

    elements.forEach(element => {
        element.textContent = '(no data)';
    });
}

function getDatabank() {
    let
        typeValue = document.getElementById('type-select').value,
        groupValue = document.getElementById('group-select').value,
        subgroupValue = document.getElementById('subgroup-select').value,        
        code = groupValue + '_' + subgroupValue + '_' + typeValue;

    code = code.split(' ').join('').split('&').join('').toLowerCase();

    return objectMap[code];    
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateString(arrayOfArrays) {
    let result = '';

    for(let i = 0; i < arrayOfArrays.length; i++) {
        result += getRandomElement(arrayOfArrays[i]);
    }

    return result;
}

function generateNames(force = false) {
    if (window.namesArray && !force) return window.namesArray;

    let
        result = [],
        db = getDatabank();

    localStorage.setItem('type', document.getElementById('type-select').value);

    if (db && db.groups && Array.isArray(db.groups) && db.groups.length >= 1) {
        for(let j = 0; j < 80; j++) result.push(generateString(db.groups));

        window.namesArray = result;
        updateLists(window.namesArray);
    }
    else updateLists('Error reading databank!');

    cleanMetaFields();

    if (db && typeof db.meta === 'object' && db.meta !== null) {
        for (let key in db.meta) {
            if (db.meta.hasOwnProperty(key)) {
                let element = document.getElementById(`meta-${key}`);
                if (element) {
                    element.textContent = db.meta[key];
                }
            }
        }
    }
}