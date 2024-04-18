window.onload = function() {
    populateDropdown('group-select', groupOptions);
    
    updateSubgroup();
    updateType();
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
    
    list.innerHTML = (objectMap[code] === null) ? 'This databank does not exist!' : 'Generating names. Please, wait...';
    // console.log(objectMap[code]);
}