window.onload = function() {
    populateDropdown('group-select', groupOptions);
    
    updateSubgroup();
};

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
    generateNames();
}

function generateNames() {
    const
        list = document.getElementById('list-textarea'),
        typeValue = document.getElementById('type-select').value,
        groupValue = document.getElementById('group-select').value,
        subgroupValue = document.getElementById('subgroup-select').value;
        
    let code = groupValue + '_' + subgroupValue + '_' + typeValue;
    code = code.split(' ').join('').split('&').join('').toLowerCase();
    
    if (objectMap[code] && objectMap[code].groups && Array.isArray(objectMap[code].groups) && objectMap[code].groups.length >= 1) {
        list.innerHTML = 'Generating names. Please, wait...';
        
        console.log(objectMap[code].groups.length);
    }
    else list.innerHTML =  'This databank does not exist or is corrupted!';
    
}