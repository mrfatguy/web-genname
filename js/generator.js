window.onload = function() {
    populateDropdown('group-select', groupOptions);
    
    updateSubgroup();
};

window.onresize = function() {updateTextareas(generateNames())};

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

function updateSubgroup() {
    const groupValue = document.getElementById('group-select').value;
    
    populateDropdown('subgroup-select', subgroupOptions[groupValue]);
    updateType();
}

function updateType() {
    const subgroupValue = document.getElementById('subgroup-select').value;
    
    populateDropdown('type-select', typeOptions[subgroupValue] || []);
    generateNames(true);
}

function updateTextareas(value) {
    const textareas = $('textarea:visible');
    
    if (typeof value === 'string') {
        for (let i = 0; i < textareas.length; i++) {
            textareas[i].value = value;
        }
    }
    
    if (Array.isArray(value)) {
        let
            groupCount = textareas.length,
            groupSize = Math.ceil(value.length / groupCount);
        
        for (let i = 0; i < groupCount; i++) {
            let
                startIndex = i * groupSize,
                endIndex = (i + 1) * groupSize
                
            textareas[i].value = value.slice(startIndex, endIndex).join('\n');
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

    if (db && db.groups && Array.isArray(db.groups) && db.groups.length >= 1) {
        for(let j = 0; j < 80; j++) result.push(generateString(db.groups));

        window.namesArray = result;
        updateTextareas(window.namesArray);
    }
    else updateTextareas('Error reading databank!');

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